# Providers

Provider refers to a third party that provides specific services.

There are two kinds of providers:

- `DNS provider`: The provider that hosts your domain names and manages your DNS records.
- `Host provider`: The provider that hosts your servers or cloud services for deploying certificates.

---

## Supported DNS providers {#supported-dns-providers}

- [Alibaba Cloud](https://www.alibabacloud.com/)
- [Tencent Cloud](https://www.tencentcloud.com/)
- [Baidu AI Cloud](https://intl.cloud.baidu.com/)
- [Huawei Cloud](https://www.huaweicloud.com/)
- [Volcengine](https://www.volcengine.com/)
- [JD Cloud](https://www.jdcloud.com/)
- [AWS Route53](https://aws.amazon.com/route53/)
- [Azure DNS](https://azure.microsoft.com/)
- [CloudFlare](https://www.cloudflare.com/)
- [ClouDNS](https://www.cloudns.net/)
- [DNS.LA](https://www.dns.la/)
- [Gcore](https://gcore.com/)
- [GNAME](https://www.gname.com/)
- [GoDaddy](https://www.godaddy.com/)
- [Name.com](https://www.name.com/)
- [Namecheap](https://www.namecheap.com/)
- [NameSilo](https://www.namesilo.com/)
- [IBM NS1 Connect](https://www.ibm.com/products/ns1-connect/)
- [CMCC Cloud](https://ecloud.10086.cn/)
- [Rain Yun](https://www.rainyun.com/)
- [West.cn](https://www.west.cn/)
- [PowerDNS](https://www.powerdns.com/)
- ACME Proxy HTTP Request: Supports managing DNS by HTTP request

### My domain registrar is not on the list? {#unlisted-domain-registrars}

Since automation of issuance and renewals is really important, it only makes sense to use DNS-01 challenges if your DNS provider has an API you can use to automate updates.

Before we provide a support for this, you can continue to use Certimate in any of the following ways.

1. Set your domain's NS server to the supported provider mentioned above (note that this is only a modification of NS, not a transfer of your domain registrar!);
2. Use [ACME DNS](https://github.com/joohoi/acme-dns).

In future versions, we may add a feature that allows users to manually satisfying DNS-01 challenges.

---

## Supported host providers {#supported-host-providers}

- Local: Supports deployment to local servers.
- SSH: Supports deployment to remote servers (via SSH+SFTP/SCP).
- Webhook: Supports deployment to Webhook.
- [Kubernetes](https://kubernetes.io/): Supports deployment to Kubernetes Secret.
- [Alibaba Cloud](https://www.alibabacloud.com/): Supports deployment to Alibaba Cloud OSS, CDN, DCDN, SLB(CLB/ALB/NLB), WAF, Live, VOD, FC.
- [Tencent Cloud](https://www.tencentcloud.com/): Supports deployment to Tencent Cloud COS, CDN, ECDN, EdgeOne, CLB, WAF, CSS, VOD, SCF.
- [Baidu AI Cloud](https://intl.cloud.baidu.com/): Supports deployment to Baidu AI CLoud CDN.
- [Huawei Cloud](https://www.huaweicloud.com/): Supports deployment to Huawei Cloud CDN, ELB, WAF.
- [Volcengine](https://www.volcengine.com/): Supports deployment to Volcengine TOS, CDN, DCDN, CLB, ImageX, Live.
- [JD Cloud](https://www.jdcloud.com/): Supports deployment to JD Cloud CDN, ALB, Live Video, VOD.
- [Qiniu Cloud](https://www.qiniu.com/): Supports deployment to Qiniu Cloud CDN, Pili.
- [Baishan Cloud](https://intl.baishancloud.com/): Supports deployment to Baishan Cloud CDN.
- [Doge Cloud](https://www.dogecloud.com/): Supports deployment to Doge Cloud CDN.
- [UCloud](https://www.ucloud-global.com/): Supports deployment to UCloud US3, UCDN.
- [SafeLine](https://waf.chaitin.com/): Supports deployment to SafeLine WAF.
- [1Panel](https://1panel.pro/): Supports deployment to 1Panel.
- [aaPanel](https://www.aapanel.com/): Supports deployment to aaPanel (aka BaoTaPanel).
- [AWS](https://aws.amazon.com/): Supports deployment to AWS CloudFront.
- [BytePlus](https://www.byteplus.com/): Supports deployment to BytePlus CDN.
- [CacheFly](https://www.cachefly.com/): Supports deployment to CacheFly CDN.
- [Cdnfly](https://www.cdnfly.cn/): Supports deployment to Cdnfly CDN.
- [Edgio](https://edg.io/): Supports deployment to Edgio Applications.
- [Gcore](https://gcore.com/): Supports deployment to Gcore CDN.

---

## Supported notification channels {#supported-notification-channels}

- Email (SMTP)
- Webhook
- DingTalk
- Lark/Feishu
- WeCom
- Bark
- ServerChan
- Telegram

---

## Supported CAs {#supported-cas}

- [Let's Encrypt](https://letsencrypt.org/): Including production environment and staging environment.
- [ZeroSSL](https://zerossl.com/)
- [Google Trust Services](https://pki.goog/)

---

## More providers {#more-providers}

If the above providers cannot meet your needs, please let us know or contribute code.

:::tip

The list of providers listed in the document may be outdated. Please check the complete list in Certimate repo.

:::
