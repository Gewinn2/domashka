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
