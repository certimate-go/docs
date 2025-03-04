# Deploy on 1Panel

Certimate can be deployed on 1Panel.

---

## Deployment

1Panel supports managing Docker services through it's WebUI. For more details, please refer to the [official user manual](https://docs.1panel.pro/user_manual/containers/introduction/).

Go to 1Panel, select "Containers" -> "Composes" -> "Create", then input content of `docker-compose.yml`, and click the "Confirm" button.

![Screenshot](https://github.com/certimate-go/docs/blob/main/assets/gh/installation_1panel.en.png?raw=true)

:::tip

Please read the _[Docker Installation](./docker)_ guide for the content of `docker-compose.yml`.

Remember to modify the host path of binding mounts to an absolute path.

:::
