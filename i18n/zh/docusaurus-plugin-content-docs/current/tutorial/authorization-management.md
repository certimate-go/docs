# 授权管理

在授权管理页面，你可以管理通过 Certimate 调用各个提供商 API 接口的授权凭证。

---

## 如何获取提供商的授权凭证？ {#how-to-get-providers-authorization-credentials}

### 阿里云 {#aliyun-credentials}

如何获取请参考阿里云[官方用户手册](https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：`AliyunDNSFullAccess`
- 部署证书：`AliyunYundunCertFullAccess` + 相应服务或资源的完全访问权限。

### 腾讯云 {#tencentcloud-credentials}

如何获取请参考腾讯云[官方用户手册](https://cloud.tencent.com/document/product/598/40488)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：`QcloudDNSPodFullAccess`
- 部署证书：`QcloudSSLFullAccess` + 相应服务或资源的完全访问权限。

### 百度智能云 {#baiducloud-credentials}

如何获取请参考百度智能云[官方用户手册](https://cloud.baidu.com/doc/Reference/s/9jwvz2egb)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：`DNSOperatePolicy`
- 部署证书：`CASFullControlPolicy` + 相应服务或资源的完全访问权限。

### 华为云 {#huaweicloud-credentials}

如何获取请参考华为云[官方用户手册](https://support.huaweicloud.com/usermanual-ca/ca_01_0003.html)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：`DNSFullAccess`
- 部署证书：`SCMFullAccess` + 相应服务或资源的完全访问权限。

### 火山引擎 {#volcengine-credentials}

如何获取请参考火山引擎[官方用户手册](https://www.volcengine.com/docs/6291/65568)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：`DNSFullAccess`
- 部署证书：`SSLFullAccess` + 相应服务或资源的完全访问权限。

### 京东云 {#jdcloud-credentials}

如何获取请参考京东云[官方用户手册](https://docs.jdcloud.com/cn/account-management/accesskey-management)。

必要的最小化权限：

- 申请证书（DNS-01 质询）：`JDCloudHTTPDNSAdmin`
- 部署证书：`JDCloudSSLAdmin` + 相应服务或资源的完全访问权限。
