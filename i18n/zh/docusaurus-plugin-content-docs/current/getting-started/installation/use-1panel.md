# 部署到 1Panel

可将 Certimate 部署到已有的 1Panel 服务中。

---

## 部署 {#deployment}

### 通过应用商店部署 {#deploy-via-app-store}

登录 1Panel，在应用商店中搜索 `Certimate`，然后点击“安装”按钮。

![屏幕截图](https://i.imgur.com/qV25Zcm.png)

:::caution
1Panel 应用商店中的 Certimate 版本更新由 1Panel 官方团队负责维护，可能存在滞后。
:::

### 通过容器编排部署 {#deploy-via-docker-compose}

1Panel 支持通过它的 Web 界面来管理 Docker 服务，更多细节请参考 1Panel [官方用户手册](https://1panel.dev/docs/user_manual/containers/compose.html)。

登录 1Panel，选择左侧菜单「容器」->「编排」>「创建编排」，输入 `docker-compose.yml` 内容，点击“确认”按钮即可。

![屏幕截图](https://i.imgur.com/O7gOUW2.png)

:::tip
`docker-compose.yml` 内容和其他部署细节请阅读 [Docker 安装](/docs/getting-started/installation/docker)指南。

建议将其中的宿主机挂载路径修改为绝对路径，以免给备份造成困难。
:::
