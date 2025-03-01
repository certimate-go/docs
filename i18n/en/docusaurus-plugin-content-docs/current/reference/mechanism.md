# Mechanism

Certimate implements the ACME client protocol, which can obtain free certificates from CA such as Let's Encrypt and ZeroSSL.

---

## Process {#process}

The work process of Certimate is as follows:

1. Users fill in the certificate application information on Certimate WebUI, including domain names, authorizations, and so on.
2. Certimate sends API requests to CA to apply for an SSL certificate.
3. Certimate stores the certificate information, and automatically renews the certificate before it is expired.
4. Certimate sends API requests to the service providers to deploy the certificate.

Certimate will periodically repeat the above process to achieve the purpose of renewing the certificate.

During this process, Certimate requires authorization information to control your domain name DNS resolution records or access your cloud service resources.

```mermaid
---
title: Apply and Deploy Certificates
---
flowchart LR;
   a([Start])
   z([End])

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

Read the _[Terminology](./terminology)_ guide to learn more details.
