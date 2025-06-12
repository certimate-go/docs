# 源码编译安装

有二次开发或源码审计需要的用户可以采用这种方式安装 Certimate。

---

## 要求 {#prerequisites}

支持以下系统架构：

- linux/amd64
- linux/arm64
- linux/armv7
- darwin/amd64
- darwin/arm64
- windows/amd64
- windows/arm64
- 原则上支持 [_Go Wiki_](https://go.dev/wiki/MinimumRequirements) 中所列出的其他架构，但未经测试。

需要以下运行环境：

- Go 1.24+
- Node.js 20.0+

---

## 克隆 {#clone}

```bash
git clone https://github.com/usual2970/certimate.git
```

---

## 构建 {#build}

```bash
make local.run
```

---

## 运行 {#run}

请阅读本文档的[《开始 / 安装 / 二进制安装 / 运行》](/docs/getting-started/installation/binary/#run)
