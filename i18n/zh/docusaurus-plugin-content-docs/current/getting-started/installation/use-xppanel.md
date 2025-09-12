# 部署到小皮面板

可将 Certimate 部署到已有的小皮面板服务中。

---

## 部署 {#deployment}

### 通过 Docker 应用商店一键部署 {#deploy-via-docker-soft-center}

登录小皮面板，在 Docker 应用商店中搜索 `Certimate`，然后点击“立即安装”按钮。

![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_xppanel-1.zh.png?raw=true)
![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_xppanel-2.zh.png?raw=true)
![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_xppanel-3.zh.png?raw=true)

:::caution
小皮面板 Docker 应用商店中的 Certimate 版本更新由小皮面板官方团队负责维护，可能存在滞后。
:::

### 通过容器编排部署 {#deploy-via-docker-compose}

小皮面板支持通过它的 Web 界面来管理 Docker 服务，更多细节请参考小皮面板[官方用户手册](https://doc.xp.cn/linux)。

登录小皮面板，选择左侧「Docker」->「Compose」->「添加 Compose」，输入 `docker-compose.yml` 内容，点击“确认”按钮即可。

![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_xppanel-4.zh.png?raw=true)

:::tip
`docker-compose.yml` 内容和其他部署细节请阅读 [Docker 安装](/docs/getting-started/installation/docker)指南。

建议将其中的宿主机挂载路径修改为绝对路径，以免给备份造成困难。
:::
