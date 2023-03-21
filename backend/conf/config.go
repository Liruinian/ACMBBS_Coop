package conf

type Config struct {
	Port    string
	UseCors bool
	Domain  string
	UseTLS  bool
	TLSPem  string
	TLSKey  string
	SSLHost string
}

var (
	Conf = Config{
		Port:    ":8109",          // 网站访问端口
		UseCors: true,             // 是否允许跨域访问
		Domain:  ".liruinian.top", // setcookie 时使用的域名
	}
)
