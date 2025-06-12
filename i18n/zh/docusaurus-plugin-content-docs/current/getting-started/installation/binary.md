# 二进制安装

推荐普通用户采用这种方式安装 Certimate。

---

## 要求 {#prerequisites}

操作系统版本要求：

- Linux 内核 3.2 或更高版本
- macOS 11 Big Sur 或更高版本
- Windows 10 / Windows Server 2016 或更高版本

---

## 下载 {#download}

请前往 [GitHub Releases](https://github.com/usual2970/certimate/releases) 页面下载预先编译好的二进制可执行文件压缩包。

压缩包文件名后缀包含系统架构信息，请结合你的设备需要自行选择相应的压缩包，下载并解压缩全部文件。

---

## 运行 {#run}

进入解压后的目录，并在终端中执行：

```bash
./certimate serve
```

:::tip

Windows 使用 CMD 作为终端时，`.exe` 后缀名不可省略。

```bash
.\certimate.exe serve
```

:::

:::tip

macOS 在运行时可能会提示：「无法打开“Certimate”，因为 Apple 无法检查其是否包含恶意软件。」

可在「系统设置」->「隐私与安全性」->「安全性」中点击「仍然允许」，然后再次尝试运行。

:::

---

## 开机自启动 {#autorun-at-startup-boot}

Certimate 需要在后台运行，才能周期性地执行工作流程以自动续期证书。

### Linux {#autorun-on-linux}

你可以利用 `systemd` 来管理开机自启动项。

1. 在 `/etc/systemd/system/` 目录下创建服务文件：

```bash
sudo vi /etc/systemd/system/certimate.service
```

2. 编写服务配置:

```ini showLineNumbers
[Unit]
Description=Certimate
After=network.target

[Service]
# 请将以下路径替换为你的实际安装路径
WorkingDirectory=/usr/sbin/certimate/
ExecStart=/usr/sbin/certimate/certimate serve
Restart=on-failure
User=root
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

3. 启用并启动服务

```bash
# 启用服务
sudo systemctl enable certimate.service

# 启动服务
sudo systemctl start certimate.service
```

### Windows {#autorun-on-windows}

你可以通过注册表来添加开机自启动项。

创建一个新的文本文件，将后缀名改为 `.reg`（如 `certimate.reg`），写入以下内容，保存文件并双击运行：

```ini showLineNumbers
Windows Registry Editor Version 5.00

; 请将以下路径替换为你的实际安装路径，注意特殊字符需转义
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run]
"Certimate"="\"D:\\certimate\\certimate.exe\" serve"
```

### macOS {#autorun-on-macos}

你可以利用 `launchd` 来管理开机自启动项。
