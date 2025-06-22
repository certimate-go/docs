# Binary Installation

It is recommended for ordinary users.

---

## Prerequisites {#prerequisites}

Supported operating systems:

- Linux Kernel 3.2 or higher
- macOS 11 Big Sur or higher
- Windows 10 / Windows Server 2016 or higher

---

## Download {#download}

Download the archived package of precompiled binary files directly from [GitHub Releases](https://github.com/certimate-go/certimate/releases).

---

## Run {#run}

Once you've extracted the archive, you could start the application by running in the extracted directory:

```bash
./certimate serve
```

:::tip

When using CMD as the terminal on Windows, the suffix `.exe` cannot be omitted.

```bash
.\certimate.exe serve
```

:::

:::tip

You may see a prompt saying on macOS: "'certimate' can't be opened because Apple cannot check it for malicious software."

You can go to "System Settings" -> "Privacy & Security" -> "Security", then click "Allow Anywhere", and try run again.

:::

---

## Autorun at startup boot {#autorun-at-startup-boot}

Certimate needs to run in the background in order to automatically renew certificates.

### Linux {#autorun-on-linux}

You can use `systemd` to manage service.

1. Create a service file in the `/etc/systemd/system/` directory:

```bash
sudo vi /etc/systemd/system/certimate.service
```

2. Configure the service:

```ini showLineNumbers
[Unit]
Description=Certimate
After=network.target

[Service]
# Replace the path with your actual installation path
WorkingDirectory=/usr/sbin/certimate/
ExecStart=/usr/sbin/certimate/certimate serve
Restart=on-failure
User=root
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

3. Enable and start the service

```bash
# Enable service
sudo systemctl enable certimate.service

# Start service
sudo systemctl start certimate.service
```

### Windows {#autorun-on-windows}

You can add a autorun startup item in the Windows Registry.

Create a new text file with a suffix of `.reg` (e.g., `certimate.reg`), write the following content, save the file, and double-click to run:

```ini showLineNumbers
Windows Registry Editor Version 5.00

; Replace the path with your actual installation path
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run]
"Certimate"="\"C:\\certimate\\certimate.exe\" serve"
```

### macOS {#autorun-on-macos}

You can use `launchd` to manage service.
