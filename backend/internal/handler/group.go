package handler

import (
	"domashka/internal/database"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"net/http"
	"time"
)

// Вывод группы по id(приглашение и участники)
func (s *Server) GetGroup(c *gin.Context) {
	idToConv, ok := c.Get("id")
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Id not found"})
		fmt.Println("GetGroup:", ok)
		return
	}
	id := idToConv.(int)

	if id <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user_id"})
		fmt.Println("GetGroup:", "Invalid user_id")
		return
	}

	users, err := database.GetGroupUsers(id, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Printf("GetGroup: Empty id field: %s\n", err)
		return
	}

	inviteLink, err := database.GetGroupLink(id, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Printf("GetGroup: Empty id field: %s\n", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{"invite_link": inviteLink, "users": users})
}

// Создание группы
func (s *Server) CreateGroup(c *gin.Context) {
	idToConv, ok := c.Get("id")
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Id not found"})
		fmt.Println("CreateGroup:", ok)
		return
	}
	id := idToConv.(int)

	if id <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user_id"})
		fmt.Println("CreateGroup:", "Invalid user_id")
		return
	}

	var group database.Group
	if err := c.ShouldBindJSON(&group); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println("CreateGroup:", err)
		return
	}

	if group.GroupName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Empty group name"})
		fmt.Println("CreateGroup:", "Empty group name")
		return
	}

	group.InviteLink = uuid.New().String()
	group.CreatedAt = time.Now().Format("2006-02-01 15:04:05")
	groupId, err := database.CreateGroup(id, group, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("CreateGroup:", err)
		return
	}

	c.JSON(http.StatusCreated, gin.H{"id": groupId})
}

// Присоединение к группе по введенному приглашению
func (s *Server) JoinToGroup(c *gin.Context) {
	idToConv, ok := c.Get("id")
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Id not found"})
		fmt.Println("JoinToGroup:", ok)
		return
	}
	id := idToConv.(int)

	if id <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user_id"})
		fmt.Println("JoinToGroup:", "Invalid user_id")
		return
	}

	var group database.Group
	if err := c.ShouldBindJSON(&group); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println("JoinToGroup:", err)
		return
	}

	if group.InviteLink == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Empty invite link"})
		fmt.Println("JoinToGroup:", "Empty invite link")
		return
	}

	err := database.JoinToGroup(id, 0, group.InviteLink, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println("JoinToGroup:", ok)
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "success"})
}
