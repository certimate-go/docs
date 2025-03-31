# Deploy on 1Panel

Certimate can be deployed on 1Panel.

---

## Deployment

### Deploy via App Store

Search for `Certimate` in the 1Panel app store, then click the `Install` button.

![Screenshot](https://github.com/certimate-go/docs/blob/main/assets/gh/store.installation_1panel.en.png?raw=true)

:::tip

When installing the Certimate application in 1Panel, you can directly configure global proxy settings. Please set the `HTTP_PROXY` and `HTTPS_PROXY` environment variables to your global proxy address, and set the `NO_PROXY` environment variable to domains that don't require proxying.

:::

### Deploy via Docker Compose

1Panel supports managing Docker services through it's WebUI. For more details, please refer to the [official user manual](https://docs.1panel.pro/user_manual/containers/introduction/).

Go to 1Panel, select "Containers" -> "Composes" -> "Create", then input content of `docker-compose.yml`, and click the "Confirm" button.

![Screenshot](https://github.com/certimate-go/docs/blob/main/assets/gh/installation_1panel.en.png?raw=true)

:::tip

Please read the _[Docker Installation](/docs/getting-started/installation/docker)_ guide for the content of `docker-compose.yml`.

Remember to modify the host path of binding mounts to an absolute path.

:::