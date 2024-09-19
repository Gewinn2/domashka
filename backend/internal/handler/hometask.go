package handler

import (
	"domashka/internal/database"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// Возвращает все дз в топике по id топика
func (s *Server) GetAllHometasks(c *gin.Context) {
	hometaskIdStr := c.Query("id")
	hometaskId, err := strconv.Atoi(hometaskIdStr)
	if err != nil {
		fmt.Println("GetAllHometasks:", err)
		c.JSON(http.StatusBadRequest, err)
		return
	}

	hometasks, err := database.GetAllHometasks(hometaskId, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("GetAllHometasks:", err.Error())
		return
	}

	c.JSON(http.StatusOK, hometasks)
}

// Создает новое дз
func (s *Server) CreateHometask(c *gin.Context) {
	var hometask database.Hometask
	if err := c.ShouldBindJSON(&hometask); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println("CreateHometask:", err)
		return
	}

	hometaskId, err := database.CreateHometask(hometask, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("CreateHometask:", err)
		return
	}

	c.JSON(http.StatusCreated, gin.H{"id": hometaskId})
}

// Обновляет дз по id
func (s *Server) UpdateHometask(c *gin.Context) {
	var hometask database.Hometask
	if err := c.ShouldBindJSON(&hometask); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println("UpdateHometask:", err)
		return
	}

	_, err := database.UpdateHometask(hometask, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("UpdateHometask:", err)
		return
	}

	c.JSON(http.StatusCreated, hometask)
}

// Удаляет дз по id
func (s *Server) DeleteHometask(c *gin.Context) {
	hometaskIdStr := c.Query("id")
	hometaskId, err := strconv.Atoi(hometaskIdStr)
	if err != nil {
		fmt.Println("GetAllHometasks:", err)
		c.JSON(http.StatusBadRequest, err)
		return
	}

	err = database.DeleteHometask(hometaskId, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("DeleteHometask:", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "success"})
}
