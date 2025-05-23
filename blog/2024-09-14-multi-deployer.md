---
slug: multi-deployer
title: 添加域名变量以及部署组
authors: [usual2970]
tags: [certimate]
---

我在平时的工作过程中要管理多个站点，这些站点基本都部署在各种 CDN 上，在国内，所有厂商的服务都不会自动给你的域名添加证书，这就需要我定期的去操作，非常麻烦的同时也容易忘掉，这就是我为什么要写 Certimate 的原因。

<!-- truncate -->

支持了我的常用场景后，我便将 Certimate 开源了，越来越多的用户开始反馈，他们也需要将证书部署到自己的主机上，最初的版本只支持一个证书部署到到一个主机上，这就和实际的用户需求有了冲突。

用户的实际需求是：

- 1 个证书可以部署到多个主机上，如泛域名、或者负载均衡等场景。
- 多个证书可以部署到 1 个主机上，如 1 个主机上有多个服务的场景。

因此，Certimate v0.1.6 中支持了域名变量和部署授权组的概念，以便满足用户的需求。

## 域名变量

域名变量是指和域名相关的变量，在申请证书成功后，部署时会将域名变量替换到部署命令中，从而实现多个证书部署到 1 个主机上的场景。

### 使用方法

- 在添加/编辑域名页面中，点击高级设置，在变量输入框中输入变量，变量的格式为 `key=val`，如有多个变量用;号分隔。示例：

```bash
key1=val1;
key2=val2;
```

![填写变量](https://i.imgur.com/iFolv9P.png)

- 在部署授权中，证书的路径、以及命令中可以使用变量，使用方法为 `${key1}`，示例：

![使用变量](https://i.imgur.com/lXjGqLg.png)

## 部署授予权组

部署授权组是指将多个 SSH 主机的授权合并到同一个组中，在填写域名信息时，可以选择某个授权组，在部署时就会将证书部署到该授权组中的所有主机上。

### 使用方法

- 点击 `部署授权组`菜单，点击新增授权组，填写授权组名称，点击保存。
- 在添加/编辑授权时，选择你之前添加的授权组。目前只支持 SSH 授权。
  ![创建授权组](https://i.imgur.com/zh0V221.png)
- 在添加/编辑域名时，点击 `高级设置`选择你之前添加的授权组。

![选择授权组](https://i.imgur.com/IHpb82y.png)

## 总结

以上便是 Certimate 的域名变量和部署授权组的功能，希望能帮助到更多的用户。
