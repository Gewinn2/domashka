package main

import (
	"domashka/internal/database"
	"domashka/internal/handler"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

func main() {
	db := database.InitDataBase()
	defer db.Close()

	r := gin.Default()
	handler.InitRoutes(r, db)

	r.Run(":8085")
}
