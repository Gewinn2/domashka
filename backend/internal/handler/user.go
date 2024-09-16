package handler

import (
	"domashka/internal/database"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

// При входе в приложение проверяет есть ли уже такой зарегистрированный
// пользователь, если нет, добавляет его в бд
func (s *Server) AddUser(c *gin.Context) {
	idToConv, ok := c.Get("id")
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Id not found"})
		fmt.Println("AddUser:", ok)
		return
	}
	id := idToConv.(int)

	user, err := database.GetUser(id, s.db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Printf("AddUser: Empty id field: %s\n", err)
		return
	}

	if user.Id == 0 {
		usernameToConv, _ := c.Get("username")
		username := usernameToConv.(string)

		firstNameToConv, _ := c.Get("first_name")
		firstName := firstNameToConv.(string)

		lastNameToConv, _ := c.Get("last_name")
		lastName := lastNameToConv.(string)

		photoURLToConv, _ := c.Get("photo_url")
		photoURL := photoURLToConv.(string)

		user.Id = id
		user.Username = username
		user.FirstName = firstName
		user.LastName = lastName
		user.PhotoUrl = photoURL
		user.AuthorizedAt = time.Now().Format("2006-02-01 15:04:05")

		_, err := database.CreateUser(user, s.db)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusCreated, id)
	}
}
