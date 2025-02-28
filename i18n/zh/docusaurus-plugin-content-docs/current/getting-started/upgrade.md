# 升级

在 [GitHub Releases](https://github.com/usual2970/certimate/releases) 页面，你可以找到每个版本的发布说明。

:::tip

在执行 Certimate 升级之前，建议备份所有数据，以防升级过程中出现问题。

阅读[备份与还原](./backup)指南以了解更多细节。

:::

---

## 升级流程 {#upgrade-process}

### 通过二进制部署的 {#via-binary-installation}

1. 停止旧版本 Certimate 进程。
2. 备份 Certimate 数据。
3. 下载新版本的二进制程序，替换掉安装目录下的同名文件。
4. 重新运行。

### 通过 Docker 部署的 {#via-docker-installation}

1. `docker compose down` 或 `docker stop` 停止旧版本 Certimate 容器运行。
2. 备份 Certimate 数据。
3. `docker pull` 重新拉取新版本镜像。
4. `docker compose up -d` 或 `docker run` 重新启动容器。

---

## 跨版本升级 {#cross-version-upgrades}

在同一大版本号下，你可以跳跃多个小版本号直接升级（如 v0.3.0 → v0.3.5），Certimate 会自动迁移你的应用数据。

在需要进行较大版本跳跃时（如 v0.2.15 → v0.3.0），你还需要遵循迁移指南中需要注意的事项。

阅读[版本发布](../about/releases)和[迁移](../migrations)指南以了解更多细节。

---

## 降级 {#downgrade}

很遗憾，一旦升级完成，Certimate 不再支持回退到之前的版本继续使用，因为数据结构可能已发生根本性的改变。

因此，请不要忘记备份你的旧版本数据！
