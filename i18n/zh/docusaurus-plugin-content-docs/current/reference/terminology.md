# 名词解释

---

## ACME {#acme}

ACME（Automatic Certificate Management Environment，自动证书管理环境）是一种用于自动化管理数字证书的协议，由 Let's Encrypt 组织开发并广泛使用。ACME 的核心目标是简化 HTTPS 证书的申请、续期和撤销过程，使其完全自动化，减少人工干预。

Certimate 实现了 ACME 客户端协议。

---

## Let's Encrypt {#lets-encrypt}

Let's Encrypt 是一个非营利性的证书颁发机构，致力于推动互联网的加密化，通过提供免费、自动化的 SSL 证书，帮助网站轻松启用 HTTPS。Let's Encrypt 由 ISRG（Internet Security Research Group）运营，得到了众多知名企业和组织的支持，包括 Mozilla、Google、AWS、Cisco、EFF 等等。

Certimate 支持 Let's Encrypt 在内的多个证书颁发机构。

---

## DNS-01 质询 {#dns-01-challenge}

DNS-01 质询是 ACME 协议中用于验证域名所有权的一种方式。通过向域名的 DNS 解析记录中添加一个特定 TXT 记录的方式，ACME 服务器能够查询 DNS 记录来验证用户对域名所有权。如果验证通过，ACME 服务器则签发证书。

Certimate 可通过 API 来控制域名 DNS 解析，以实现自动化完成 DNS-01 质询流程。
