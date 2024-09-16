package database

type Article struct {
	Id      int    `json:"id"`
	GroupId int    `json:"group_id"`
	Title   string `json:"title"`
}

// Возвращает все топики в группе по id группы
func GetAllArticles() {

}

// Создает новый топик
func CreateArticle() {

}

// Обновляет топик по id
func UpdateArticle() {

}

// Удаляет топик по id
func DeleteArticle() {

}
