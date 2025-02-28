# 源码编译部署

有二次开发或源码审计需要的用户可以采用这种方式安装 Certimate。

---

## 环境要求 {#requirements}

支持以下系统架构：

- linux/amd64
- linux/arm64
- darwin/amd64
- darwin/arm64
- windows/amd64
- windows/arm64

需要以下运行环境：

- Go 1.22+
- Node.js 20.0+

---

## 克隆源码 {#clone}

```bash
git clone https://github.com/usual2970/certimate.git
```

---

## 执行构建 {#build}

```bash
make local.run
```
