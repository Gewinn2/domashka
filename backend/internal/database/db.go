package database

import (
	"database/sql"
	config "domashka"
	"fmt"
	"log"
)

func InitDataBase() *sql.DB {
	conStr := fmt.Sprintf(
		"host=%v port=%v user=%v password=%v dbname=%v sslmode=disable",
		config.DbData["host"],
		config.DbData["port"],
		config.DbData["user"],
		config.DbData["password"],
		config.DbData["database"])
	db, err := sql.Open("postgres", conStr)
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	// Создание таблицы пользователей
	createUsersTable := `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR NOT NULL,
        first_name VARCHAR,
        second_name VARCHAR,
        authorized_at TIMESTAMP
    );
    `
	_, err = db.Exec(createUsersTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'users' создана успешно.")

	// Создание таблицы ролей
	createRolesTable := `
    CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        role_name VARCHAR NOT NULL -- admin/user
    );
    `
	_, err = db.Exec(createRolesTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'roles' создана успешно.")

	// Создание таблицы групп
	createGroupsTable := `
    CREATE TABLE IF NOT EXISTS groups (
        id SERIAL PRIMARY KEY,
        group_name VARCHAR NOT NULL,
        invite_link VARCHAR,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `
	_, err = db.Exec(createGroupsTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'groups' создана успешно.")

	// Создание таблицы пользователей групп
	createGroupUsersTable := `
    CREATE TABLE IF NOT EXISTS group_users (
        user_id INTEGER NOT NULL,
        group_id INTEGER NOT NULL,
        role_id INTEGER NOT NULL,
        PRIMARY KEY (user_id, group_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
        FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
    );
    `
	_, err = db.Exec(createGroupUsersTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'group_users' создана успешно.")

	// Создание таблицы статей
	createArticlesTable := `
    CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        group_id INTEGER NOT NULL,
        title VARCHAR NOT NULL,
        FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
    );
    `
	_, err = db.Exec(createArticlesTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'articles' создана успешно.")

	// Создание таблицы типов файлов
	createFileTypesTable := `
    CREATE TABLE IF NOT EXISTS file_types (
        id SERIAL PRIMARY KEY,
        type_name VARCHAR NOT NULL
    );
    `
	_, err = db.Exec(createFileTypesTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'file_types' создана успешно.")

	// Создание таблицы домашних заданий
	createHometasksTable := `
    CREATE TABLE IF NOT EXISTS hometasks (
        id SERIAL PRIMARY KEY,
        article_id INTEGER NOT NULL,
        file_path TEXT,
        file_type_id INTEGER,
        title VARCHAR NOT NULL,
        description VARCHAR,
        deadline TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
        FOREIGN KEY (file_type_id) REFERENCES file_types(id) ON DELETE SET NULL
    );
    `
	_, err = db.Exec(createHometasksTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'hometasks' создана успешно.")

	// Создание таблицы решений
	createSolutionsTable := `
    CREATE TABLE IF NOT EXISTS solutions (
        id SERIAL PRIMARY KEY,
        hometask_id INTEGER NOT NULL,
        by_user INTEGER NOT NULL,
        file_path TEXT,
        file_type_id INTEGER,
        title VARCHAR NOT NULL,
        description VARCHAR,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (hometask_id) REFERENCES hometasks(id) ON DELETE CASCADE,
        FOREIGN KEY (file_type_id) REFERENCES file_types(id) ON DELETE SET NULL,
        FOREIGN KEY (by_user) REFERENCES users(id) ON DELETE CASCADE
    );
    `
	_, err = db.Exec(createSolutionsTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'solutions' создана успешно.")

	// Создание таблицы оценок решений
	createSolutionsRatingsTable := `
    CREATE TABLE IF NOT EXISTS solutions_ratings (
        hometask_id INTEGER NOT NULL,
        by_user INTEGER NOT NULL,
        rating FLOAT NOT NULL,
        rated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (hometask_id, by_user),
        FOREIGN KEY (hometask_id) REFERENCES hometasks(id) ON DELETE CASCADE,
        FOREIGN KEY (by_user) REFERENCES users(id) ON DELETE CASCADE
    );
    `
	_, err = db.Exec(createSolutionsRatingsTable)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Таблица 'solutions_ratings' создана успешно.")

	return db
}
