# Authorization Management

On the authorization management page, you can manage authorization credentials for calling providers' API.

---

## How to retrieve provider's authorization credentials? {#how-to-retrieve-providers-authorization-credentials}

### Alibaba Cloud {#aliyun-credentials}

Please refer to the [official user manual](https://www.alibabacloud.com/help/en/acr/create-and-obtain-an-accesskey-pair).

Least privileges:

- Applying (DNS-01 challenge): `AliyunDNSFullAccess`.
- Deploying: `AliyunYundunCertFullAccess` + full access to the related services or resources.

### Tencent Cloud {#tencentcloud-credentials}

Please refer to the [official user manual](https://cloud.tencent.com/document/product/598/40488?lang=en).

Least privileges:

- Applying (DNS-01 challenge): `QcloudDNSPodFullAccess`.
- Deploying: `QcloudSSLFullAccess` + full access to the related services or resources.

### Baidu Cloud {#baiducloud-credentials}

Please refer to the [official user manual](https://intl.cloud.baidu.com/doc/Reference/s/9jwvz2egb-en).

Least privileges:

- Applying (DNS-01 challenge): `DNSOperatePolicy`.
- Deploying: `CASFullControlPolicy` + full access to the related services or resources.

### Huawei Cloud {#huaweicloud-credentials}

Please refer to the [official user manual](https://support.huaweicloud.com/intl/en-us/usermanual-ca/ca_01_0003.html).

Least privileges:

- Applying (DNS-01 challenge): `DNSFullAccess`.
- Deploying: `SCMFullAccess` + full access to the related services or resources.

### Volc Engine {#volcengine-credentials}

Please refer to the [official user manual](https://www.volcengine.com/docs/6291/65568).

Least privileges:

- Applying (DNS-01 challenge): `DNSFullAccess`.
- Deploying: `SSLFullAccess` + full access to the related services or resources.

### JD Cloud {#jdcloud-credentials}

Please refer to the [official user manual](https://docs.jdcloud.com/en/account-management/accesskey-management).

Least privileges:

- Applying (DNS-01 challenge): `JDCloudHTTPDNSAdmin`.
- Deploying: `JDCloudSSLAdmin` + full access to the related services or resources.

### AWS {#aws-credentials}

Please refer to the [official user manual](https://docs.aws.amazon.com/en_us/IAM/latest/UserGuide/id_credentials_access-keys.html)。

Least privileges:

- Applying (DNS-01 challenge):
  - `route53:ListHostedZones`
  - `route53:ListHostedZonesByName`
  - `route53:GetHostedZone`
  - `route53:ListResourceRecordSets`
  - `route53:ChangeResourceRecordSets`
  - `route53:GetChange`
- Deploying:
  - `acm:ListCertificates`
  - `acm:GetCertificate`
  - `acm:ImportCertificate`
  - Permissions of the related services or resources.

### Azure {#azure-credentials}

Please refer to the [official user manual](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/api/register-app-for-token)。

Least privileges:

- Applying (DNS-01 challenge):
  - `Microsoft.Network/dnsZones/read`
  - `Microsoft.Network/dnsZones/TXT/*`
- Deploying:
  - `Microsoft.KeyVault/vaults/certificates/read`
  - `Microsoft.KeyVault/vaults/certificates/write`
  - Permissions of the related services or resources.

### Cloudflare {#cloudflare-credentials}

Please refer to the following process to obtain:

1. Log in to the Cloudflare console.
2. Click on the account avatar, then click on "My Profile" -> "API Tokens" -> "Create Token", and select to use the "Edit zone DNS" template.
3. Add permission, fill in your domain names, then click the "Continue" button.

Least privileges:

- Applying (DNS-01 challenge):
  - `Zone / Zone / Read`
  - `Zone / DNS / Edit`
