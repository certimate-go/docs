# Deploy on XP-Panel

Certimate can be deployed on XP-Panel.

---

## Deployment {#deployment}

### Deploy via Docker Soft Center {#deploy-via-docker-soft-center}

Log in XP-Panel, search for `Certimate` in the Docker Soft Center, then click the "Install" button.

:::caution

The version updates of Certimate in the XP-Panel Docker Soft Center are maintained by the XP-Panel team, and may experience delays.

:::

### Deploy via Docker Compose {#deploy-via-docker-compose}

XP-Panel supports managing Docker services through it's WebUI. For more details, please refer to the [official user manual](https://doc.xp.cn/linux).

Login into XP-Panel, click left menu "Docker" -> "Compose" -> "Add Compose", then input content of `docker-compose.yml`, and click the "Confirm" button.

:::tip

Please read the _[Docker Installation](/docs/getting-started/installation/docker)_ guide for the content of `docker-compose.yml`.

Remember to modify the host path of binding mounts to an absolute path.

:::
