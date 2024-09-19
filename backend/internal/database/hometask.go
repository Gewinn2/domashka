package database

import (
	"database/sql"
	"fmt"
)

type FileType struct {
	Id       int    `json:"id"`
	TypeName string `json:"type_name"`
}

type Hometask struct {
	Id          int    `json:"id"`
	ArticleId   int    `json:"article_id"`
	FilePath    string `json:"file_path"`
	FileTypeId  int    `json:"file_type_id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Deadline    string `json:"deadline"`
	CreatedAt   string `json:"created_at"`
}

// Возвращает все дз в топике по id топика
func GetAllHometasks(id int, db *sql.DB) ([]Hometask, error) {
	query := `SELECT * FROM hometasks WHERE article_id = $1`
	rows, err := db.Query(query, id)
	if err != nil {
		return nil, fmt.Errorf("GetAllHometasks: %w", err)
	}
	defer rows.Close()

	var hometasks []Hometask

	for rows.Next() {
		var hometask Hometask
		if err := rows.Scan(&hometask); err != nil {
			return nil, err
		}

		hometasks = append(hometasks, hometask)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("GetAllHometasks: %w", err)
	}

	return hometasks, nil
}

// Создает новое дз
func CreateHometask(h Hometask, db *sql.DB) (int, error) {
	var id int
	query := `INSERT INTO hometasks(article_id, file_path, file_type_id, title, description, deadline, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
	err := db.QueryRow(query, h.ArticleId, h.FilePath, h.FileTypeId, h.Title, h.Description, h.Deadline, h.CreatedAt).Scan(&id)
	if err != nil {
		return 0, fmt.Errorf("CreateHometask: %w", err)
	}

	return id, nil
}

// Обновляет дз по id
func UpdateHometask(h Hometask, db *sql.DB) (Hometask, error) {
	query := `UPDATE hometasks SET file_path = $1, file_type_id = $2, title = $3, description = $4, deadline = $5 WHERE id = $6`
	_, err := db.Exec(query, h.FilePath, h.FileTypeId, h.Title, h.Description, h.Deadline, h.Id)
	if err != nil {
		return h, fmt.Errorf("UpdateHometask: %w", err)
	}

	return h, nil
}

// Удаляет дз по id
func DeleteHometask(id int, db *sql.DB) error {
	query := `DELETE FROM hometasks WHERE id = $1`
	_, err := db.Exec(query, id)
	if err != nil {
		return fmt.Errorf("DeleteHometask: %w", err)
	}

	return nil
}
