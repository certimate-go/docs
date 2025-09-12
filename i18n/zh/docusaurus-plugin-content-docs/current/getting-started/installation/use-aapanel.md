# 部署到宝塔面板

可将 Certimate 部署到已有的宝塔面板服务中。

---

## 部署 {#deployment}

宝塔面板支持通过它的 Web 界面来管理 Docker 服务，更多细节请参考宝塔面板[官方用户手册](https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=95674)。

登录宝塔面板，选择左侧菜单「Docker」->「容器编排」>「添加容器编排」，输入 `docker-compose.yml` 内容，点击“确定”按钮即可。

![屏幕截图](https://github.com/certimate-go/docs/blob/main/static/gh/installation_aapanel.zh.png?raw=true)

:::tip
`docker-compose.yml` 内容和其他部署细节请阅读 [Docker 安装](/docs/getting-started/installation/docker)指南。

建议将其中的宿主机挂载路径修改为绝对路径，以免给备份造成困难。
:::
