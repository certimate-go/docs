# 常见问题

---

## 使用相关 {#basic-usage}

### 提供 SaaS 服务吗？

> 不提供，目前仅支持私有部署。

### 数据真的安全吗？

> 由于仅支持私有部署，各种数据都仅保存在用户自己的服务器上。另外 Certimate 的源码也完全开源，二进制包及 Docker 镜像打包过程全部使用 Github Actions 进行，过程透明可见，可自行审计。

### 证书有效期是多久？

> 这取决于上游证书颁发机构，目前主流的 ACME CA 颁发的免费证书有效期都只有 90 天。Certimate 通过自动化工作流，可在到期前重新申请证书并部署，以实现无限期续期。

### 忘记密码怎么办？

> 请阅读本文档的[《开始 / 配置 / 重置登录密码》](/docs/getting-started/configuration#reset-password)。

### 为何本地 127.0.0.1:8090 能访问，公网访问不了？

> 请阅读本文档的[《开始 / 配置 / 修改监听地址》](/docs/getting-started/configuration#set-the-listening-url)。

### 工作流的实际执行时间与设定时间相差了 8 个小时？

> 可能因为你是 Docker 部署的，而我们提供的镜像默认使用 UTC 时间（因为我们并不能假定用户所处的时区）。你可以在部署时为容器指定环境变量 `TZ=Asia/Shanghai`，或将宿主机的 `/etc/timezone` 挂载到容器内。

---

## 故障排除 {#troubleshooting}

### 无法启动？双击运行一闪而过？

> 如果是二进制部署的，请检查是否启动时遗失了命令行参数 `serve`。Certimate 不支持直接双击可执行程序启动！
>
> 其他部署方式请结合错误日志排查。

### 无法申请证书？

#### 错误日志中包含“could not find zone _xxx_”、“zone _xxx_ not found”，且出现了乱七八糟的域名：

> 可能因为你的域名解析中包含 CNAME 泛解析，可以尝试在工作流编排的申请节点配置中，将「关闭 CNAME 跟随」开关打开后重试。

#### 错误日志中包含“authoritative nameservers: _xxx_ returned SERVFAIL for \_acme-challenge._xxx_.”：

> 可能因为你的域名解析记录未能在权威名称服务器中生效，可以尝试在工作流编排的申请节点配置中，设置「DNS 递归服务器」为公共 DNS（如 `8.8.8.8` 或 `114.114.114.114`），同时设置一个较大的「DNS 传播检查超时时间」值（如 600 秒）后重试。

#### 错误日志中包含“NXDOMAIN looking up TXT for \_acme-challenge._xxx_ - check that a DNS record exists for this domain”：

> 同上。

#### 错误日志中包含“propagation: time limit exceeded”：

> 同上。

#### 错误日志中包含“NS _xxx_ did not return the expected TXT record \[fqdn: \_acme-challenge._xxx_\]”：

> 可能因为你之前使用过其他类似的 SSL 证书申请服务，有遗留的 TXT 解析记录未删除，可以尝试清理无用的 `_acme-challenge.` 和 `_dnsauth.` 的 TXT 解析记录后重试。
>
> 如果你最近变更过域名的注册商或修改过 NS 服务器，还可能是因为存在缓存的解析记录，需要等待 48~72 小时后重试。

#### 错误日志中包含“acme:error:rateLimited”：

> 已触发 Let's Encrypt 的速率限制，需要等到满足条件后才能重试。

#### 错误日志中包含“dial tcp: lookup acme-v02.api.letsencrypt.org on 127.0.0.11:53: i/o timeout”

> 无法连接到 Let's Encrypt 服务器，因为众所周知的原因，在国内的用户会比较常见。确认本机网络畅通的情况下，如果是公有云可以尝试重新申请一个动态 IP，也可以尝试切换到 ZeroSSL 或其他证书颁发机构。

### 无法部署证书？

#### 部署到本地后找不到证书文件：

> 可能因为你是 Docker 部署的，“本地”指的是容器内而非宿主机。
>
> 你可以：
>
> - 将保存路径挂载到宿主机上；
> - 或者选择使用 SSH 部署到宿主机上。

#### 部署到 SSH 时报错：“failed to open remote file: sftp: "Failure"(SSH FX FAILURE)”

> 可能因为文件权限不足，或磁盘空间不足。
>
> 也可能因为在部署节点配置中你输入的并非文件保存的完整路径，而是目录。

### 已部署证书，但浏览器显示证书错误？

#### 使用泛域名证书，提示“服务器的证书与网址不相符”：

> 泛域名 `*.example.com` 只能匹配次一级域名，如 `www.example.com`、`static.example.com`，不能匹配 `example.com`。这是正常且符合 TLS/SSL 规范的。
>
> 如果你还想让根域名也可以使用同一张证书，你需要在申请时同时填入 `*.example.com; example.com` 这两个域名，签发一张多域名证书。
>
> P.S. 某些云厂商的收费证书服务会在你购买 `*.example.com` 泛域名证书时自动帮你补上 `example.com`，实际上最后签发的也是多域名证书，而并不是单个泛域名证书。

#### 操作系统版本过旧，提示“此 CA 根目录证书不受信任”：

> 请参考 Let's Encrypt 关于证书兼容性的相关说明：
> https://letsencrypt.org/zh-cn/docs/certificate-compatibility/

---

## 仍不能解决问题？ {#cannot-solve-the-problem}

如果以上内容都无法解决你的问题，欢迎到 [GitHub Issues](https://github.com/usual2970/certimate/issues) 中提问。
