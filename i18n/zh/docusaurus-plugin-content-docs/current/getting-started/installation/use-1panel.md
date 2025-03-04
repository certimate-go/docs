# 部署到 1Panel

可将 Certimate 部署到已有的 1Panel 服务中。

---

## 部署

1Panel 支持通过它的 Web 界面来管理 Docker 服务，更多细节请参考[官方使用手册](https://1panel.dev/docs/user_manual/containers/compose.html)。

登录 1Panel，选择左侧菜单「容器」->「编排」>「创建编排」，输入 `docker-compose.yml`，点击“确认”按钮即可。

![屏幕截图](https://github.com/certimate-go/docs/blob/main/assets/gh/installation_1panel.zh.png?raw=true)

:::tip

`docker-compose.yml` 内容和其他部署细节请阅读 [Docker 安装](./docker)指南。

注意请将其中的宿主机挂载路径修改为绝对路径。

:::
