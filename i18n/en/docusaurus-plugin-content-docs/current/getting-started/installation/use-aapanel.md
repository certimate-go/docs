# Deploy with aaPanel

Certimate can be deployed to aaPanel service.

---

## Deployment

aaPanel supports managing Docker services through it's WebUI. For more details, please refer to the [official user manual](https://www.aapanel.com/docs/Function/Docker.html).

Go to aaPanel, select "Docker" -> "Compose" -> "Add Compose", then input content of `docker-compose.yml`, and click the "Confirm" button.

:::tip

Please refer to the _[Docker Installation](./docker)_ guide for the content of `docker-compose.yml`.

Remember to modify the host path of binding mounts to an absolute path.

:::
