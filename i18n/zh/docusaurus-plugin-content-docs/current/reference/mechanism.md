# 工作机制

Certimate 实现了 ACME 客户端协议，可以从 Let's Encrypt、ZeroSSL 等证书颁发机构生成免费的证书。

---

## 流程 {#process}

Certimate 的主要工作流程如下：

1. 用户通过 Certimate WebUI 填写申请证书的参数，包括域名、DNS 服务商等信息。
2. Certimate 通过 API 向证书颁发机构的发起申请请求，获取 SSL 证书。
3. Certimate 存储证书信息，并在证书即将过期时自动续期。
4. Certimate 通过 API 向云厂商发起部署请求，将证书部署指定服务上。

通过用户设置的触发间隔，Certimate 会定期重复执行上述流程，以达成续期证书的目的。

在此过程中，Certimate 需要授权凭据信息以控制你的域名 DNS 解析记录，或访问你的云服务资源。

```mermaid
---
title: 申请并部署证书
---
flowchart LR;
   a([开始])
   z([结束])

   a-->b{检查域名配置是否完整}
   b-->|完整|c{检查域名是否已申请证书}
   c-->|未申请|d[申请证书]
   d-->e[部署证书]
   e-->z
   c-->|已申请|f{检查证书是否濒临过期}
   f-->|濒临过期|d
   f-->|未濒临过期|g{检查是否已部署}
   g-->|未部署|e
   g-->|已部署|z


   b-->|不完整|z
```

---

## 名词解释 {#terminology}

### ACME {#acme}

ACME（Automatic Certificate Management Environment，自动证书管理环境）是一种用于自动化管理数字证书的协议，由 Let's Encrypt 组织开发并广泛使用。ACME 的核心目标是简化 HTTPS 证书的申请、续期和撤销过程，使其完全自动化，减少人工干预。

Certimate 实现了 ACME 客户端协议。同时，Certimate 也是 Let's Encrypt 官方文档列出的 [ACME 客户端可选项](https://letsencrypt.org/docs/client-options/)之一。

### Let's Encrypt {#lets-encrypt}

Let's Encrypt 是一个非营利性的证书颁发机构，致力于推动互联网的加密化，通过提供免费、自动化的 SSL 证书，帮助网站轻松启用 HTTPS。Let's Encrypt 由 ISRG（Internet Security Research Group）运营，得到了众多知名企业和组织的支持，包括 Mozilla、Google、AWS、Cisco、EFF 等等。

Certimate 支持 Let's Encrypt 在内的多个证书颁发机构。

### DNS-01 质询 {#dns-01-challenge}

DNS-01 质询是 ACME 协议中用于验证域名所有权的一种方式。通过向域名的 DNS 解析记录中添加一个特定 TXT 记录的方式，ACME 服务器能够查询 DNS 记录来验证用户对域名所有权。如果验证通过，ACME 服务器则签发证书。

Certimate 可通过 API 来控制域名 DNS 解析，以实现自动化完成 DNS-01 质询流程。
