﻿# 配置

你可以通过 WebUI 来完成 Certimate 的绝大部分配置，除了以下几点。

---

## 修改监听地址 {#set-listening-url}

### 通过二进制安装的 {#via-binary-installation}

出于安全考虑，Certimate 默认监听 `127.0.0.1:8090`，这意味着你只能通过本地地址访问 Certimate。

你可以在启动时修改这个配置：

```bash
./certimate serve --http 0.0.0.0:9999
```

### 通过 Docker 安装的 {#via-docker-installation}

我们提供的 Docker 镜像已在容器内默认监听 `0.0.0.0:8090`。因此你只需要修改其端口映射，即可在宿主机上通过其他地址访问 Certimate。

```bash
docker run -d \
  --name certimate \
  --restart unless-stopped \
  -p 9999:8090 \
  -v /etc/localtime:/etc/localtime:ro \
  -v /etc/timezone:/etc/timezone:ro \
  -v $(pwd)/data:/app/pb_data \
  certimate/certimate:latest
```

:::caution
因为需要传输授权凭据、证书私钥等敏感数据，请尽量避免在非可信的网络环境下以 HTTP 方式访问 Certimate。
:::

---

## 自身启用 HTTPS {#set-https-for-certimate}

你可以在终端中执行以下命令，来为 Certimate 自身签发一张 Let's Encrypt 的 SSL 证书，并开启 HTTPS 监听。

```bash
# 请将 `${your-domain.com}` 替换为实际值
./certimate serve ${your-domain.com}
```

:::tip
将使用 HTTP-01 质询完成证书申请，请提前配置好域名解析。
:::

---

## 重置登录密码 {#reset-password}

由于某种原因你忘记了 Certimate 的登录密码，你可以在终端中执行以下命令重置：

```bash
# 请将 `${your-account}` 和 `${your-new-password}` 替换为实际值
./certimate superuser update ${your-account} ${your-new-password}
```

如果你是通过 Docker 部署，你可以通过 `docker exec` 命令进入到容器内再执行上述命令。

---

## HTTP 代理 {#http-proxy}

你可以通过环境变量来设置：

```bash
export HTTP_PROXY="http://proxy.example.com"
export HTTPS_PROXY="http://proxy.example.com"
```

设置后需重启 Certimate 以加载新的环境变量值。

---

## 实验性功能 {#experimental-features}

Certimate 提供了一些仍未稳定的实验性功能。

### 初始化管理员账号及密码 {#initialize-administrator}

默认情况下，管理员账号及密码分别为 `admin@certimate.fun` 和 `1234567890`。你可以在启动 Certimate 后通过 WebUI 重新设置它们。

如果你希望在首次启动时就使用指定的账号及密码，你可以通过环境变量来设置它们：

```bash
export CERTIMATE_ADMIN_USERNAME=admin@certimate.fun
export CERTIMATE_ADMIN_PASSWORD=1234567890
```

注意，你必须在首次启动前完成设置。一旦 Certimate 启动，初始的管理员账号及密码就已经生成，你只能通过 WebUI 重新设置它们。

注意，通过环境变量设置的账号及密码也必须符合特定规则，否则可能因为无法通过 WebUI 的前端表单验证而登录失败。

### 设置工作流最大并发数 {#workflow-concurrency-limit}

为了防止系统资源过载，Certimate 会限制工作流的最大并发数。超出并发限制后，新的执行将进入等待队列。

默认值取决于你的 CPU 核心数。你可以通过环境变量来手动设置：

```bash
export CERTIMATE_WORKFLOW_MAX_WORKERS=16
```

### 设置工作流多进程模式 {#workflow-multiproc-mode}

在 v0.4.0 版本之后，会默认开启多进程模式。你可以通过环境变量来关闭它：

```bash
export CERTIMATE_WORKFLOW_MULTIPROC=0
```
