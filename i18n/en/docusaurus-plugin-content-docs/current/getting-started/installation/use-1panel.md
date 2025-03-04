# Deploy on 1Panel

Certimate can be deployed on 1Panel.

---

## Deployment

1Panel supports managing Docker services through it's WebUI. For more details, please refer to the [official user manual](https://docs.1panel.pro/user_manual/containers/introduction/).

Go to 1Panel, select "Containers" -> "Compose" -> "Create Compose", then input content of `docker-compose.yml`, and click the "Confirm" button.

:::tip

Please read the _[Docker Installation](./docker)_ guide for the content of `docker-compose.yml`.

Remember to modify the host path of binding mounts to an absolute path.

:::
