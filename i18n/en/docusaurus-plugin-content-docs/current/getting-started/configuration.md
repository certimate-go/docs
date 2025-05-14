# Configuration

You can configure most of the parameters of Certimate through WebUI, except for the following points.

---

## Set the listening URL {#set-listening-url}

### Via binary installation {#via-binary-installation}

For security reasons, Certimate defaults to listening on `127.0.0.1:8090`, which means you can only access Certimate through the local address.

You can configure this at startup:

```bash
./certimate serve --http 0.0.0.0:9999
```

### Via Docker installation {#via-docker-installation}

The Docker image we provided is already listening to `0.0.0.0:8090` by default within the container. Therefore, you only need to modify its port mapping to access Certimate through other addresses on the host.

```bash
docker run -d \
  --name certimate_server \
  --restart unless-stopped \
  -p 9999:8090 \
  -v /etc/localtime:/etc/localtime:ro \
  -v /etc/timezone:/etc/timezone:ro \
  -v $(pwd)/data:/app/pb_data \
  usual2970/certimate:latest
```

:::caution

Due to the need to transmit sensitive data such as authorization and certificates, please try to avoid accessing Certimate via HTTP under non-trusted networks.

:::

---

## Set HTTPS for Certimate {#set-https-for-certimate}

You can execute the following command in the terminal to issue a SSL certificate from Let's Encrypt for Certimate itself and enable HTTPS listening.

```bash
./certimate serve ${your-domain.com}
```

:::tip

HTTP-01 challenge will be used. Please add domain name resolution record in advance.

:::

---

## Reset password {#reset-password}

If you have forgotten the login password for Certimate, you can execute the following command in the terminal to reset it:

```bash
./certimate superuser update ${your-account} ${your-new-password}
```

If you deploy through Docker, you can use `docker exec` command to enter the container and execute the above command.

---

## HTTP proxy {#http-proxy}

You can set it through environment variables:

```bash
export HTTP_PROXY="http://proxy.example.com"
export HTTPS_PROXY="http://proxy.example.com"
```

## Experimental features {#experimental-features}

Certimate provides some experimental features that are still unstable.

### Initialize administrator {#initialize-administrator}

By default, the administrator account and password are `admin@certimate.fun` and `1234567890`. You can reset them through the WebUI after starting Certimate.

If you want to use a specified account and password on the first startup, you can set them through environment variables:

```bash
export CERTIMATE_ADMIN_USERNAME=admin@certimate.fun
export CERTIMATE_ADMIN_PASSWORD=1234567890
```

Please note that you must complete the setup before the first startup. Once Certimate is run, the initial administrator account and password have already been generated, and you can only reset them through the WebUI.

Please note that the account and password set through environment variables must also comply with specific rules, otherwise login may fail due to inability to pass the front-end form validations.

### Control the concurrency of workflow {#control-the-concurrency-of-workflows}

You can set it through environment variables:

```bash
export CERTIMATE_WORKFLOW_MAX_WORKERS=16
```
