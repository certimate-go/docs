# Credentials

Credentials store authentication information (username and password, API key, tokens, etc.) to connect with specific third-party apps and services.

On the access management page, you can centrally manage your credential information required for Certimate to access other services.

Read the _[Providers](/docs/reference/providers)_ guide to learn more details.

---

## How to retrieve provider's credentials? {#how-to-retrieve-providers-credentials}

### Alibaba Cloud {#aliyun-credentials}

Please refer to the [official user manual](https://www.alibabacloud.com/help/en/acr/create-and-obtain-an-accesskey-pair).

Least privileges:

- Request certificates (DNS-01 challenge):
  - Use system policy:
    - `AliyunDNSFullAccess`
  - Use custom policy:
    - `alidns:DescribeDomains`
    - `alidns:DescribeDomainRecords`
    - `alidns:AddDomainRecord`
    - `alidns:UpdateDomainRecord`
    - `alidns:DeleteDomainRecord`
- Deploy certificates:
  - Use system policy:
    - `AliyunYundunCertFullAccess`
    - Full access to the related services or resources.
  - Use custom policy:
    - `yundun-cert:ListUserCertificateOrder`
    - `yundun-cert:GetUserCertificateDetail`
    - `yundun-cert:UploadUserCertificate`
    - Full access to the related services or resources.

### Tencent Cloud {#tencentcloud-credentials}

Please refer to the [official user manual](https://cloud.tencent.com/document/product/598/40488?lang=en).

Least privileges:

- Request certificates (DNS-01 challenge):
  - Use system policy:
    - `QcloudDNSPodFullAccess`
  - Use custom policy:
    - `dnspod:CreateRecord`
    - `dnspod:ModifyRecord`
    - `dnspod:DeleteRecord`
- Deploy certificates:
  - Use system policy:
    - `QcloudSSLFullAccess`
    - Full access to the related services or resources.
  - Use custom policy:
    - `ssl:DescribeCertificates`
    - `ssl:DescribeCertificate`
    - `ssl:DescribeCertificateDetail`
    - `ssl:UploadCertificate`
    - Full access to the related services or resources.

### Huawei Cloud {#huaweicloud-credentials}

Please refer to the [official user manual](https://support.huaweicloud.com/intl/en-us/usermanual-ca/ca_01_0003.html).

Least privileges:

- Request certificates (DNS-01 challenge):
  - Use system policy:
    - `DNSFullAccess`
  - Use custom policy:
    - `dns:zone:list`
    - `dns:recordset:list`
    - `dns:recordset:get`
    - `dns:recordset:create`
    - `dns:recordset:update`
    - `dns:recordset:delete`
- Deploy certificates:
  - Use system policy:
    - `SCMFullAccess`
    - Full access to the related services or resources.
  - Use custom policy:
    - `scm:cert:list`
    - `scm:cert:get`
    - `scm:cert:download`
    - `scm:cert:upload`
    - Full access to the related services or resources.

### Volc Engine {#volcengine-credentials}

Please refer to the [official user manual](https://www.volcengine.com/docs/6291/65568).

Least privileges:

- Request certificates (DNS-01 challenge):
  - Use system policy:
    - `DNSFullAccess`
  - Use custom policy:
    - `dns:ListZones`
    - `dns:CreateRecord`
    - `dns:UpdateRecord`
    - `dns:DeleteRecord`
- Deploy certificates:
  - Use system policy:
    - `SSLFullAccess`
    - Full access to the related services or resources.
  - Use custom policy:
    - `ImportCertificate`
    - Full access to the related services or resources.

### AWS {#aws-credentials}

Please refer to the [official user manual](https://docs.aws.amazon.com/en_us/IAM/latest/UserGuide/id_credentials_access-keys.html)。

Least privileges:

- Request certificates (DNS-01 challenge):
  - `route53:ListHostedZones`
  - `route53:ListHostedZonesByName`
  - `route53:GetHostedZone`
  - `route53:ListResourceRecordSets`
  - `route53:ChangeResourceRecordSets`
  - `route53:GetChange`
- Deploy certificates:
  - `acm:ListCertificates`
  - `acm:GetCertificate`
  - `acm:ImportCertificate`
  - Full access to the related services or resources.

### Azure {#azure-credentials}

Please refer to the [official user manual](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/api/register-app-for-token)。

Least privileges:

- Request certificates (DNS-01 challenge):
  - `Microsoft.Network/dnsZones/read`
  - `Microsoft.Network/dnsZones/TXT/*`
- Deploy certificates:
  - `Microsoft.KeyVault/vaults/certificates/read`
  - `Microsoft.KeyVault/vaults/certificates/write`
  - Full access to the related services or resources.

### Google Cloud {#googlecloud-credentials}

Please refer to the [official user manual](https://docs.cloud.google.com/iam/docs/keys-create-delete/)。

Least privileges:

- Request certificates (DNS-01 challenge):
  - Use system policy:
    - `DnsRecordSetAdmin`
  - Use custom policy:
    - `dns.changes.create`
    - `dns.changes.get`
    - `dns.changes.list`
    - `dns.resourceRecordSets.create`
    - `dns.resourceRecordSets.update`
    - `dns.resourceRecordSets.delete`
    - `dns.resourceRecordSets.list`
    - `dns.managedZones.get`
    - `dns.managedZones.list`

### Oracle Cloud {#oraclecloud-credentials}

Please refer to the [official user manual](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)。

Least privileges:

- Request certificates (DNS-01 challenge):
  - `dns-zones`
  - `dns-records`

### Cloudflare {#cloudflare-credentials}

Please refer to the following process to obtain:

1. Log in to the Cloudflare console.
2. Click on the account avatar, then click on "My Profile" -> "API Tokens" -> "Create Token", and select to use the "Edit zone DNS" template.
3. Add permission, fill in your domain names, then click the "Continue" button.

Least privileges:

- Request certificates (DNS-01 challenge):
  - `Zone / Zone / Read`
  - `Zone / DNS / Edit`
