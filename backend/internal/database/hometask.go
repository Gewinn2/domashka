package database

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
func GetAllHometasks() {

}

// Создает новое дз
func CreateHometask() {

}

// Обновляет дз по id
func UpdateHometask() {

}

// Удаляет дз по id
func DeleteHometask() {

}
