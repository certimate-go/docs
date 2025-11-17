# 提供商

在 Certimate 中，提供商是指提供特定服务的第三方。

提供商分为以下几种类型：

- `DNS 提供商`：你的 DNS 托管方，通常等同于域名注册商，用于在申请证书时管理你的域名解析记录。
- `主机提供商`：你的服务器或云服务的托管方，用于部署签发的证书。
- `证书颁发机构`：证书颁发机构。目前仅支持使用 ACME 协议的证书颁发机构。
- `通知渠道`：用于推送消息通知的渠道。

---

## 支持的 DNS 提供商 {#supported-dns-providers}

- [阿里云](https://www.aliyun.com/)
- [阿里云 ESA NS 模式](https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/dns-overview/)
- [腾讯云](https://cloud.tencent.com/)
- [腾讯云 EdgeOne NS 模式](https://cloud.tencent.com/document/product/1552/111782/)
- [百度智能云](https://cloud.baidu.com/)
- [华为云](https://www.huaweicloud.com/)
- [火山引擎](https://www.volcengine.com/)
- [京东云](https://www.jdcloud.com/)
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
- [NS1 Connect](https://www.ibm.com/cn-zh/products/ns1-connect/)
- [ovhcloud](https://www.ovh.com/)
- [Porkbun](https://porkbun.com/)
- [Spaceship](https://spaceship.com/)
- [Vercel](https://vercel.com/)
- [Vultr](https://www.vultr.com/)
- [优刻得](https://www.ucloud.cn/)
- [青云](https://www.qingcloud.com/)
- [移动云](https://ecloud.10086.cn/)
- [天翼云](https://www.ctyun.cn/)
- [雨云](https://www.rainyun.com/)
- [三五互联](https://www.35.cn/)
- [西部数码](https://www.west.cn/)
- [新网数码](https://www.xinnet.com/)
- [PowerDNS](https://www.powerdns.com/)
- [Technitium DNS](https://technitium.com/dns/)
- RFC 2136：通过 Dynamic DNS Updates 协议修改 DNS 解析。
- [ACME-DNS](https://github.com/joohoi/acme-dns)
- ACME 代理 HTTP 请求：通过 HTTP 请求修改 DNS 解析。

### 我的域名注冊商不在清单内？ {#unlisted-domain-registrars}

不幸的是，Certimate 的工作高度依赖自动化，不受支持的域名注册商将无法完成 DNS-01 质询。

在我们做出支持响应之前，你可以通过以下任一方式继续使用 Certimate 来申请证书。

1. 将你的域名 NS 服务器设置为上述支持的提供商（注意，这只是修改 NS，不是转移你的域名注册商！）；
2. 使用 CNAME 记录，指向上述支持的提供商；
3. 搭建并使用 [ACME DNS](https://github.com/joohoi/acme-dns)。

在后续版本中，我们可能会增加允许用户手动完成 DNS-01 质询的功能。

---

## 支持的主机提供商 {#supported-hosting-providers}

- 本地主机：可部署到本地主机，并提供预设脚本：
  - 导入并绑定到 Windows IIS
  - 导入并绑定到 Windows netsh
  - 导入并绑定到 Windows RDP
  - 自定义脚本
- 远程主机（SSH）：可部署到远程主机（通过 SFTP/SCP），并提供预设脚本：
  - 替换群晖 DSM 证书
  - 替换飞牛 fnOS 证书
  - 替换威联通 QNAP 证书
  - 导入并绑定到 Windows IIS
  - 导入并绑定到 Windows netsh
  - 导入并绑定到 Windows RDP
  - 自定义脚本
- Webhook：可部署到 Webhook。
- [Kubernetes](https://kubernetes.io/)：可部署到 Kubernetes Secret。
- [阿里云](https://www.aliyun.com/)：可部署到阿里云 OSS、CDN、DCDN、ESA、SLB（CLB/ALB/NLB）、WAF、DDoS、Live、VOD、FC、APIG、GA、CAS 等服务。
- [腾讯云](https://cloud.tencent.com/)：可部署到腾讯云 COS、CDN、ECDN、EdgeOne、CLB、WAF、CSS、VOD、SCF、SSL 等服务。
- [百度智能云](https://cloud.baidu.com/)：可部署到百度智能云 BLB、CDN、CAS 等服务。
- [华为云](https://www.huaweicloud.com/)：可部署到华为云 OBS, CDN、ELB、WAF、SCM 等服务。
- [火山引擎](https://www.volcengine.com/)：可部署到火山引擎 TOS、CDN、DCDN、CLB、ALB、ImageX、Live、证书中心等服务。
- [京东云](https://www.jdcloud.com/)：可部署到京东云 CDN、ALB、视频直播、视频点播等服务。
- [七牛云](https://www.qiniu.com/)：可部署到七牛云对象存储、CDN、直播云等服务。
- [又拍云](https://www.upyun.com/)：可部署到又拍云云存储、CDN 等服务。
- [网宿云](https://www.wangsu.com/)：可部署到网宿云 CDN、CDN Pro、证书管理等服务。
- [白山云](https://www.baishan.com/)：可部署到白山云 CDN。
- [多吉云](https://www.dogecloud.com/)：可部署到多吉云 CDN。
- [优刻得](https://www.ucloud.cn/)：可部署到优刻得 US3、UCDN 等服务。
- [天翼云](https://www.ctyun.cn/)：可部署到天翼云 CDN、ICDN、AccessOne、ELB、LVDN、CMS 等服务。
- [金山云](https://www.ksyun.com/)：可部署到金山云 CDN。
- [雨云](https://www.rainyun.com/)：可部署到雨云 RCDN。
- [uniCloud](https://unicloud.dcloud.net.cn/)：可部署到 uniCloud 前端网页托管。
- [1Panel](https://1panel.cn/)：可部署到 1Panel。
- [宝塔面板](https://www.bt.cn/)：可部署到宝塔面板。
- [堡塔云 WAF](https://www.bt.cn/new/aawaf.html)：可部署到堡塔云 WAF。
- [耗子面板](https://github.com/tnb-labs/panel)：可部署到耗子面板。
- [雷池](https://waf-ce.chaitin.cn/)：可部署到雷池 WAF。
- [AWS](https://aws.amazon.com/)：可部署到 AWS ACM、IAM、CloudFront 等服务。
- [Azure](https://azure.microsoft.com/)：可部署到 Azure KeyVault 等服务。
- [Bunny](https://www.bunny.net/)：可部署到 Bunny CDN。
- [BytePlus](https://www.byteplus.com/)：可部署到 BytePlus CDN。
- [CacheFly](https://www.cachefly.com/)：可部署到 CacheFly CDN。
- [Cdnfly](https://www.cdnfly.cn/)：可部署到 Cdnfly CDN。
- [FlexCDN](https://flexcdn.cn/)：可部署到 Flex CDN。
- [G-Core](https://gcore.com/)：可部署到 G-Core CDN。
- [GoEdge](https://goedge.cloud/)：可部署到 GoEdge CDN。
- [LeCDN](https://cdn.cmzi.com/)：可部署到 LeCDN CDN。
- [Netlify](https://www.netlify.com/)：可部署到 Netlify Sites。
- [APISIX](https://apisix.apache.org/)：可部署到 Apache APISIX。
- [Kong](https://konghq.com/)：可部署到 Kong。
- [Proxmox VE](https://pve.proxmox.com/)：可部署到 Proxmox VE。

---

## 支持的证书颁发机构 {#supported-certificate-authorities}

- [Let's Encrypt](https://letsencrypt.org/)：包括测试环境及生产环境。
- [Actalis](https://www.actalis.com/)
- [Buypass](https://www.buypass.com/)
- [GlobalSign](https://www.globalsign.com/)
- [Google Trust Services](https://pki.goog/)
- [Sectigo](https://www.sectigo.com/)
- [SSL.com](https://www.ssl.com/)
- [ZeroSSL](https://zerossl.com/)
- 自定义 ACME CA

---

## 支持的通知渠道 {#supported-notification-channels}

- 邮件（SMTP）
- Webhook，并提供预设模板：
  - [Bark](https://github.com/Finb/Bark)
  - [ntfy](https://github.com/binwiederhier/ntfy)
  - [Gotify](https://github.com/gotify/server)
  - [Pushover](https://pushover.net/)
  - [PushPlus](https://www.pushplus.plus/)
  - [Server 酱 <sup>Turbo</sup>](https://sct.ftqq.com/)
  - [Server 酱 <sup>3</sup>](https://sc3.ft07.com/)
  - 自定义 Webhook
- [钉钉机器人](https://www.dingtalk.com/)
- [飞书机器人](https://www.feishu.cn/)
- [企业微信机器人](https://work.weixin.qq.com/)
- [Discord 机器人](https://discordapp.com/)
- [Slack 机器人](https://slack.com/)
- [Telegram 机器人](https://telegram.org/)
- [Mattermost](https://mattermost.com/)

---

## 更多提供商 {#more-providers}

如果上述提供商不能满足你的需求，欢迎告知我们，或贡献代码。

:::tip
文档中所列出的提供商清单可能滞后于实际情况，请以 Certimate 程序内为准。
:::
