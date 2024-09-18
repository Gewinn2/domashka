package handler

import (
	"domashka/internal/database"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// Возвращает все топики в группе по id группы
func (s *Server) GetAllArticles(c *gin.Context) {
	idToConv, ok := c.Get("id")
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Id not found"})
		fmt.Println("GetAllArticles:", ok)
		return
	}
	id := idToConv.(int)

	articles, err := database.GetAllArticles(id, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("GetAllArticles:", ok)
		return
	}

	c.JSON(http.StatusOK, articles)
}

// Создает новый топик
func (s *Server) CreateArticle(c *gin.Context) {
	idToConv, ok := c.Get("id")
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Id not found"})
		fmt.Println("GetAllArticles:", ok)
		return
	}
	id := idToConv.(int)

	var article database.Article
	if err := c.ShouldBindJSON(&article); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println("CreateArticle:", err)
		return
	}

	articleId, err := database.CreateArticle(id, article.Title, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("CreateArticle:", err)
		return
	}

	c.JSON(http.StatusCreated, gin.H{"id": articleId})
}

// Обновляет топик по id
func (s *Server) UpdateArticle(c *gin.Context) {
	var article database.Article
	if err := c.ShouldBindJSON(&article); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println("UpdateArticle:", err)
		return
	}

	_, err := database.UpdateArticle(article, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("UpdateArticle:", err)
		return
	}

	c.JSON(http.StatusCreated, article)
}

// Удаляет топик по id
func (s *Server) DeleteArticle(c *gin.Context) {
	articleIdStr := c.Query("id")
	articleId, err := strconv.Atoi(articleIdStr)
	if err != nil {
		fmt.Println("DeleteArticle:", err)
		c.JSON(http.StatusBadRequest, err)
		return
	}

	err = database.DeleteArticle(articleId, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("UpdateArticle:", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "success"})
}
