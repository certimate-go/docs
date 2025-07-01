# Deploy on XP-Panel

Certimate can be deployed on XP-Panel.

---

## Deployment {#deployment}

### Deploy via Docker Soft Center {#deploy-via-app-store}

XP-Panel based on WebUI. For more details, please refer to the [docs](https://doc.xp.cn/linux).

Login into XP-Panel, click left menu "Docker" > "Soft Center" > "Certimate" > "Install"

### Deploy via Docker Compose {#deploy-via-docker-compose}

Login into XP-Panel, click left menu "Docker" > "Compose" > "Add Compose", then input content of `docker-compose.yml`, and click the "Confirm" button.

:::tip

Please read the _[Docker Installation](/docs/getting-started/installation/docker)_ guide for the content of `docker-compose.yml`.

Remember to modify the host path of binding mounts to an absolute path.

:::

