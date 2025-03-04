# Docker 安装

推荐熟悉 Docker 的用户采用这种方式安装 Certimate。

---

## 要求 {#prerequisites}

- Docker Engine 1.13.1+
- Docker Compose 1.27.0+

---

## Docker Compose {#docker-compose}

你可以复制以下命令到终端中，即可通过 Docker Compose 一键部署 Certimate：

```bash
mkdir -p ~/.certimate && \
cd ~/.certimate && \
curl -O https://raw.githubusercontent.com/usual2970/certimate/refs/heads/main/docker/docker-compose.yml && \
docker compose up -d
```

上述命令会从 GitHub 仓库中下载 `docker-compose.yml`，你也可以根据我们提供的 `docker-compose.yml` 文件内容自行部署：

```yaml showLineNumbers
version: "3.0"
services:
  certimate:
    image: usual2970/certimate:latest
    container_name: certimate_server
    ports:
      - 8090:8090
    volumes:
      - ./data:/app/pb_data
    restart: unless-stopped
```

---

## Docker {#docker}

如果你不想使用 Docker Compose，也可以通过 `docker run` 命令运行：

```bash
# 拉取镜像
docker pull usual2970/certimate:latest
# 启动容器
docker run -d \
  --name certimate_server \
  --restart unless-stopped \
  -p 8090:8090 \
  -v ./data:/app/pb_data \
  usual2970/certimate:latest
```

---

## 国内镜像 {#cn-mirror}

由于众所周知的原因，国内用户可能无法正常访问 Docker Hub 并拉取镜像。

我们也为此提供了在阿里云上的加速镜像，它与 Docker Hub 上的版本完全一致，你只需在镜像名前增加仓库前缀 `registry.cn-shanghai.aliyuncs.com`：

```bash
# 拉取镜像
docker pull registry.cn-shanghai.aliyuncs.com/usual2970/certimate:latest
# 启动容器
docker run -d \
  --name certimate_server \
  --restart unless-stopped \
  -p 8090:8090 \
  -v ./data:/app/pb_data \
  registry.cn-shanghai.aliyuncs.com/usual2970/certimate:latest
```

---

## 运行指定版本 {#run-the-specified-version}

上述 `docker-compose.yml` 或 `docker run` 命令示例中，出现的均为 `lastest` 版本，它表示 Certimate 的当前最新发布的稳定版本。

如果你想运行某个指定版本的 Certimate，你可以在拉取镜像时指定：

```bash
# 拉取 v0.3.0 镜像
docker pull usual2970/certimate:latest:v0.3.0
```

完整的版本发布记录可以在 [GitHub Releases](https://github.com/usual2970/certimate/releases) 或 [Docker Hub](https://hub.docker.com/r/usual2970/certimate/tags) 页面查阅。
