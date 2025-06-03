# 部署到小皮面板

可以在小皮面板的 Docker 应用商店中一键安装 Certimate。

---

## 部署 {#deployment}

### 通过 Docker 应用商店一键部署 {#deploy-via-app-store}

登录小皮面板，点击左侧 Docker > 应用商店 > Certimate > 安装

![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_xp-panel-1-zh.png?raw=true)
![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_xp-panel-2-zh.png?raw=true)
![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_xp-panel-3-zh.png?raw=true)

### 通过容器编排部署 {#deploy-via-docker-compose}

小皮面板 支持通过它的 Web 界面来管理 Docker 服务，更多细节请参考 小皮面板 [官方用户手册](https://小皮面板.dev/docs/user_manual/containers/compose.html)。

登录小皮面板，选择左侧 Docker > Compose > 添加 Compose，输入 `docker-compose.yml` 内容，点击“确认”按钮即可。

![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_xp-panel-4-zh.png?raw=true)

:::tip

`docker-compose.yml` 内容和其他部署细节请阅读 [Docker 安装](/docs/getting-started/installation/docker)指南。

注意请将其中的宿主机挂载路径修改为绝对路径。

:::

