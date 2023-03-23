package tools

import (
	"github.com/gin-gonic/gin"
	"github.com/gookit/color"
	"golang.org/x/crypto/bcrypt"
	"log"
	"time"
)

var (
	RenderGreen  func(a ...interface{}) string
	RenderRed    func(a ...interface{}) string
	RenderYellow func(a ...interface{}) string
)

func init() {
	RenderGreen = color.FgGreen.Render
	RenderRed = color.FgRed.Render
	RenderYellow = color.FgYellow.Render
}

func GetPwd(pwd string) ([]byte, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(pwd), bcrypt.DefaultCost)
	return hash, err
}

func ComparePwd(pwd1 string, pwd2 string) bool {
	// Returns true on success, pwd1 is for the database.
	err := bcrypt.CompareHashAndPassword([]byte(pwd1), []byte(pwd2))
	if err != nil {
		return false
	} else {
		return true
	}
}

func VerifyAdmin(username string, aToken string) bool {
	if VerifyToken(aToken, "token", username+" is admin"+time.Now().Format("2006-01-02")) {
		return true
	}
	return false
}
func VerifyUser(username string, lToken string) bool {
	if VerifyToken(lToken, "token", username+time.Now().Format("2006-01-02")) {
		return true
	}
	return false
}
func CreateToken(tokenName string, tokenCtx string) string {
	token, err := JwtEncoder(tokenName, tokenCtx, int64(3*time.Hour))
	if err != nil {
		log.Println(color.FgRed.Render("Create Token Failed! name:" + tokenName + " ctx:" + tokenCtx))
		log.Println(color.FgRed.Render(err.Error()))
		return ""
	}
	return token
}

func VerifyToken(token string, tokenName string, tokenCtx string) bool {
	name, ctx, err := JwtDecoder(token)
	if err != nil {
		log.Println(color.FgRed.Render("Verify Token Failed! Decoder Error!"))
		log.Println(color.FgRed.Render(err.Error()))
		return false
	}
	if name != tokenName {
		log.Println(color.FgRed.Render("Verify Token Failed! name Not Valid!"))
	} else {
		if ctx == tokenCtx {
			return true
		}
	}

	return false
}
func FastJSONResp(c *gin.Context, status int, msg string, data any) {
	if data != nil {
		c.JSON(200, gin.H{"status": status, "msg": msg, "data": data})
	} else {
		c.JSON(200, gin.H{"status": status, "msg": msg})
	}
}

func CreateUserToken(UserName string) gin.H {
	token := CreateToken("token", UserName+time.Now().Format("2006-01-02"))
	lJSON := gin.H{"username": UserName, "token": token}
	return lJSON
}
