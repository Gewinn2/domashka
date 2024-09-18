package database

import (
	"database/sql"
	"fmt"
)

type Article struct {
	Id      int    `json:"id"`
	GroupId int    `json:"group_id"`
	Title   string `json:"title"`
}

// Возвращает все топики в группе по id группы
func GetAllArticles(id int, db *sql.DB) ([]Article, error) {
	groupId, err := GetUsersGroup(id, db)
	if err != nil {
		return nil, fmt.Errorf("GetGroupUsers: %w", err)
	}

	query := `SELECT id, group_id, title FROM articles WHERE group_id = $1`
	rows, err := db.Query(query, groupId)
	if err != nil {
		return nil, fmt.Errorf("GetAllArticles: %w", err)
	}
	defer rows.Close()

	var articles []Article

	for rows.Next() {
		var article Article
		if err := rows.Scan(&article); err != nil {
			return nil, err
		}

		articles = append(articles, article)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("GetAllArticles: %w", err)
	}

	return articles, nil
}

// Создает новый топик
func CreateArticle(id int, title string, db *sql.DB) (int, error) {
	groupId, err := GetUsersGroup(id, db)
	if err != nil {
		return 0, fmt.Errorf("CreateArticle: %w", err)
	}

	query := `INSERT INTO articles(group_id, title) VALUES ($1, $2) RETURNING id`
	err = db.QueryRow(query, groupId, title).Scan(&id)
	if err != nil {
		return 0, fmt.Errorf("CreateArticle: %w", err)
	}

	return id, nil
}

// Обновляет топик по id
func UpdateArticle(a Article, db *sql.DB) (Article, error) {
	query := `UPDATE articles SET title = $1 WHERE id = $2`
	_, err := db.Exec(query, a.Title, a.Id)
	if err != nil {
		return a, fmt.Errorf("UpdateArticle: %w", err)
	}

	return a, nil
}

// Удаляет топик по id
func DeleteArticle(id int, db *sql.DB) error {
	query := `DELETE FROM articles WHERE id = $1`
	_, err := db.Exec(query, id)
	if err != nil {
		return fmt.Errorf("DeleteArticle: %w", err)
	}

	return nil
}
