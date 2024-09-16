package database

type Article struct {
	Id      int    `json:"id"`
	GroupId int    `json:"group_id"`
	Title   string `json:"title"`
}
