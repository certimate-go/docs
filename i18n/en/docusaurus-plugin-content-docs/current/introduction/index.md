# Introduction

:::note
You are reading the documentation for Certimate v0.4! The content may not be applicable to previous versions.
:::

For individuals managing personal projects or those responsible for IT operations in small businesses who need to manage multiple domain names, applying for certificates manually comes with several drawbacks:

- 😱 Troublesome: Applying for and deploying certificates isn’t difficult, but it can be quite a hassle, especially when managing multiple domains.
- 😭 Easily forgotten: The current free certificate has a validity period of only 90 days, requiring regular renewal operations. This increases the workload and makes it easy to forget, which can result in the website becoming inaccessible.

Certimate was created to solve the above-mentioned issues and has the following advantages:

- **Local Deployment**: Simply to install, download the binary and run it directly. Supports Docker deployment and source code deployment for added flexibility.
- **Data Security**​: With private deployment, all data is stored on your own servers, ensuring it never resides on third-party systems and maintaining full control over your data.
- **Easy Operation**: Effortlessly apply and deploy SSL certificates with minimal configuration. The system automatically renews certificates before expiration, providing a fully automated workflow, no manual intervention required.

Certimate aims to provide users with a secure and user-friendly SSL certificate management solution.

---

## 💡 Features {#features}

- Flexible workflow orchestration, fully automation from certificate application to deployment;
- Supports single-domain, multi-domain, wildcard certificates, with options for RSA or ECC.
- Supports DNS-01 challenge and HTTP-01 challenge both.
- Supports various certificate formats such as PEM, PFX, JKS.
- Supports more than 60+ domain registrars (e.g., Alibaba Cloud, Tencent Cloud, Cloudflare, etc.);
- Supports more than 110+ deployment targets (e.g., Kubernetes, CDN, WAF, load balancers, etc.);
- Supports multiple notification channels including email, DingTalk, Feishu, WeCom, Webhook, and more;
- Supports multiple ACME CAs including Let's Encrypt, Actalis, Google Trust Services，SSL.com, ZeroSSL, and more;
- More features waiting to be discovered.

---

## ⏱️ Fast track {#fast-track}

**Deploy Certimate in 1 minute!**

Download the archived package of precompiled binary files directly from [GitHub Releases](https://github.com/certimate-go/certimate/releases), extract and then execute:

```bash
./certimate serve
```

Visit `http://127.0.0.1:8090` in your browser.

Default administrator account:

- Username: `admin@certimate.fun`
- Password: `1234567890`

Work with Certimate right now. Or read other content in the documentation to learn more.

---

## ⭐ Screenshot {#screenshot}

![Screenshot](https://i.imgur.com/4DAUKEE.gif)

---

## 😖 Something missing? {#somthing-missing}

This website provides the full user manual for the project, and can be used as a reference. If you feel that there's anything missing, please let us know or [raise a Pull Request](https://github.com/certimate-go/docs/pulls) to add it.
