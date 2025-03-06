# Authorization Management

On the authorization management page, you can manage authorization credentials for calling providers' API.

---

## How to get providers' authorization credentials? {#how-to-get-providers-authorization-credentials}

### Alibaba Cloud {#aliyun-credentials}

Please refer to the [official user manual](https://www.alibabacloud.com/help/en/acr/create-and-obtain-an-accesskey-pair).

Least privileges:

- Applying (DNS-01 challenge): `AliyunDNSFullAccess`
- Deploying: `AliyunYundunCertFullAccess` + full access to the related services or resources.

### Tencent Cloud {#tencentcloud-credentials}

Please refer to the [official user manual](https://cloud.tencent.com/document/product/598/40488?lang=en).

Least privileges:

- Applying (DNS-01 challenge): `QcloudDNSPodFullAccess`
- Deploying: `QcloudSSLFullAccess` + full access to the related services or resources.

### Baidu Cloud {#baiducloud-credentials}

Please refer to the [official user manual](https://intl.cloud.baidu.com/doc/Reference/s/9jwvz2egb-en).

Least privileges:

- Applying (DNS-01 challenge): `DNSOperatePolicy`
- Deploying: `CASFullControlPolicy` + full access to the related services or resources.

### Huawei Cloud {#huaweicloud-credentials}

Please refer to the [official user manual](https://support.huaweicloud.com/intl/en-us/usermanual-ca/ca_01_0003.html).

Least privileges:

- Applying (DNS-01 challenge): `DNSFullAccess`
- Deploying: `SCMFullAccess` + full access to the related services or resources.

### Volc Engine {#volcengine-credentials}

Please refer to the [official user manual](https://www.volcengine.com/docs/6291/65568).

Least privileges:

- Applying (DNS-01 challenge): `DNSFullAccess`
- Deploying: `SSLFullAccess` + full access to the related services or resources.

### JD Cloud {#jdcloud-credentials}

Please refer to the [official user manual](https://docs.jdcloud.com/en/account-management/accesskey-management).

Least privileges:

- Applying (DNS-01 challenge): `JDCloudHTTPDNSAdmin`
- Deploying: `JDCloudSSLAdmin` + full access to the related services or resources.
