# Providers

Provider refers to a third party that provides specific services.

There are two kinds of providers:

- `DNS provider`: The provider that hosts your domain names and manages your DNS records.
- `Host provider`: The provider that hosts your servers or cloud services for deploying certificates.

---

## Supported DNS providers {#supported-dns-providers}

- [Alibaba Cloud](https://www.alibabacloud.com/)
- [Tencent Cloud](https://www.tencentcloud.com/)
- [Tencent Cloud EdgeOne NS mode](https://www.tencentcloud.com/document/product/1145/66364/)
- [Baidu AI Cloud](https://intl.cloud.baidu.com/)
- [Huawei Cloud](https://www.huaweicloud.com/)
- [Volcengine](https://www.volcengine.com/)
- [JD Cloud](https://www.jdcloud.com/)
- [AWS Route53](https://aws.amazon.com/route53/)
- [Azure DNS](https://azure.microsoft.com/)
- [Bunny](https://www.bunny.net/)
- [CloudFlare](https://www.cloudflare.com/)
- [ClouDNS](https://www.cloudns.net/)
- [deSEC](https://desec.io/)
- [DNS.LA](https://www.dns.la/)
- [dynv6](https://dynv6.com/)
- [Gcore](https://gcore.com/)
- [GNAME](https://www.gname.com/)
- [GoDaddy](https://www.godaddy.com/)
- [Name.com](https://www.name.com/)
- [Namecheap](https://www.namecheap.com/)
- [NameSilo](https://www.namesilo.com/)
- [IBM NS1 Connect](https://www.ibm.com/products/ns1-connect/)
- [Porkbun](https://porkbun.com/)
- [Vercel](https://vercel.com/)
- [CMCC Cloud](https://ecloud.10086.cn/)
- [Rain Yun](https://www.rainyun.com/)
- [West.cn](https://www.west.cn/)
- [PowerDNS](https://www.powerdns.com/)
- ACME Proxy HTTP Request: Supports managing DNS by HTTP request

### My domain registrar is not on the list? {#unlisted-domain-registrars}

Since automation of issuance and renewals is really important, it only makes sense to use DNS-01 challenges if your DNS provider has an API you can use to automate updates.

Before we provide a support for this, you can continue to use Certimate in any of the following ways.

1. Set your domain's NS server to the supported providers mentioned above (note that this is only a modification of NS, not a transfer of your domain registrar!);
2. Using CNAME records to the supported providers mentioned above;
3. Use [ACME DNS](https://github.com/joohoi/acme-dns).

In future versions, we may add a feature that allows users to manually satisfying DNS-01 challenges.

---

## Supported host providers {#supported-host-providers}

- Local: Supports deployment to local servers.
- SSH: Supports deployment to remote servers (via SSH+SFTP/SCP).
- Webhook: Supports deployment to Webhook.
- [Kubernetes](https://kubernetes.io/): Supports deployment to Kubernetes Secret.
- [Alibaba Cloud](https://www.alibabacloud.com/): Supports deployment to Alibaba Cloud OSS, CDN, DCDN, SLB(CLB/ALB/NLB), WAF, Live, VOD, FC, APIG, CAS.
- [Tencent Cloud](https://www.tencentcloud.com/): Supports deployment to Tencent Cloud COS, CDN, ECDN, EdgeOne, CLB, WAF, CSS, VOD, SCF, SSL.
- [Baidu AI Cloud](https://intl.cloud.baidu.com/): Supports deployment to Baidu AI CLoud BLB, CDN, CAS.
- [Huawei Cloud](https://www.huaweicloud.com/): Supports deployment to Huawei Cloud CDN, ELB, WAF, SCM.
- [Volcengine](https://www.volcengine.com/): Supports deployment to Volcengine TOS, CDN, DCDN, CLB, ALB, ImageX, Live, Certificate Center.
- [JD Cloud](https://www.jdcloud.com/): Supports deployment to JD Cloud CDN, ALB, Live Video, VOD.
- [Qiniu Cloud](https://www.qiniu.com/): Supports deployment to Qiniu Cloud Kodo, CDN, Pili.
- [UPYUN Cloud](https://www.upyun.com/): Supports deployment to UPYUN Cloud File, CDN.
- [Wangsu Cloud](https://en.wangsu.com/)：Supports deployment to Wangsu Cloud CDN Pro。
- [Baishan Cloud](https://intl.baishancloud.com/): Supports deployment to Baishan Cloud CDN.
- [Doge Cloud](https://www.dogecloud.com/): Supports deployment to Doge Cloud CDN.
- [UCloud](https://www.ucloud-global.com/): Supports deployment to UCloud US3, UCDN.
- [Rain Yun](https://www.rainyun.com/): Supports deployment to Rain Yun RCDN.
- [SafeLine](https://waf.chaitin.com/): Supports deployment to SafeLine WAF.
- [1Panel](https://1panel.pro/): Supports deployment to 1Panel.
- [aaPanel](https://www.aapanel.com/): Supports deployment to aaPanel (aka BaoTaPanel).
- [AWS](https://aws.amazon.com/): Supports deployment to AWS ACM, CloudFront.
- [Azure](https://azure.microsoft.com/)：Supports deployment to Azure KeyVault.
- [Bunny](https://www.bunny.net/)：Supports deployment to Bunny CDN。
- [BytePlus](https://www.byteplus.com/): Supports deployment to BytePlus CDN.
- [CacheFly](https://www.cachefly.com/): Supports deployment to CacheFly CDN.
- [Cdnfly](https://www.cdnfly.cn/): Supports deployment to Cdnfly CDN.
- [Edgio](https://edg.io/): Supports deployment to Edgio Applications.
- [Gcore](https://gcore.com/): Supports deployment to Gcore CDN.

---

## Supported notification channels {#supported-notification-channels}

- Email (SMTP)
- Webhook
- DingTalk Robot
- Lark/Feishu Robot
- WeCom Robot
- Bark
- Gotify
- PushPlus
- ServerChan
- Telegram

---

## Supported certificate authorities {#supported-certificate-authorities}

- [Let's Encrypt](https://letsencrypt.org/): Including production environment and staging environment.
- [Buypass](https://www.buypass.com/)
- [Google Trust Services](https://pki.goog/)
- [SSL.com](https://www.ssl.com/)
- [ZeroSSL](https://zerossl.com/)

---

## More providers {#more-providers}

If the above providers cannot meet your needs, please let us know or contribute code.

:::tip

The list of providers listed in the document may be outdated.

:::
