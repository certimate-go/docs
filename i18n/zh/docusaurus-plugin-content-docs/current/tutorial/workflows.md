# 工作流

工作流是自动化流程的节点集合。当满足触发条件时，工作流开始顺序运行各节点以完成复杂的任务。

在工作流页面，你可以创建或编辑工作流。

---

## 节点 {#nodes}

节点是工作流的关键结构。Certimate 提供了一系列内置节点，可以执行许多操作，包括：

### 开始节点 {#start-node}

定义工作流启动的触发条件。一个工作流有且只能有一个开始节点。

有两种触发方式：

- **手动**：手动运行工作流。
- **定时**：自动运行工作流。启用此模式同时需将工作流状态设为“启用”。

手动触发适用于在启用定时触发前测试工作流，或者其他不希望工作流自动运行的场景。

定时触发的工作机制类似于类 Unix 系统中的 CRON 程序。实际运行时区取决于服务器。

:::note
如需生成 CRON 表达式，可使用 [crontab guru](https://crontab.guru/)。
:::

一个开始节点结构形如：

```yaml
id: "uniqueid"
type: "start"
name: "开始"
config:
  trigger: "scheduled"
  triggerCron: "10 1 * * *"
```

### 结束节点 {#end-node}

中止工作流运行并退出。通常是一个工作流的最后一个节点。

如果在分支中添加了结束节点，工作流的剩余部分将不会被执行。

一个结束节点结构形如：

```yaml
id: "uniqueid"
type: "end"
name: "结束"
```

### 申请证书节点 {#applying-certificate-node}

向证书颁发机构申请签发 SSL 证书。

在此节点中，你可以配置向证书颁发机构申请 SSL 证书时所需要的一切参数。

一个申请证书节点结构形如：

```yaml
id: "uniqueid"
type: "bizApply"
name: "申请"
config:
  challengeType: "dns-01"
  contactEmail: "admin@certimate.me"
  domains: "*.certimate.me;certimate.me"
  identifier: "domain"
  keyAlgorithm: "EC256"
  nameservers: "1.1.1.1;8.8.8.8"
  provider: "cloudflare"
  providerAccessId: "accessid"
  skipBeforeExpiryDays: 30
```

### 上传证书节点 {#uploading-certificate-node}

上传用户已有的本地 SSL 证书。

在此节点中，你可以配置加载证书文件的位置。

一个上传证书节点结构形如：

```yaml
id: "uniqueid"
type: "bizUpload"
name: "上传"
config:
  source: "local"
  certificate: "/path/to/your-cert.pem"
  privateKey: "/path/to/your-key.pem"
```

### 监控证书节点 {#monitoring-certificate-node}

通过 HTTPS 协议获取指定网站的 SSL 证书。

在此节点中，你可以配置要监控的实际站点域名。

一个监控证书节点结构形如：

```yaml
id: "uniqueid"
type: "bizMonitor"
name: "监控"
config:
  host: "www.certimate.me"
  port: 443
```

### 部署证书节点 {#deploying-certificate-node}

调用服务提供商相关 API，将 SSL 证书部署到指定的目标。

在此节点中，你可以配置部署 SSL 证书时所需要的提供商参数。

一个部署证书节点结构形如：

```yaml
id: "uniqueid"
type: "bizDeploy"
name: "部署"
config:
  certificateOutputNodeId: "applynodeid"
  provider: "aliyun-cdn"
  providerAccessId: "accessid"
  providerConfig:
    domain: "www.certimate.me"
    region: "cn-hangzhou"
  skipOnLastSucceeded: true
```

### 推送通知节点 {#notifying-node}

调用服务提供商相关 API，将消息通知推送到指定的目标。

在此节点中，你可以配置推送通知所需要的提供商参数。

一个部署证书节点结构形如：

```yaml
id: "uniqueid"
type: "bizNotify"
name: "通知"
config:
  subject: "[Certimate] 警告"
  message: "你的工作流运行失败！"
  provider: "email"
  providerAccessId: "accessid"
  providerConfig:
    receiverAddress: "admin@certimate.me"
  skipOnAllPrevSkipped: true
```

### 延迟等待节点 {#delay-node}

暂停执行工作流并等待一段时间。这在某些需要降低调用执行频率的场景很有用。

一个延迟等待节点结构形如：

```yaml
id: "uniqueid"
type: "delay"
name: "延迟"
config:
  wait: 60
```

### 并行条件分支节点 {#parallel-conditional-branch-node}

当满足指定的条件时，进入相应分支。某一分支中的节点执行失败不影响平行分支继续执行。

你可以设置进入分支的组合条件：

- 无：无条件进入。
- 当满足任一条件时：创建一个或更多条件，并在它们之间的下拉菜单中选择 **​​ 或（OR）**。
- 当满足所有条件时：创建两个或更多条件，并在它们之间的下拉菜单中选择 **​ 与（AND）**。

一个并行条件分支节点结构形如：

```yaml
id: "uniqueid"
type: "condition"
name: "并行"
blocks:
  - id: "subuniqueid1"
    type: "branchBlock"
    name: "分支 1"
    blocks:
      #...
  - id: "subuniqueid2"
    type: "branchBlock"
    name: "分支 2"
    blocks:
      #...
  - id: "subuniqueid3"
    type: "branchBlock"
    name: "分支 3"
    blocks:
      #...
```

### 执行结果分支节点 {#execution-result-branch-node}

尝试执行后续节点，当任一节点执行失败后，中断并进入执行失败分支。

一个执行结果分支节点结构形如：

```yaml
id: "uniqueid"
type: "tryCatch"
name: "尝试执行…"
blocks:
  - id: "subuniqueid1"
    type: "tryBlock"
    name: ""
    blocks:
      #...
  - id: "subuniqueid2"
    type: "catchBlock"
    name: "若执行失败…"
    blocks:
      #...
```

---

## 运行 {#executions}

### 手动运行 {#execute-workflows-manually}

在编排和测试工作流时，或当工作流未设置定时触发时，你可能需要手动执行工作流。

如需手动执行，请点击界面上的「运行」按钮。

### 自动运行 {#execute-workflows-automatically}

所有新创建的工作流默认处于“未启用”状态。

你需要先启用工作流，才能使其自动运行。若工作流未启用，则只能手动运行。

要启用或停用工作流，请打开相应的工作流并点击「启用」、「停用」切换。

工作流一旦启用，将在满足触发条件时自动运行。

---

## 导入与导出 {#export-and-import}

Certimate 以文本格式保存工作流编排内容。您可以将工作流导出为 YAML/JSON 文件，或导入 YAML/JSON 文件。

### 示例 {#export-and-import-example}

以下是一个示例：

```yaml
nodes:
  - id: "id-1"
    type: "start"
    name: "开始"
    config:
      trigger: "scheduled"
      triggerCron: "10 1 * * *"

  - id: "id-2"
    type: "tryCatch"
    name: "尝试执行…"
    blocks:
      - id: "id-2-1"
        type: "tryBlock"
        name: ""
        blocks:
          - id: "id-2-1-1"
            type: "bizApply"
            name: "申请"
            config:
              challengeType: "dns-01"
              contactEmail: "admin@certimate.me"
              domains: "*.certimate.me;certimate.me"
              identifier: "domain"
              keyAlgorithm: "EC256"
              nameservers: "1.1.1.1;8.8.8.8"
              provider: "cloudflare"
              providerAccessId: "accessid"
              skipBeforeExpiryDays: 30
          - id: "id-2-1-2"
            type: "bizDeploy"
            name: "部署"
            config:
              certificateOutputNodeId: "applynodeid"
              provider: "aliyun-cdn"
              providerAccessId: "<aliyun-access-id>"
              providerConfig:
                domain: "www.certimate.me"
                region: "cn-hangzhou"
              skipOnLastSucceeded: true
      - id: "id-2-2"
        type: "catchBlock"
        name: "若执行失败…"
        blocks:
          - id: "id-2-2-1"
            type: "bizNotify"
            name: "通知"
            config:
              subject: "[Certimate] 警告"
              message: "你的工作流运行失败！"
              provider: "email"
              providerAccessId: "<email-access-id>"
              providerConfig:
                receiverAddress: "admin@certimate.me"
              skipOnAllPrevSkipped: true
          - id: "id-2-2-2"
            type: "end"
            name: "结束"

  - id: "id-3"
    type: "end"
    name: "结束"
```

### 语法规则 {#export-and-import-syntax-rules}

可以观察到，每个节点都包含以下几个字段：

- `id`：节点 ID。需要在整个工作流中保持唯一。1 ～ 32 位长度，只可由数字、大小写字母、下划线 `_`、短横线 `-` 组成，但不能以下划线或短横线开头。
- `type`：节点类型。
- `name`：节点名称。
- `config`（可选的）：节点配置项。
- `blocks`（可选的）：子节点数组。

除此之外，还有一些额外的约束条件：

1. 第一个节点必须是 “`start`” 类型。
2. 最后一个节点必须是 “`end`” 类型。
3. “`tryCatch`” 节点必须包含两个子节点。且第一个子节点必须是 “`tryBlock`” 类型，表示尝试分支（类似于 `try-catch-finally` 语法中的 `try`）；第二个子节点必须是 “`catchBlock`” 类型，表示失败分支（类似于 `try-catch-finally` 语法中的 `catch`）。
4. “`condition`” 节点必须至少包含一个子节点。且子节点必须是 “`branchBlock`” 类型。

---

## 最佳实践 {#best-practices}

### 在不同的时间点申请证书 {#best-practices-1}

如果你有多个工作流中都包含申请证书节点，建议将它们设置为在一天中的不同时间段运行，而非总是在相同的特定时间。也不要总是设置为每日零时，以避开证书颁发机构的流量高峰。

为什么？请参阅：

1. [Let’s Encrypt 速率限制](https://letsencrypt.org/zh-cn/docs/rate-limits/)
2. [为什么我的 Let’s Encrypt (ACME) 客户端启动时间应当随机？](https://letsencrypt.org/zh-cn/docs/faq/#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E7%9A%84-let-s-encrypt-acme-%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%90%AF%E5%8A%A8%E6%97%B6%E9%97%B4%E5%BA%94%E5%BD%93%E9%9A%8F%E6%9C%BA)

### 至少每天运行一次，并提前续期证书 {#best-practices-2}

证书续期往往是 ACME 协议中风险最高的环节，因为其成功与否直接关系到站点能否持续运行。由于域名验证依赖外部资源（主要是 DNS），且易受网络波动等影响，证书签发过程可能存在不确定性，这种不确定性会随着时间的推移而加剧。

从技术角度看，首次签发与续期其实面临的是相同的技术挑战。但首次签发通常会受到更密切的关注，签发失败更容易被运维人员及时发现并解决。

因此，如何选择证书的续期时间是需要充分考虑的：既要尽量延后，以充分利用证书有效期，避免因频繁续期证书而产生负载压力；又要足够提前，以便在证书过期前留出充足时间发现问题、诊断问题并实施修复。

一般来说，将续期窗口设置为证书有效期的三分之一较为合理。但当证书有效期极短时，适当延长续期窗口有助于预留更多故障排查时间。

举例：

- 对于 90 天有效期的证书，应在过期前 30 天尝试续期。
- 对于 24 小时有效期的证书，应在过期前 8~12 小时尝试续期。

需要强调的是，续期窗口的设置只决定何时开始续期证书，但并不意味着工作流的触发时间间隔也是这样长。相反，你应当保证至少每天运行一次工作流，以确保一旦发生意外，仍然能尽快地再次执行证书续期。

### 每个工作流中只包含一个申请证书节点 {#best-practices-3}

建议每个工作流至多只包含一个申请证书节点。多个证书申请节点可能导致：

- 证书申请频率过高，触发证书颁发机构的速率限制；
- 不必要的资源消耗和网络带宽占用；
- 证书管理混乱，增加维护难度。

如果你有多个独立的域名需要自动化管理证书，应当在多个工作流中处理。

### 每张证书中只包含一个域名 {#best-practices-4}

尽管许多证书颁发机构都支持将多个域名存储在一张证书内（即 M:1 模式），但仍推荐每张证书只包含一个域名（即 1:1 模式）。

在自动化环境中，M:1 模式的优势有限，反而会增加域名管理复杂度、延长证书签发时间、提高验证错误概率。将多个域名整合至单证书会带来更高的逻辑复杂度和运维负担。所有域名必须共享同一私钥，一旦密钥泄露，所有关联站点都需重新签发证书。此外，多 SAN 证书体积更大，还会延长 TLS 握手时间。而 1:1 模式能避免上述所有问题，唯一显著缺点可能是会占用更多地存储空间。

如果单一服务器或服务器集群需处理某个域的所有子域名，更推荐使用泛域名通配符证书进行统一管理。

仅应在以下特殊情况时考虑 M:1 模式：

- 存储空间极其有限；
- 云服务商按证书数量收费，且需要成本控制；
- 受证书颁发机构速率限制需减少证书管理数量；
- 服务器的软件限制仅能部署单证书，而该主机需服务多域名。

### 不要依赖监控证书节点 {#best-practices-5}

虽然 Certimate 提供了监控某个域名证书剩余有效期的能力，但它不应该作为证书续期的前置条件，环节越多，越容易出错。

建议仅将监控域名证书作为“兜底”策略使用：在某些无法自动化续期的场景下，在证书过期前警告运维人员，尽快人工干预。

:::note
如需更专业的 SSL 证书监测工具，推荐使用 [Uptime Kuma](https://github.com/louislam/uptime-kuma)。
:::

---

## 故障排除 {#troubleshooting}

在 WebUI 中，你可以看到工作流的运行日志，你可以根据日志中的错误信息排查问题。

阅读[常见问题](/docs/reference/faq)指南以了解更多细节。
