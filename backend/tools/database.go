package tools

import (
	"github.com/gookit/color"
	"gorm.io/datatypes"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"time"
)

var _db *gorm.DB

type Admin struct {
	AdminID       int    `gorm:"primaryKey;column:adminID" json:"adminID"`
	AdminName     string `gorm:"column:adminName" json:"adminName"`
	AdminPassword string `gorm:"column:adminPassword" json:"adminPassword"`
}
type Reply struct {
	ReID        int       `gorm:"primaryKey;column:reID" json:"reID"`
	ReTopicID   int       `gorm:"column:reTopicID" json:"reTopicId"`
	ReUserID    int       `gorm:"column:reUserID" json:"reUserId"`
	ReEmotion   string    `gorm:"column:reEmotion" json:"reEmotion"`
	ReTitle     string    `gorm:"column:reTitle" json:"reTitle"`
	ReContents  string    `gorm:"column:reContents" json:"reContents"`
	ReTime      time.Time `gorm:"column:reTime" json:"reTime"`
	ReCickCount int       `gorm:"column:reCickCount" json:"reCickCount"`
}
type Section struct {
	SID         int    `gorm:"primaryKey;column:sID" json:"sID"`
	SName       string `gorm:"column:sName" json:"sName"`
	SMasterID   int    `gorm:"column:sMasterID" json:"sMasterId"`
	SStatement  string `gorm:"column:sStatement" json:"sStatement"`
	SClickCount int    `gorm:"column:sClickCount" json:"sClickCount"`
	STopicCount int    `gorm:"column:sTopicCount" json:"sTopicCount"`
}
type Topic struct {
	TID         int       `gorm:"primaryKey;column:tID" json:"tID"`
	TSectionID  int       `gorm:"column:tSectionID" json:"tSectionId"`
	TUserID     int       `gorm:"column:tUserID" json:"tUserId"`
	TReplyCount int       `gorm:"column:tReplyCount" json:"tReplyCount"`
	TEmotion    string    `gorm:"column:tEmotion" json:"tEmotion"`
	TTitle      string    `gorm:"column:tTitle" json:"tTitle"`
	TContents   string    `gorm:"column:tContents" json:"tContents"`
	TTime       time.Time `gorm:"column:tTime" json:"tTime"`
	TClickCount int       `gorm:"column:tClickCount" json:"tClickCount"`
	TLastClick  time.Time `gorm:"column:tLastClick" json:"tLastClick"`
}
type User struct {
	UID           int            `gorm:"primaryKey;column:uID" json:"uID"`
	UserName      string         `gorm:"column:userName" json:"userName"`
	UserPassword  string         `gorm:"column:userPassword" json:"userPassword"`
	UserStudentID string         `gorm:"column:userStudentID" json:"userStudentId"`
	UserSex       string         `gorm:"column:userSex" json:"userSex"`
	UserEmail     string         `gorm:"column:userEmail" json:"userEmail"`
	UserBirthday  datatypes.Date `gorm:"column:userBirthday" json:"userBirthday"`
	UserClass     int            `gorm:"column:userClass" json:"userClass"`
	UserStatement string         `gorm:"column:userStatement" json:"userStatement"`
	UserRegDate   time.Time      `gorm:"column:userRegDate" json:"userRegDate"`
	UserPoint     int            `gorm:"column:userPoint" json:"userPoint"`
}
type UserNoPass struct {
	UID           int            `gorm:"primaryKey;column:uID" json:"uID"`
	UserName      string         `gorm:"column:userName" json:"userName"`
	UserStudentID string         `gorm:"column:userStudentID" json:"userStudentId"`
	UserSex       string         `gorm:"column:userSex" json:"userSex"`
	UserEmail     string         `gorm:"column:userEmail" json:"userEmail"`
	UserBirthday  datatypes.Date `gorm:"column:userBirthday" json:"userBirthday"`
	UserClass     int            `gorm:"column:userClass" json:"userClass"`
	UserStatement string         `gorm:"column:userStatement" json:"userStatement"`
	UserRegDate   time.Time      `gorm:"column:userRegDate" json:"userRegDate"`
	UserPoint     int            `gorm:"column:userPoint" json:"userPoint"`
}
type TopicView struct {
	SID       int       `gorm:"column:sID" json:"sID"`
	SName     string    `gorm:"column:sName" json:"sName"`
	TTitle    string    `gorm:"column:tTitle" json:"tTitle"`
	TContents string    `gorm:"column:tContents" json:"tContents"`
	TTime     time.Time `gorm:"column:tTime" json:"tTime"`
}

func init() {
	var (
		err        error
		DBUsername = "root"
		DBPassword = "e89r245z"
		DBLocation = "127.0.0.1:3306"
		schemaName = "BBS"
	)
	dsn := DBUsername + ":" + DBPassword + "@tcp(" + DBLocation + ")/" + schemaName + "?charset=utf8mb4&parseTime=True&loc=Local"
	_db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Println(color.FgRed.Render("在尝试打开 " + schemaName + "架构时出现错误:"))
		log.Println(color.FgRed.Render(err.Error()))
	}
	log.Println(color.FgGreen.Render("成功与数据库" + schemaName + "建立连接"))
	sqlDB, _ := _db.DB()
	sqlDB.SetMaxOpenConns(100)
	sqlDB.SetMaxIdleConns(20)
}

func GetDB() *gorm.DB {
	return _db
}

func CheckIfExist(db *gorm.DB, qKey int, qValue string) bool {
	// qKey 1:phone 2:email 3:username
	if qKey > 3 {
		return false
	}
	var lList User
	var qType string
	switch qKey {
	case 1:
		qType = "userPhone"
		break
	case 2:
		qType = "userEmail"
		break
	case 3:
		qType = "userName"
		break
	default:
		return true
	}
	db.Table("user").Select("*").Where(qType+" = ?", qValue).Scan(&lList)
	if lList.UID != 0 {
		return true
	} else {
		return false
	}
}

func GetFromPhone(db *gorm.DB, phone string) (results []*User, err error) {
	err = db.Table("user").Model(User{}).Where("`userPhone` = ?", phone).Find(&results).Error
	return
}
func GetFromEmail(db *gorm.DB, email string) (results []*User, err error) {
	err = db.Table("user").Model(User{}).Where("`userEmail` = ?", email).Find(&results).Error
	return
}
func GetFromUsername(db *gorm.DB, username string) (results []*User, err error) {
	err = db.Table("user").Model(User{}).Where("`userName` = ?", username).Find(&results).Error
	return
}
func Safe_GetFromUsername(db *gorm.DB, username string) (results []*User, err error) {
	err = db.Table("user").Model(UserNoPass{}).Where("`userName` = ?", username).Find(&results).Error
	return
}
