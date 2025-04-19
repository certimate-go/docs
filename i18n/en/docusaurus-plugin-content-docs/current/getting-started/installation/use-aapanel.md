# Deploy on aaPanel

Certimate can be deployed on aaPanel.

---

## Deployment {#deployment}

aaPanel supports managing Docker services through it's WebUI. For more details, please refer to the [official user manual](https://www.aapanel.com/docs/Function/Docker.html).

Go to aaPanel, select "Docker" -> "Compose" -> "Add Compose", then input content of `docker-compose.yml`, and click the "Confirm" button.

![Screenshot](https://github.com/certimate-go/docs/blob/main/static/gh/installation_aapanel.en.png?raw=true)

:::tip

Please read the _[Docker Installation](/docs/getting-started/installation/docker)_ guide for the content of `docker-compose.yml`.

Remember to modify the host path of binding mounts to an absolute path.

:::
