package pkg

import (
	config "domashka"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"net/http"
)

func GetJWTClaims(c *gin.Context) {
	initData := c.Query("initData")
	if initData == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Missing initData parameter"})
		return
	}

	secretKey := config.TelegramSecretKey

	// Декодирование JWT
	token, err := jwt.Parse(initData, func(token *jwt.Token) (interface{}, error) {
		return []byte(secretKey), nil
	})

	if err != nil || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
		return
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		id := claims["id"].(string)
		firstName := claims["first_name"].(string)
		lastName := claims["last_name"].(string)
		username := claims["username"].(string)
		photoURL := claims["photo_url"].(string)

		c.Set("uid", id)
		c.Set("first_name", firstName)
		c.Set("last_name", lastName)
		c.Set("username", username)
		c.Set("photo_url", photoURL)
	} else {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Траблы с токеном"})
		return
	}

}
