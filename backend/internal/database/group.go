package database

import (
	"database/sql"
	"fmt"
)

type Role struct {
	Id       int    `json:"id"`
	RoleName string `json:"role_name"`
}

type Group struct {
	Id         int    `json:"id"`
	GroupName  string `json:"group_name"`
	InviteLink string `json:"invite_link"`
	CreatedAt  string `json:"created_at"`
}

type GroupUsers struct {
	UserId  int `json:"user_id"`
	GroupId int `json:"group_id"`
	RoleId  int `json:"role_id"`
}

// Получение группы, в которой состоит пользователь
func GetUsersGroup(id int, db *sql.DB) (int, error) {
	var groupId int
	query := `SELECT group_id FROM group_users WHERE user_id = $1`

	row := db.QueryRow(query, id)
	err := row.Scan(&groupId)
	if err != nil {
		return 0, fmt.Errorf("GetUsersGroup: %w", err)
	}
	return groupId, nil
}

// Получение участников группы по id
func GetGroupUsers(id int, db *sql.DB) ([]User, error) {
	groupId, err := GetUsersGroup(id, db)
	if err != nil {
		return nil, fmt.Errorf("GetGroupUsers: %w", err)
	}

	query := `SELECT user_id FROM group_users WHERE group_id = $1`
	rows, err := db.Query(query, groupId)
	if err != nil {
		return nil, fmt.Errorf("GetGroupUsers: %w", err)
	}
	defer rows.Close()

	var users []User

	for rows.Next() {
		var userId int
		if err := rows.Scan(&userId); err != nil {
			return nil, err
		}

		user, err := GetUser(userId, db)
		if err != nil {
			return nil, fmt.Errorf("GetGroupUsers: %w", err)
		}
		users = append(users, user)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("GetGroupUsers: %w", err)
	}

	return users, nil
}

// Получение инвайта по id пользователя
func GetGroupLink(id int, db *sql.DB) (string, error) {
	groupId, err := GetUsersGroup(id, db)
	if err != nil {
		return "", err
	}

	var inviteLink string
	query := `SELECT invite_link FROM groups WHERE id = $1`
	row := db.QueryRow(query, groupId)
	err = row.Scan(&inviteLink)
	if err != nil {
		return "", fmt.Errorf("GetGroupLink: %w", err)
	}

	return inviteLink, nil
}

// Создание группы
func CreateGroup(userId int, g Group, db *sql.DB) (int, error) {
	var id int

	query := `INSERT INTO groups(group_name, invite_link, created_at) VALUES ($1, $2, $3) RETURNING id`
	err := db.QueryRow(query, g.GroupName, g.InviteLink, g.CreatedAt).Scan(&id)
	if err != nil {
		return 0, fmt.Errorf("CreateGroup: %w", err)
	}

	err = JoinToGroup(userId, 0, g.InviteLink, db)
	if err != nil {
		return 0, fmt.Errorf("CreateGroup: %w", err)
	}

	return id, nil
}

// Присоединение к группе по введенному приглашению
func JoinToGroup(userId, roleId int, inviteLink string, db *sql.DB) error {
	var groupId int
	query := `SELECT id FROM groups WHERE invite_link = $1`

	row := db.QueryRow(query, inviteLink)
	err := row.Scan(&groupId)
	if err != nil {
		return fmt.Errorf("JoinToGroup: %w", err)
	}

	query = `INSERT INTO group_users(user_id, group_id, role_id) VALUES($1, $2, $3)`
	_, err = db.Exec(query, userId, groupId, roleId)
	if err != nil {
		return fmt.Errorf("CreateGroup: %w", err)
	}

	return nil
}
