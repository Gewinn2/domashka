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

	authGroup := s.r.Group("/")
	authGroup.Use(pkg.GetJWTClaims)
	{
		s.r.POST("/user", s.AddUser)

		authGroup.GET("/group", s.GetGroup)
		authGroup.POST("/group", s.CreateGroup)
		authGroup.POST("/group_join", s.JoinToGroup)

		authGroup.GET("/article", s.GetAllArticles)
		authGroup.POST("/article", s.CreateArticle)
		authGroup.PUT("/article", s.UpdateArticle)
		authGroup.DELETE("/article", s.DeleteArticle)

		authGroup.GET("/hometask", s.GetAllHometasks)
		authGroup.POST("/hometask", s.CreateHometask)
		authGroup.PUT("/hometask", s.UpdateHometask)
		authGroup.DELETE("/hometask", s.DeleteHometask)
	}
}
