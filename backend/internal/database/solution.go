package database

type Solution struct {
	Id          int    `json:"id"`
	HometaskId  int    `json:"hometask_id"`
	ByUser      int    `json:"by_user"`
	FilePath    string `json:"file_path"`
	FileTypeId  int    `json:"file_type_id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	CreatedAt   string `json:"created_at"`
}

type SolutionRating struct {
	HometaskId int     `json:"hometask_id"`
	ByUser     int     `json:"by_user"`
	Rating     float64 `json:"rating"`
	RatedAt    string  `json:"rated_at"`
}
