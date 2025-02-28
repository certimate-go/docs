---
sidebar_position: 3
---

# 常见问题

## 提供 saas 服务吗？

不提供，目前仅支持 self-hosted（私有部署）。

## 数据安全？

由于仅支持私有部署，各种数据都保存在用户的服务器上。另外 Certimate 源码也开源，二进制包及 Docker 镜像打包过程全部使用 Github actions 进行，过程透明可见，可自行审计。

## 自动续期证书？

已经申请的证书会在过期前 10 天自动续期。每天会检查一次证书是否快要过期，快要过期时会自动重新申请证书并部署到目标服务上。

Q: Why Certimate?
A: https://docs.certimate.me/blog/why-certimate

Q: 密码忘了？
A: ./certimate admin update admin@certimate.fun 新密码

Q: could not find zone，且日志里出现了乱七八糟的域名？
A: 可在 编辑域名 》申请配置 》高级设置里 》禁用 DNS CNAME 跟随

Q: 为何本地 127.0.0.1:8090 能访问，公网访问不了？
A: 目前默认监听 127.0.0.1，可以执行 ./certimate serve --http 0.0.0.0:8090 解决

Q: 数据？
A: 数据存储使用 sqlite，一般保存在运行目录的 pb_data 下，你可以定期备份这个文件夹或使用https://litestream.io进行备份还原

Q: Certimate 自身支持 https?
A: 运行 ./certimate serve 你的域名
