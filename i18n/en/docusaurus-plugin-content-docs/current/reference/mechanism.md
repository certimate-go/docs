# Mechanism

Certimate implements the ACME client protocol, which can obtain free certificates from CA such as Let's Encrypt and ZeroSSL.

---

## Process {#process}

The work process of Certimate is as follows:

1. Users fill in the certificate application information on Certimate WebUI, including domain names, credentials, and so on.
2. Certimate sends API requests to CA to apply for an SSL certificate.
3. Certimate stores the certificate information, and automatically renews the certificate before it is expired.
4. Certimate sends API requests to the service providers to deploy the certificate.

Certimate will periodically repeat the above process to achieve the purpose of renewing the certificate.

During this process, Certimate requires credentials information to control your domain name DNS resolution records or access your cloud service resources.

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

---

## Terminology {#terminology}

### ACME {#acme}

ACME (Automatic Certificate Management Environment) is a protocol used for automated management of digital certificates, developed and widely used by Let's Encrypt organization. The core goal of ACME is to simplify the application, renewal, and revocation process of HTTPS certificates, making it fully automated and reducing manual intervention.

Certimate implements the ACME client protocol.

### Let's Encrypt {#lets-encrypt}

Let's Encrypt is a non-profit certificate authority dedicated to promoting the encryption of the Internet. It helps websites easily enable HTTPS by providing free and automated SSL certificates. Let's Encrypt is operated by ISRG (Internet Security Research Group) and has received support from numerous well-known enterprises and organizations, including Mozilla, Google, AWS, Cisco, EFF, and more.

Certimate supports multiple CAs, including Let's Encrypt.

### DNS-01 challenge {#dns-01-challenge}

DNS-01 challenge is a method used in the ACME protocol to verify domain ownership. By adding a specific TXT record to the DNS resolution record of a domain name, the ACME server can query the DNS record to verify user ownership of the domain name. If the verification is successful, the ACME server issues a certificate.

Certimate can control domain DNS resolution through APIs to automate the DNS-01 challenge process.
