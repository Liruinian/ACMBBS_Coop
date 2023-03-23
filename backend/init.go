package main

import (
	"backend/conf"
	"backend/service"
	"backend/tools"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

var (
	Conf = conf.Conf
)

func Cors() gin.HandlerFunc {
	// 跨域设置： 前后端分离在不同端口上，需要进行跨域处理
	return func(c *gin.Context) {
		method := c.Request.Method

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
		c.Header("Access-Control-Allow-Headers", "*")
		c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type")
		c.Header("Access-Control-Allow-Credentials", "true")

		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		c.Next()
	}
}
func VerifyMiddleware(aType string) gin.HandlerFunc {
	return func(c *gin.Context) {
		ip := c.ClientIP()

		username, err := c.Cookie("username")
		token, err2 := c.Cookie("token")
		if err != nil || err2 != nil {
			tools.FastJSONResp(c, 403, "访问受限，请重新登录后再进行操作", nil)
			c.Abort()
			return
		}
		if aType == "user" {
			if tools.VerifyUser(username, token) {
				log.Println("UserVerifyMiddleware: " + tools.RenderGreen("允许用户名："+username+" 访问接口"))
				c.Next()
				return
			}
		} else {
			if tools.VerifyAdmin(username, token) {
				log.Println("UserVerifyMiddleware: " + tools.RenderGreen("允许用户名："+username+" 访问接口"))
				c.Next()
				return
			}
		}

		log.Println("UserVerifyMiddleware: " + tools.RenderYellow("不允许ip为"+ip+"的游客访问文章接口"))
		tools.FastJSONResp(c, 403, "访问受限，请重新登录后再进行操作", nil)
		c.Abort()
		return
	}
}

func main() {
	r := gin.New()
	//gin.SetMode(gin.ReleaseMode)
	r.Use(Cors())
	r.POST("/login", service.Login)
	r.POST("/logout", service.Logout)
	r.POST("/register", service.Signup)

	//r.POST("/edit-info", service.EditUserInfo)

	user := r.Group("/user")
	user.Use(VerifyMiddleware("user"))
	{
		user.POST("/info", service.GetUserInfo)
	}

	bbs := r.Group("/bbs")
	bbs.Use(VerifyMiddleware("user"))
	{

	}

	admin := r.Group("/admin")
	admin.Use(VerifyMiddleware("admin"))
	{

	}
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": 200, "msg": "Welcome to bbs.liruinian.top/api/ !", "version": 0.1, "description": "check documentation"})
	})
	r.NoRoute(func(c *gin.Context) {
		c.JSON(200, gin.H{"status": 404, "msg": "无“" + c.Request.RequestURI + "”接口，请查阅api文档后再次尝试访问"})
	})
	err := r.Run(Conf.Port)
	if err != nil {
		log.Println(tools.RenderRed(err.Error()))
	}
}
