# 介绍

:::note
你正在阅读的是 Certimate v0.4 的文档！其中的内容不保证完全适用于之前的版本。
:::

完全开源免费的自托管 SSL 证书 ACME 工具，申请、部署、续期全流程自动化可视化，支持各大主流云厂商。

- **自托管**：私有化部署，所有数据本地化存储，掌控数据的隐私与安全。
- **零依赖**：无需安装数据库、运行时或复杂框架，一键启动，开箱即用。
- **低占用**：超轻量的资源开销，仅需 ~16 MB 内存，甚至可以运行在家用路由器。
- **易操作**：图形化界面，通过简单配置即可完成证书申请、部署和续期的自动化工作。

---

## 💡 特性 {#features}

- 灵活的工作流编排方式，证书从申请到部署完全自动化；
- 支持单域名、多域名、泛域名证书，可选 RSA、ECC 私钥算法；
- 支持 DNS-01（即基于域名解析验证）、HTTP-01（即基于文件验证）两种质询方式；
- 支持 PEM、PFX、JKS 等多种格式输出证书；
- 支持 60+ 域名托管商（如阿里云、腾讯云、AWS、Cloudflare、GoDaddy 等）；
- 支持 110+ 部署目标（如 Kubernetes、CDN、WAF、负载均衡等）；
- 支持邮件、钉钉、飞书、企业微信、Discord、Slack、Telegram 等多种通知渠道；
- 支持 Let's Encrypt、Actalis、Google Trust Services、SSL.com、ZeroSSL 等多种 ACME 证书颁发机构；
- 更多特性等待探索。

---

## 🚀 快速启动 {#quick-start}

**1 分钟运行 Certimate！**

以二进制部署为例，从 [GitHub Releases](https://github.com/certimate-go/certimate/releases) 页面下载预先编译好的可执行文件压缩包，解压缩后在终端中执行：

```bash
./certimate serve
```

浏览器中访问 `http://127.0.0.1:8090`。

初始的管理员账号及密码：

- 账号：`admin@certimate.fun`
- 密码：`1234567890`

即刻使用 Certimate。或者阅读文档中的其他内容以了解更多。

---

## 🖥️ 运行截图 {#screenshot}

![运行截图](https://i.imgur.com/4DAUKEE.gif)

---

## 😖 缺少内容？ {#somthing-missing}

本网站提供项目的使用手册，可供用户作为参考。如果你认为缺少了任何内容，请告知我们或[提交 Pull Request](https://github.com/certimate-go/docs/pulls)。
