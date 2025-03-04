# Binary Installation

It is recommended for ordinary users.

---

## Download {#download}

Download the archived package of precompiled binary files directly from [GitHub Releases](https://github.com/usual2970/certimate/releases).

---

## Run {#run}

Once you've extracted the archive, you could start the application by running in the extracted directory:

```bash
./certimate serve
```

:::tip

When using CMD as the terminal on Windows, the suffix `.exe` cannot be omitted.

```bash
./certimate.exe serve
```

:::

:::tip

You may see a prompt saying on macOS: "Cannot open 'certimate' because Apple cannot check it for malicious software."

You can go to "System Preferences" -> "Security & Privacy" -> "General", then click "Allow Anyway", and try run again.

:::

---

## Autorun at startup boot {#autorun-at-startup-boot}

Certimate needs to run in the background in order to automatically renew certificates.

### Linux

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
ExecStart=/usr/sbin/certimate/certimate serve
WorkingDirectory=/usr/sbin/certimate/
Type=forking
Restart=always
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

### Windows

You can add a autorun startup item in the Windows Registry.

Create a new text file with a suffix of `.reg` (e.g., `certimate.reg`), write the following content, save the file, and double-click to run:

```ini showLineNumbers
Windows Registry Editor Version 5.00

; Replace the path with your actual installation path
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run]
"Certimate"="\"C:\\certimate\\certimate.exe\" serve"
```

### macOS

You can use `launchd` to manage service.
