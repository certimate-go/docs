# Docker Installation

It is recommended for users that familiar with Docker.

---

## Prerequisites {#prerequisites}

- Docker Engine 1.13.1+
- Docker Compose 1.27.0+

---

## Docker Compose {#docker-compose}

You can copy the following command to the terminal, and run Certimate through Docker Compose：

```bash
mkdir -p ~/.certimate && \
cd ~/.certimate && \
curl -O https://raw.githubusercontent.com/certimate-go/certimate/refs/heads/main/docker/docker-compose.yml && \
docker compose up -d
```

The above command will download `docker-compose.yml` from GitHub, or you can deploy it yourself based on the content of the `docker-compose.yml` file we provide:

```yaml showLineNumbers
version: "3.0"
services:
  certimate:
    image: certimate/certimate:latest
    container_name: certimate
    ports:
      - 8090:8090
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
      - ./data:/app/pb_data
    restart: unless-stopped
```

---

## Docker {#docker}

If you don't want to use Docker Compose, you can also run it through `docker run` command:

```bash
# Pull image
docker pull certimate/certimate:latest
# Start container
docker run -d \
  --name certimate_server \
  --restart unless-stopped \
  -p 8090:8090 \
  -v /etc/localtime:/etc/localtime:ro \
  -v /etc/timezone:/etc/timezone:ro \
  -v $(pwd)/data:/app/pb_data \
  certimate/certimate:latest
```

---

## Run the specified version {#run-the-specified-version}

In the above examples of the `docker-compose. yml` or `docker run` commands, the `lastest` version appears, which represents the current latest stable release version of Certimate.

If you want to run a specified version of Certimate, you can specify when pulling the image:

```bash
# Pull image of v0.3.0
docker pull certimate/certimate:v0.3.0
```

You can view the full version list on [GitHub Releases](https://github.com/certimate-go/certimate/releases) or [Docker Hub](https://hub.docker.com/r/certimate/certimate/tags) pages.
