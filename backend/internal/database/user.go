package database

import (
	"database/sql"
	"fmt"
)

type User struct {
	Id           int    `json:"id"`
	Username     string `json:"username"`
	FirstName    string `json:"first_name"`
	LastName     string `json:"last_name"`
	PhotoUrl     string `json:"photo_url"`
	AuthorizedAt string `json:"authorized_at"`
}

func CreateUser(u User, db *sql.DB) (int, error) {
	query := `INSERT INTO users (id, username, first_name, second_name, photo_url, authorized_at) VALUES ($1, $2, $3, $4, $5, $6)`

	_, err := db.Exec(query, u.Id, u.Username, u.FirstName, u.LastName, u.PhotoUrl, u.AuthorizedAt)
	if err != nil {
		return 0, err
	}

	return u.Id, nil
}

func GetUser(id int, db *sql.DB) (User, error) {
	var user User

	// Запрос для получения данных пользователя по его ID
	query := `SELECT id, username, first_name, second_name, photo_url, authorized_at FROM users WHERE id = $1`

	// Выполнение запроса и сканирование результата
	row := db.QueryRow(query, id)
	err := row.Scan(&user.Id, &user.Username, &user.FirstName, &user.LastName, &user.PhotoUrl, &user.AuthorizedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			// Возвращаем пустого пользователя, если записи нет
			return User{}, fmt.Errorf("user with id %d not found", id)
		}
		return User{}, err
	}

	return user, nil
}
