# 部署到 1Panel

可将 Certimate 部署到已有的 1Panel 服务中。

---

## 部署

### 通过应用商店部署

在 1Panel 应用商店中搜索 `Certimate`，然后点击 `安装` 按钮。

![屏幕截图](https://github.com/certimate-go/docs/blob/main/assets/gh/store.installation_1panel.zh.png?raw=true)

:::tip

1Panel 中安装 Certimate 应用可以直接配置全局代理，请将 `HTTP_PROXY` 和 `HTTPS_PROXY` 环境变量设置为全局代理地址，`NO_PROXY` 环境变量设置为不需要代理的域名。

:::

### 通过容器编排部署

1Panel 支持通过它的 Web 界面来管理 Docker 服务，更多细节请参考 1Panel [官方用户手册](https://1panel.dev/docs/user_manual/containers/compose.html)。

登录 1Panel，选择左侧菜单「容器」->「编排」>「创建编排」，输入 `docker-compose.yml`，点击“确认”按钮即可。

![屏幕截图](https://github.com/certimate-go/docs/blob/main/assets/gh/installation_1panel.zh.png?raw=true)

:::tip

`docker-compose.yml` 内容和其他部署细节请阅读 [Docker 安装](/docs/getting-started/installation/docker)指南。

注意请将其中的宿主机挂载路径修改为绝对路径。

:::