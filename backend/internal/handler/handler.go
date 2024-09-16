package handler

import (
	"database/sql"
	"domashka/pkg"
	"github.com/gin-gonic/gin"
)

type Server struct {
	r  *gin.Engine
	db *sql.DB
}

func InitRoutes(r *gin.Engine, db *sql.DB) {
	s := &Server{r: r, db: db}
	s.r.Use(pkg.CORSMiddleware())
	s.r.POST("/user")

	authGroup := s.r.Group("/")
	authGroup.Use()
	{
		authGroup.POST("/group")
		authGroup.DELETE("/group")
	}
}
