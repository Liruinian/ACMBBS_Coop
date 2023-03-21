package service

import (
	"backend/conf"
	"backend/tools"
	"gorm.io/gorm"
)

var (
	DB   *gorm.DB
	Conf conf.Config
)

func init() {
	DB = tools.GetDB()
	Conf = conf.Conf
}
