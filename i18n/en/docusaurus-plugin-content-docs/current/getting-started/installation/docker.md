# Docker Installation

It is recommended for users that familiar with Docker.

---

## Docker Compose {#docker-compose}

You can copy the following command to the terminal, and run Certimate through Docker Compose：

```bash
mkdir -p ~/.certimate && \
cd ~/.certimate && \
curl -O https://raw.githubusercontent.com/usual2970/certimate/refs/heads/main/docker/docker-compose.yml && \
docker compose up -d
```

The following is the content of the `docker-compose.yml` file we provide, which you can also modify yourself:

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

If you don't want to use Docker Compose, you can also run it through `docker run` command:

```bash
# Pull image
docker pull usual2970/certimate:latest
# Start container
docker run -d \
  --name certimate_server \
  --restart unless-stopped \
  -p 8090:8090 \
  -v ./data:/app/pb_data \
  usual2970/certimate:latest
```

---

## China mainland mirror {#cn-mirror}

Due to the well-fucking-known reasons, users in China mainland may not be able to access Docker Hub and pull images properly.

We also provide an accelerated image on Alibaba Cloud, which is completely consistent with the version on Docker Hub. You only need to add the registry `registry.cn-shanghai.aliyuncs.com` before the image name:

```bash
# Pull image
docker pull registry.cn-shanghai.aliyuncs.com/usual2970/certimate:latest
# Start container
docker run -d \
  --name certimate_server \
  --restart unless-stopped \
  -p 8090:8090 \
  -v ./data:/app/pb_data \
  registry.cn-shanghai.aliyuncs.com/usual2970/certimate:latest
```

---

## Run the specified version {#run-the-specified-version}

In the above examples of the `docker-compose. yml` or `docker run` commands, the `lastest` version appears, which represents the current latest stable release version of Certimate.

If you want to run a specified version of Certimate, you can specify when pulling the image:

```bash
# Pull image of v0.3.0
docker pull usual2970/certimate:latest:v0.3.0
```

You can view the full version list on [GitHub Releases](https://github.com/usual2970/certimate/releases) or [Docker Hub](https://hub.docker.com/r/usual2970/certimate/tags) pages.
