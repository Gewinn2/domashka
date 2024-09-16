package database

import (
	"database/sql"
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

// Вывод группы по id(приглашение и участники)
func GetGroup(id int, db *sql.DB) {

}

// Создание группы
func CreateGroup() {
	// TODO: сделать
}

// Присоединение к группе по введенному приглашению
func JoinToGroup() {
	// TODO: сделать
}
