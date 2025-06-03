---
slug: cname
title: 使用 CNAME 完成 ACME DNS-01 质询
authors: [usual2970]
tags: [certimate]
---

Certimate 使用 DNS-01 质询验证你的域名的所有权，截至本文发布时已支持 20+ 域名托管商。但是仍有用户持有的域名不在支持的范围内，或者想给客户申请证书但是域名不在自己的掌控范围内。

对于这些情况，我们通常可以：

1. 将域名转到到支持的托管商。
2. 使用 HttpRequest 自定义校验方法。
3. 使用 CNAME 方式，给托管商不在支持范围的域名添加 CNAME 到在支持范围内的域名。

本文主要讨论 CNAME 方式。

<!-- truncate -->

## 操作步骤

假设你有:

1. `a.com` 托管商不在支持范围内。
2. `b.com` 托管商在支持范围内。
3. 你想给 `www.a.com` 申请证书。

### 1. 给 `a.com` 添加 CNAME 记录

登录 `a.com` 所在托管商的后台，添加 CNAME 解析：

```text
_acme-challenge.www.a.com  CNAME  www.a.com.validationserver.b.com
```

### 2. 在 Certimate 上配置工作流

在 Certimate 上配置工作流，域名填写 `www.a.com`，DNS 提供商授权选择 `b.com` 所在的提供商的授权。

![Certimate 配置](https://i.imgur.com/yXASmOZ.png)

### 3. 执行工作流

保存后执行即可。

## 原理

Certimate 底层使用 Lego，通过将 `_acme-challenge.你的域名` 设置为指向你控制的验证域名的 CNAME，Lego 可以在该验证域名上自动创建 TXT 记录，从而完成 ACME 服务器的验证。

这种方式避免了直接修改主域名的 DNS 记录，使证书申请更加灵活，适用于托管服务或自动化证书管理场景。

## 参考

[Onboarding Your Customers with Let's Encrypt and ACME](https://letsencrypt.org/2019/10/09/onboarding-your-customers-with-lets-encrypt-and-acme/)
