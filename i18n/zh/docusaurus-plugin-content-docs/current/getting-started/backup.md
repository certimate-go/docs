# 备份与还原

如果需要升级 Certimate 或将安装转移到新服务，可以备份所有数据，以便稍后重新安装。

---

## 备份数据 {#backup}

Certimate 使用 SQLite 来存储全部数据，它位于你的安装路径的 `pb_data` 目录下。你可以将该目录下的全部文件复制到其他路径。

一个典型的 `pb_data` 目录结构如下：

```
.
├─ backups/
├─ storage/
├─ auxiliary.db
└─ data.db       # VERY IMPORTANT!
```

:::caution

如果你正在使用 Docker 部署，请确保容器内的 `/app/pb_data` 目录已经挂载到宿主机上，否则你将无法在宿主机上备份这些文件。

当然，你还可以选择使用 `docker cp` 命令来备份容器内的文件。

:::

---

## 还原数据 {#restore}

先停止 Certimate 服务运行，然后将备份过的全部文件复制回 `pb_data` 目录下并替换同名文件，重启 Certimate 即可。

:::caution

对于跨版本升级，请勿直接将低版本的数据还原到高版本的程序中，否则可能产生数据错乱、丢失、损坏等问题。

阅读[迁移](../migrations/)指南以了解更多细节。

:::
