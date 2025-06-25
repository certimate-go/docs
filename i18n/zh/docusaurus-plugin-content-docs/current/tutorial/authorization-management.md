﻿# 授权管理

在授权管理页面，你可以管理通过 Certimate 调用各个提供商 API 接口的授权凭证。

---

## 如何获取提供商的授权凭证？ {#how-to-retrieve-providers-authorization-credentials}

### 阿里云 {#aliyun-credentials}

如何获取请参考阿里云[官方用户手册](https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - 使用系统策略：
    - `AliyunDNSFullAccess`
  - 使用自定义策略：
    - `alidns:DescribeDomains`
    - `alidns:DescribeDomainRecords`
    - `alidns:AddDomainRecord`
    - `alidns:UpdateDomainRecord`
    - `alidns:DeleteDomainRecord`
- 部署证书：
  - 使用系统策略：
    - `AliyunYundunCertFullAccess`
    - 相应服务或资源的读写权限。
  - 使用自定义策略：
    - `yundun-cert:ListUserCertificateOrder`
    - `yundun-cert:GetUserCertificateDetail`
    - `yundun-cert:UploadUserCertificate`
    - 相应服务或资源的读写权限。

### 腾讯云 {#tencentcloud-credentials}

如何获取请参考腾讯云[官方用户手册](https://cloud.tencent.com/document/product/598/40488)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - 使用系统策略：
    - `QcloudDNSPodFullAccess`
  - 使用自定义策略：
    - `dnspod:CreateRecord`
    - `dnspod:ModifyRecord`
    - `dnspod:DeleteRecord`
- 部署证书：
  - 使用系统策略：
    - `QcloudSSLFullAccess`
    - 相应服务或资源的读写权限。
  - 使用自定义策略：
    - `ssl:DescribeCertificates`
    - `ssl:DescribeCertificate`
    - `ssl:DescribeCertificateDetail`
    - `ssl:UploadCertificate`
    - 相应服务或资源的读写权限。

### 百度智能云 {#baiducloud-credentials}

如何获取请参考百度智能云[官方用户手册](https://cloud.baidu.com/doc/Reference/s/9jwvz2egb)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - 使用系统策略：
    - `DNSOperatePolicy`
  - 使用自定义策略：
    - `bce:dns:READ`
    - `bce:dns:OPERATE`
- 部署证书：
  - 使用系统策略：
    - `CASFullControlPolicy`
    - 相应服务或资源的读写权限。
  - 使用自定义策略：
    - `bce:cas:FULL_CONTROL`
    - 相应服务或资源的读写权限。

### 华为云 {#huaweicloud-credentials}

如何获取请参考华为云[官方用户手册](https://support.huaweicloud.com/usermanual-ca/ca_01_0003.html)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - 使用系统策略：
    - `DNSFullAccess`
  - 使用自定义策略：
    - `dns:zone:list`
    - `dns:recordset:list`
    - `dns:recordset:get`
    - `dns:recordset:create`
    - `dns:recordset:update`
    - `dns:recordset:delete`
- 部署证书：
  - 使用系统策略：
    - `SCMFullAccess`
    - 相应服务或资源的读写权限。
  - 使用自定义策略：
    - `scm:cert:list`
    - `scm:cert:get`
    - `scm:cert:download`
    - `scm:cert:upload`
    - 相应服务或资源的读写权限。

### 火山引擎 {#volcengine-credentials}

如何获取请参考火山引擎[官方用户手册](https://www.volcengine.com/docs/6291/65568)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - 使用系统策略：
    - `DNSFullAccess`
  - 使用自定义策略：
    - `dns:ListZones`
    - `dns:CreateRecord`
    - `dns:UpdateRecord`
    - `dns:DeleteRecord`
- 部署证书：
  - 使用系统策略：
    - `SSLFullAccess`
    - 相应服务或资源的读写权限。
  - 使用自定义策略：
    - `ImportCertificate`
    - 相应服务或资源的读写权限。

### 京东云 {#jdcloud-credentials}

如何获取请参考京东云[官方用户手册](https://docs.jdcloud.com/cn/account-management/accesskey-management)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - 使用系统策略：
    - `JDCloudDomainServiceAdmin`
  - 使用自定义策略：
    - `domainservice:describeDomains`
    - `domainservice:describeResourceRecord`
    - `domainservice:createResourceRecord`
    - `domainservice:modifyResourceRecord`
    - `domainservice:deleteResourceRecord`
- 部署证书：
  - 使用系统策略：
    - `JDCloudSSLAdmin`
    - 相应服务或资源的读写权限。
  - 使用自定义策略：
    - `ssl:describeCerts`
    - `ssl:uploadCert`
    - 相应服务或资源的读写权限。

### AWS {#aws-credentials}

如何获取请参考 AWS [官方用户手册](https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/id_credentials_access-keys.html)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - `route53:ListHostedZones`
  - `route53:ListHostedZonesByName`
  - `route53:GetHostedZone`
  - `route53:ListResourceRecordSets`
  - `route53:ChangeResourceRecordSets`
  - `route53:GetChange`
- 部署证书：
  - `acm:ListCertificates`
  - `acm:GetCertificate`
  - `acm:ImportCertificate`
  - 相应服务或资源的读写权限。

### Azure {#azure-credentials}

如何获取请参考 Azure [官方用户手册](https://learn.microsoft.com/zh-cn/azure/azure-monitor/logs/api/register-app-for-token)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - `Microsoft.Network/dnsZones/read`
  - `Microsoft.Network/dnsZones/TXT/*`
- 部署证书：
  - `Microsoft.KeyVault/vaults/certificates/read`
  - `Microsoft.KeyVault/vaults/certificates/write`
  - 相应服务或资源的读写权限。

### Cloudflare {#cloudflare-credentials}

请参考以下流程获取：

1. 登录 Cloudflare 控制台，进入控制台域名管理页面。
2. 点击账号头像，依次点击「我的个人资料」->「API 令牌」->「创建令牌」，选择使用「编辑区域 DNS」模板。
3. 配置权限，并填入域名后，点击“继续”按钮。

必要的最小化权限：

- 申请证书（DNS-01 质询）：
  - `Zone / Zone / Read`
  - `Zone / DNS / Edit`
