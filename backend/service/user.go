package service

import (
	"backend/tools"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/gookit/color"
	"gorm.io/datatypes"
	"log"
	"time"
)

type RequestLoginForm struct {
	Usr       string `json:"user"`
	Pass      string `json:"password"`
	LoginType int    `json:"logintype"`
}
type User struct {
	UserName      string         `gorm:"column:userName" json:"username"`
	UserPassword  string         `gorm:"column:userPassword" json:"password"`
	UserPhone     string         `gorm:"column:userPhone" json:"phone"`
	UserStudentID string         `gorm:"column:userStudentID" json:"studentId"`
	UserSex       string         `gorm:"column:userSex" json:"sex"`
	UserEmail     string         `gorm:"column:userEmail" json:"email"`
	UserBirthday  datatypes.Date `gorm:"column:userBirthday" json:"birthday"`
	UserStatement string         `gorm:"column:userStatement" json:"statement"`
	UserRegDate   string         `gorm:"column:userRegDate" json:"-"`
}

func Login(c *gin.Context) {
	var lForm RequestLoginForm
	err := c.ShouldBindJSON(&lForm)
	if err != nil {
		tools.FastJSONResp(c, 2001, "登录失败：输入格式不正确", nil)
		return
	}
	if lForm.Usr == "" || lForm.Pass == "" {
		tools.FastJSONResp(c, 2001, "登录失败：用户名或密码不能为空", nil)
		return
	}
	var res []*tools.User
	if lForm.LoginType == 1 {
		res, err = tools.GetFromPhone(DB, lForm.Usr)
		if err != nil || len(res) == 0 {
			tools.FastJSONResp(c, 2003, "登录失败：请检查用户名或密码是否正确", nil)
			return
		}
	} else if lForm.LoginType == 2 {
		res, err = tools.GetFromEmail(DB, lForm.Usr)
		if err != nil || len(res) == 0 {
			tools.FastJSONResp(c, 2003, "登录失败：请检查用户名或密码是否正确", nil)
			return
		}
	} else if lForm.LoginType == 3 {
		res, err = tools.GetFromUsername(DB, lForm.Usr)
		if err != nil || len(res) == 0 {
			tools.FastJSONResp(c, 2003, "登录失败：请检查用户名或密码是否正确", nil)
			return
		}
	} else {
		tools.FastJSONResp(c, 2001, "登录失败：输入格式不正确", nil)
		return
	}
	if len(res) > 1 {
		tools.FastJSONResp(c, 2004, "登录失败：存在多个对应账号，请尝试使用其他方式登录或联系客服处理", nil)
		return
	}
	lDBForm := res[0]
	if err != nil {
		return
	}
	if tools.ComparePwd(lDBForm.UserPassword, lForm.Pass) {
		log.Printf(color.FgGreen.Render(lDBForm.UserName + " 用户成功登录！"))
		tools.FastJSONResp(c, 2000, "ok", tools.CreateUserToken(lDBForm.UserName))
		return
	} else {
		tools.FastJSONResp(c, 2003, "登录失败：请检查用户名或密码是否正确", nil)
		return
	}
}

func Signup(c *gin.Context) {
	var sForm User
	err := c.ShouldBindJSON(&sForm)
	if err != nil {
		tools.FastJSONResp(c, 2011, "注册失败：输入格式不正确\n"+err.Error(), nil)
		return
	}
	if sForm.UserName == "" || sForm.UserEmail == "" || sForm.UserPhone == "" || sForm.UserPassword == "" {
		tools.FastJSONResp(c, 2012, "注册失败：注册必填项不能有空值", nil)
		return
	}
	// TODO 校验post得到的格式是否符合规范：增加安全性
	if tools.CheckIfExist(DB, 1, sForm.UserPhone) {
		tools.FastJSONResp(c, 2013, "注册失败：手机号已被注册", nil)
		return
	}
	if tools.CheckIfExist(DB, 2, sForm.UserEmail) {
		tools.FastJSONResp(c, 2013, "注册失败：邮箱已被注册", nil)
		return
	}
	if tools.CheckIfExist(DB, 3, sForm.UserName) {
		tools.FastJSONResp(c, 2013, "注册失败：用户名已被注册", nil)
		return
	}
	encrypted, err := tools.GetPwd(sForm.UserPassword)
	if err != nil {
		tools.FastJSONResp(c, 2014, "注册失败：密码加密部分出现问题", nil)
	}
	sForm.UserPassword = string(encrypted)
	sForm.UserRegDate = time.Now().Format("2006-01-02")
	DB.Table("user").Create(sForm)
	tools.FastJSONResp(c, 2010, "ok", nil)
	return
}

func Logout(c *gin.Context) {
	usrName, err := c.Cookie("username")
	if err != nil {
		c.JSON(200, gin.H{"code": 2021, "msg": "登出失败：可能登录已过期"})
		return
	}
	c.SetCookie("username", "", 0, "/", Conf.Domain, true, false)
	c.SetCookie("token", "", 0, "/", Conf.Domain, true, false)
	log.Printf(color.FgGreen.Render(usrName + " 用户成功登出！"))
	c.JSON(200, gin.H{"code": 2020, "msg": "success"})
}

func GetUserInfo(c *gin.Context) {
	usrName, err := c.Cookie("username")
	if err != nil {
		c.JSON(200, gin.H{"code": 2031, "msg": "获取失败：请检查登录状态"})
		return
	}
	res, err := tools.Safe_GetFromUsername(DB, usrName)
	if err != nil || len(res) == 0 || len(res) > 1 {
		tools.FastJSONResp(c, 2031, "获取失败：请检查登录状态", nil)
		return
	}
	jsonRes, err := json.Marshal(res[0])
	if err != nil {
		tools.FastJSONResp(c, 2032, "获取失败：转换为json错误", nil)
		return
	}
	tools.FastJSONResp(c, 2030, "ok", string(jsonRes))
}
