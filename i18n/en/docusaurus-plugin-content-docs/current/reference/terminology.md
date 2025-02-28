# Terminology

---

## ACME {#acme}

ACME (Automatic Certificate Management Environment) is a protocol used for automated management of digital certificates, developed and widely used by Let's Encrypt organization. The core goal of ACME is to simplify the application, renewal, and revocation process of HTTPS certificates, making it fully automated and reducing manual intervention.

Certimate implements the ACME client protocol.

---

## Let's Encrypt {#lets-encrypt}

Let's Encrypt is a non-profit certificate authority dedicated to promoting the encryption of the Internet. It helps websites easily enable HTTPS by providing free and automated SSL certificates. Let's Encrypt is operated by ISRG (Internet Security Research Group) and has received support from numerous well-known enterprises and organizations, including Mozilla, Google, AWS, Cisco, EFF, and more.

Certimate supports multiple CAs, including Let's Encrypt.

---

## DNS-01 challenge {#dns-01-challenge}

DNS-01 challenge is a method used in the ACME protocol to verify domain ownership. By adding a specific TXT record to the DNS resolution record of a domain name, the ACME server can query the DNS record to verify user ownership of the domain name. If the verification is successful, the ACME server issues a certificate.

Certimate can control domain DNS resolution through APIs to automate the DNS-01 challenge process.
