# Introduction

:::note
You are reading the documentation for Certimate v0.4! The content may not be applicable to previous versions.
:::

An open-source and free self-hosted SSL certificates ACME tool, automates the full-cycle of issuance, deployment, and renewal visually.

- **Self-Hosted**: Private deployment. All data is stored locally, giving you full control to ensure data privacy and security.
- **Zero Dependencies**: No need to install databases, runtimes, or any complex frameworks. Truly ready to use out of the box with a single click.
- **Low Resource Usage**: Extremely lightweight, requiring only ~16 MB of memory. It's so efficient that it can even run on devices like home routers.
- **Easy to Use**: The user-friendly GUI lets you automate certificate management for multiple platforms with a visual workflow — all with just a few simple configurations.

---

## 💡 Features {#features}

- Flexible workflow orchestration, fully automation from certificate application to deployment.
- Supports requesting single/multiple/wildcard domain certificates, IP address certificates, with options for RSA or ECC key.
- Supports DNS-01 challenge and HTTP-01 challenge both.
- Supports various certificate formats such as PEM, PFX, JKS.
- Supports more than 60+ domain registrars (e.g., AWS, Cloudflare, GoDaddy, Alibaba Cloud, Tencent Cloud, etc. [Check out full providers](https://docs.certimate.me/en-US/docs/reference/providers#supported-dns-providers)).
- Supports more than 110+ deployment targets (e.g., Kubernetes, CDN, WAF, load balancers, etc. [Check out full providers](https://docs.certimate.me/en-US/docs/reference/providers#supported-hosting-providers)).
- Supports multiple notification channels including email, Discord, Slack, Telegram, DingTalk, Feishu, WeCom, and more.
- Supports multiple ACME CAs including Let's Encrypt, Actalis, Google Trust Services，SSL.com, ZeroSSL, and more.
- More features waiting to be discovered.

---

## 🚀 Quick Start {#quick-start}

**Run Certimate in 1 minute!**

Download the archived package of precompiled executable files directly from [GitHub Releases](https://github.com/certimate-go/certimate/releases), extract and then execute:

```bash
./certimate serve
```

Visit `http://127.0.0.1:8090` in your browser.

Default administrator account:

- Username: `admin@certimate.fun`
- Password: `1234567890`

Work with Certimate right now. Or read other content in the documentation to learn more.

---

## 🖥️ Screenshot {#screenshot}

![Screenshot](https://i.imgur.com/4DAUKEE.gif)

---

## 😖 Something missing? {#somthing-missing}

This website provides the full user manual for the project, and can be used as a reference. If you feel that there's anything missing, please let us know or [raise a Pull Request](https://github.com/certimate-go/docs/pulls) to add it.
