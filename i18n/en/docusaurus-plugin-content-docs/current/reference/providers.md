# Providers

Provider refers to a third party that provides specific services.

There are several kinds of providers:

- `DNS provider`: The provider that hosts your domain names and manages your DNS records.
- `Hosting provider`: The provider that hosts your servers or cloud services for deploying certificates.
- `CA provider`: The provider which is certificate authority. Only CAs that use the ACME protocol are supported currently.
- `Notification provider`: The provider used for pushing notifications.

---

## Supported DNS providers {#supported-dns-providers}

- [Alibaba Cloud](https://www.alibabacloud.com/)
- [Alibaba Cloud ESA NS mode](https://www.alibabacloud.com/help/en/edge-security-acceleration/esa/user-guide/dns-overview/)
- [Tencent Cloud](https://www.tencentcloud.com/)
- [Tencent Cloud EdgeOne NS mode](https://www.tencentcloud.com/document/product/1145/66364/)
- [Baidu AI Cloud](https://intl.cloud.baidu.com/)
- [Huawei Cloud](https://www.huaweicloud.com/)
- [Volcengine](https://www.volcengine.com/)
- [JD Cloud](https://www.jdcloud.com/)
- [AWS Route53](https://aws.amazon.com/route53/)
- [Azure DNS](https://azure.microsoft.com/)
- [Akamai EdgeDNS](https://www.akamai.com/)
- [ArvanCloud](https://arvancloud.ir/)
- [BookMyName](https://www.bookmyname.com/)
- [Bunny](https://www.bunny.net/)
- [CloudFlare](https://www.cloudflare.com/)
- [ClouDNS](https://www.cloudns.net/)
- [Constellix](https://www.constellix.com/)
- [deSEC](https://desec.io/)
- [DigitalOcean](https://www.digitalocean.com/)
- [DNS.LA](https://www.dns.la/)
- [DNS Made Easy](https://dnsmadeeasy.com/)
- [Duck DNS](https://www.duckdns.org/)
- [Dynu](https://www.dynu.com/)
- [dynv6](https://dynv6.com/)
- [Gandi.net](https://gandi.net/)
- [G-Core](https://gcore.com/)
- [GNAME](https://www.gname.com/)
- [GoDaddy](https://www.godaddy.com/)
- [Hetzner](https://www.hetzner.com/)
- [hosting.de](https://www.hosting.de/)
- [Hostinger](https://www.hostinger.com/)
- [Infomaniak](https://www.infomaniak.com/)
- [IONOS](https://www.ionos.com/)
- [Linode](https://www.linode.com/)
- [Name.com](https://www.name.com/)
- [Namecheap](https://www.namecheap.com/)
- [NameSilo](https://www.namesilo.com/)
- [netcup](https://www.netcup.com/)
- [Netlify](https://www.netlify.com/)
- [NS1 Connect](https://www.ibm.com/products/ns1-connect/)
- [ovhcloud](https://www.ovh.com/)
- [Porkbun](https://porkbun.com/)
- [Spaceship](https://spaceship.com/)
- [Vercel](https://vercel.com/)
- [Vultr](https://www.vultr.com/)
- [UCloud](https://www.ucloud-global.com/)
- [QingCloud](https://intl.qingcloud.com/)
- [CMCC Cloud](https://ecloud.10086.cn/)
- [CTCC StateCloud](https://www.ctyun.cn/)
- [Rain Yun](https://www.rainyun.com/)
- [35.cn](https://www.35.cn/)
- [West.cn](https://www.west.cn/)
- [Xinnet](https://www.xinnet.com/)
- [PowerDNS](https://www.powerdns.com/)
- [Technitium DNS](https://technitium.com/dns/)
- RFC 2136: Dynamic DNS Updates.
- [ACME-DNS](https://github.com/joohoi/acme-dns)
- ACME Proxy HTTP Request: Supports managing DNS by HTTP request.

### My domain registrar is not on the list? {#unlisted-domain-registrars}

Since automation of issuance and renewals is really important, it only makes sense to use DNS-01 challenges if your DNS provider has an API you can use to automate updates.

Before we provide a support for this, you can continue to use Certimate in any of the following ways.

1. Set your domain's NS server to the supported providers mentioned above (note that this is only a modification of NS, not a transfer of your domain registrar!);
2. Using CNAME records to the supported providers mentioned above;
3. Use [ACME DNS](https://github.com/joohoi/acme-dns).

In future versions, we may add a feature that allows users to manually satisfying DNS-01 challenges.

---

## Supported hosting providers {#supported-hosting-providers}

- Local host: Supports deployment to local servers. Preset scripts:
  - Binding to Windows IIS
  - Binding to Windows netsh
  - Binding to Windows RDP
  - Customized scripts
- Remove host (SSH): Supports deployment to remote servers (via SFTP/SCP). Preset scripts:
  - Replace SynologyDSM SSL certificate
  - Replace fnOS SSL certificate
  - Replace QNAP SSL certificate
  - Binding to Windows IIS
  - Binding to Windows netsh
  - Binding to Windows RDP
  - Customized scripts
- Webhook: Supports deployment to Webhook.
- [Kubernetes](https://kubernetes.io/): Supports deployment to Kubernetes Secret.
- [Alibaba Cloud](https://www.alibabacloud.com/): Supports deployment to Alibaba Cloud OSS, CDN, DCDN, SLB(CLB/ALB/NLB), WAF, Live, VOD, FC, APIG, GA, CAS.
- [Tencent Cloud](https://www.tencentcloud.com/): Supports deployment to Tencent Cloud COS, CDN, ECDN, EdgeOne, CLB, WAF, Anti-DDoS, CSS, VOD, SCF, SSL.
- [Baidu AI Cloud](https://intl.cloud.baidu.com/): Supports deployment to Baidu AI CLoud BLB, CDN, CAS.
- [Huawei Cloud](https://www.huaweicloud.com/): Supports deployment to Huawei Cloud OBS, CDN, ELB, WAF, SCM.
- [Volcengine](https://www.volcengine.com/): Supports deployment to Volcengine TOS, CDN, DCDN, CLB, ALB, ImageX, Live, Certificate Center.
- [JD Cloud](https://www.jdcloud.com/): Supports deployment to JD Cloud CDN, ALB, Live Video, VOD.
- [Qiniu Cloud](https://www.qiniu.com/): Supports deployment to Qiniu Cloud Kodo, CDN, Pili.
- [UPYUN Cloud](https://www.upyun.com/): Supports deployment to UPYUN Cloud File, CDN.
- [Wangsu Cloud](https://en.wangsu.com/)：Supports deployment to Wangsu Cloud CDN, CDN Pro, Certificate Management。
- [Baishan Cloud](https://intl.baishancloud.com/): Supports deployment to Baishan Cloud CDN.
- [Doge Cloud](https://www.dogecloud.com/): Supports deployment to Doge Cloud CDN.
- [UCloud](https://www.ucloud-global.com/): Supports deployment to UCloud US3, UCDN.
- [CTCC StateCloud](https://www.ctyun.cn/): Supports deployment to CTCC StateCloud CDN, ICDN, AccessOne, ELB, LVDN, CMS.
- [Kingsoft Cloud](https://en.ksyun.com/): Supports deployment to Kingsoft Cloud RCDN.
- [Rain Yun](https://www.rainyun.com/): Supports deployment to Rain Yun RCDN.
- [uniCloud](https://unicloud.dcloud.net.cn/): Supports deployment to uniCloud web host.
- [1Panel](https://1panel.pro/): Supports deployment to 1Panel.
- [aaPanel](https://www.aapanel.com/): Supports deployment to aaPanel (aka BaotaPanel).
- [aaWAF](https://www.aapanel.com/new/waf.html): Supports deployment to aaWAF (aka BaotaWAF).
- [RatPanel](https://github.com/tnb-labs/panel): Supports deployment to RatPanel.
- [SafeLine](https://waf.chaitin.com/): Supports deployment to SafeLine WAF.
- [AWS](https://aws.amazon.com/): Supports deployment to AWS ACM, IAM, CloudFront.
- [Azure](https://azure.microsoft.com/)：Supports deployment to Azure KeyVault.
- [Bunny](https://www.bunny.net/)：Supports deployment to Bunny CDN。
- [BytePlus](https://www.byteplus.com/): Supports deployment to BytePlus CDN.
- [CacheFly](https://www.cachefly.com/): Supports deployment to CacheFly CDN.
- [Cdnfly](https://www.cdnfly.cn/): Supports deployment to Cdnfly CDN.
- [FlexCDN](https://flexcdn.cn/): Supports deployment to Flex CDN.
- [G-Core](https://gcore.com/): Supports deployment to G-Core CDN.
- [GoEdge](https://goedge.cloud/): Supports deployment to GoEdge CDN.
- [LeCDN](https://cdn.cmzi.com/): Supports deployment to LeCDN CDN.
- [Netlify](https://www.netlify.com/): Supports deployment to Netlify Sites.
- [APISIX](https://apisix.apache.org/): Supports deployment to Apache APISIX。
- [Kong](https://konghq.com/): Supports deployment to Kong。
- [Proxmox VE](https://pve.proxmox.com/): Supports deployment to Proxmox Virtual Environment.

---

## Supported notification channels {#supported-notification-channels}

- Email (SMTP)
- Webhook. Preset templates:
  - [Bark](https://github.com/Finb/Bark)
  - [ntfy](https://github.com/binwiederhier/ntfy)
  - [Gotify](https://github.com/gotify/server)
  - [Pushover](https://pushover.net/)
  - [PushPlus](https://www.pushplus.plus/)
  - [ServerChan <sup>Turbo</sup>](https://sct.ftqq.com/)
  - [ServerChan <sup>3</sup>](https://sc3.ft07.com/)
  - Customized Webhook
- [DingTalk Bot](https://www.dingtalk.com/)
- [Lark/Feishu Bot](https://www.larksuite.com/)
- [WeCom Bot](https://work.weixin.qq.com/)
- [Discord Bot](https://discordapp.com/)
- [Slack Bot](https://slack.com/)
- [Telegram Bot](https://telegram.org/)
- [Mattermost](https://mattermost.com/)

---

## Supported certificate authorities {#supported-certificate-authorities}

- [Let's Encrypt](https://letsencrypt.org/): Including production environment and staging environment.
- [Actalis](https://www.actalis.com/)
- [Buypass](https://www.buypass.com/)
- [GlobalSign](https://www.globalsign.com/)
- [Google Trust Services](https://pki.goog/)
- [Sectigo](https://www.sectigo.com/)
- [SSL.com](https://www.ssl.com/)
- [ZeroSSL](https://zerossl.com/)
- Customized ACME CA

---

## More providers {#more-providers}

If the above providers cannot meet your needs, please let us know or contribute code.

:::tip
The list of providers listed in the document may be outdated.
:::
