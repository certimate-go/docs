# Migrate to v0.4

v0.4.0 is a major version that is not backward compatible. This documentation will help you upgrade your Certimate service to v0.4.

---

## What changes? {#what-changes}

Here are main differences:

### New workflow editor {#new-workflow-editor}

Powered by [FlowGram](https://github.com/bytedance/flowgram.ai), we have redesigned the workflow editor. Beyond visual style changes, it also includes several new features:

- New node type: Delay;
- Free canvas dragging and zooming via mouse wheel;
- Toggle between horizontal and vertical layouts;
- Mini-map navigation;
- Drag and reorder nodes;
- Import/export workflow in YAML or JSON formats.

### Support HTTP-01 challenge {#support-http01-challenge}

You can now choose to complete domain ownership verification via the HTTP-01 challenge (file-based method).

Note that the HTTP-01 challenge cannot be used to issue wildcard certificates.

### Support uploading certificates from local paths or URLs {#support-uploading-certificates-from-local-paths-or-urls}

In previous versions, users could upload their own certificates to Certimate and deploy them to other platforms. However, this still required manually selecting certificate files in the frontend form, making it only a "semi-automated" process.

Now, you can specify local paths or URLs, and Certimate will read the certificate file from that location. This allows you to issue certificates through other methods (e.g., purchasing commercial certificates or using other ACME clients) without reconfiguring Certimate workflows, enabling fully automated deployment.

### Support notification template syntax {#support-notification-template-syntax}

You can insert variables (e.g., workflow name, certificate domain, expiration time, etc.) into notification subjects or messages to reuse notification templates.

### More providers supported {#more-providers-supported}

Added DNS providers:

- Vultr.

Added deployment providers:

- Huawei Cloud OBS (Object Storage Service).

Added certificate authorities:

- Actalis SSL.
- GlobalSign Atlas.
- Sectigo.
- Additionally, custom ACME CA can be configured in global settings now.

### Improved UI {#improved-ui}

A new user interface that better adapts to ultra-wide screens and mobile devices, along with numerous interaction improvements.

### Some breaking changes {#some-breaking-changes}

Please read the content below to learn more details.

---

## Ready to upgrade {#ready-to-upgrade}

Read the _[Upgrade](/docs/getting-started/upgrade)_ guide to learn more details.

After upgrading and restarting Certimate, it will automatically run a migration program.

:::caution
Once the upgrade is completed, it will not be possible to downgrade back to a lower version. If you need to rollback, please back up your data of the old version data before upgrading.
:::

### From versions prior to v0.3 {#from-versions-prior-to-v0.3}

Not supported. Please upgrade to v0.3.19 or higher first.

### From v0.1.x ~ v0.2.x {#from-v0.3}

:::caution
Users below v0.3.19 need to upgrade to v0.3.19 or higher before upgrading to v0.4.0.
:::

The following data will be fully preserved:

- System settings data (except for notification channel parameters).
- Access credentials data.
- Workflow run histories and logs.

The following data will be converted to adapt to the new version:

- ACME accounts data.
- Workflow orchestration data.
- SSL certificates data.

The following data will be discarded:

- Notification channel parameters in the global settings.

### From v0.4.0-alpha {#from-v0.4.0-alpha}

All your data will be fully preserved.

---

## Breaking changes {#breaking-changes}

### Global-wide notification channels deprecated {#global-wide-notification-channels-deprecated}

In v0.4.0, the functionality related to global-wide notification channels has been deprecated. All notification channels are now managed uniformly within credentials management.

### Global-wide certificate expiration alert deprecated {#global-wide-certificate-expiration-alert-deprecated}

In previous versions, we provided a feature that sent daily expiration alerts for certificates nearing their expiry date. This was designed to help users stay aware of impending certificate expirations and take necessary actions to avoid potential impacts on production environments.

However, this feature was implemented based on scanning existing certificates within Certimate, and did not accurately reflect the certificates actually being used in the user's servers. Moreover, since certificates are renewed automatically, expiration—while inevitable—is not necessarily harmful. Excessive alerting could potentially desensitize users to notifications.

In v0.4.0, the functionality related to global-wide certificate expiration alert has been deprecated. You may choose to configure monitoring for your actual website certificates within workflows instead.

In future iterations, we plan to introduce a dedicated certificate monitoring module built on the existing workflow infrastructure. This will allow users to better track the certificate status of their servers.

### Workflow execution result branch {#workflow-execution-result-branch}

In previous versions, workflows included a node type called ​​"Execution result branch"​​, which allowed certain operations (such as sending email notifications) to be performed after a node execution failed. However, this approach had two limitations:

- It could only evaluate the success or failure of the immediately preceding node. If multiple business nodes in the workflow (e.g., ​​Apply Certificate -> Deploy to Service A -> Deploy to Service B​​) required such evaluation, complex orchestration would be necessary.
- Entering the failure branch implicitly interrupted the entire workflow, making it unsuitable for scenarios where certain errors needed to be ignored.

In v0.4.0, we have refactored this functionality by drawing inspiration from syntactic structures like `try-catch-finally` found in certain programming languages. Now, you can transform previously complex orchestration into a simpler one:

```mermaid
---
title: Original orchestration
---
graph LR;
  Start --> Apply[Apply Certificate]

  Apply --> Condition1{Execute Result}
  Condition1 -- On Failure --> Notify1[Notify] --> End
  Condition1 -- On Success --> Deploy1[Deploy to Service A]

  Deploy1 --> Condition2{Execute Result}
  Condition2 -- On Failure --> Notify2[Notify] --> End
  Condition2 -- On Success --> Deploy2[Deploy to Service B]

  Deploy2 --> Condition3{Execute Result}
  Condition3 -- On Failure --> Notify3[Notify] --> End
  Condition3 -- On Success --> End

```

```mermaid
---
title: New orchestration
---
graph LR;
  Start --> Try

  Try --> Apply[Apply Certificate]
  Try -- On Failure --> Notify[Notify] --> End

  Apply --> Deploy1[Deploy to Service A]
  Deploy1 --> Deploy2[Deploy to Service B]
  Deploy2 --> End
```

Please note that the migration program cannot merge these branches automatically. We recommend manually adjusting existing workflows after the upgrade to consolidate the original multiple sequential execution result branch nodes into a single one.

### Certificate Deployment with wildcard domains {#certificate-deployment-with-wildcard-domains}

In previous versions, due to the lack of a unified specification for deployment providers implemented by various contributors, certain cloud services supporting wildcard resolution (such as CDNs) exhibited three distinct behavioral logics when a wildcard domain (starting with `*`) was entered in the deployment node:

- **​​Exact Match**​​: Deployment only targets the wildcard site itself. For example, `*.example.com` would only match the `*.example.com` site.
- **​​Wildcard Match​**​: Deployment targets all sites matching the wildcard domain. For example, `*.example.com` would match multiple sites like `www.example.com`, `image.example.com`.
- ​**​Certificate-based Match​**​: Deployment targets all sites covered by the certificate. The certificate might be a multi-domain certificate covering, for instance, `www.foo.com`, `www.bar.com`, and `www.baz.com`. Even if the user only entered `*.foo.com`, it would match multiple sites like `www.foo.com`, `www.bar.com`, and `www.baz.com`.

This ambiguity caused confusion for users during operation.

To avoid unnecessary complications, we have unified the default behavior for wildcard domains to ​​**Exact Match​**​ in v0.4.0. The following deployment providers are affected:

- `​​Tencent Cloud - CDN (Content Delivery Network)​​`: Previously used **Certificate-Based Match**.
- ​`​Tencent Cloud - ECDN (Enterprise Content Delivery Network)​`​: Previously used **Certificate-Based Match**.
- `Volcengine - CDN (Content Delivery Network)​`​: Previously used **Wildcard Match**.
- `​​Volcengine - Video Live`​​: Previously used **Wildcard Match**.

Additionally, we have introduced a new configuration option called ​​"Domain match pattern"​​ for the above providers. You can manually adjust this value in the deployment node to maintain the same behavior as in previous versions.

In future iterations, we plan to gradually introduce the ​​"Domain match pattern"​​ configuration for all deployment providers that support wildcard resolution.

### Certificate deployment to Tencent Cloud CLB {#certificate-deployment-to-tencentcloud-clb}

In previous versions, the deployment provider `Tencent Cloud - CLB (Cloud Load Balancer)` included a configuration item called "Resource type".

In v0.4.0, we have deprecated the option "Deploy via SSL Certificate Service" to streamline redundant logic. You may choose other deployment methods, or switch to the `Tencent Cloud - Deploy via SSL Certificate Service` deployment provider.

### Multi-process mode {#multi-process-mode}

In previous versions, you could only view ACME related logs in the terminal's `stdout`/`stderr`. This was due to a limitation in the underlying dependency go-acme/lego, which provided only a global logger. However, because it was global, we could not accurately distinguish which workflow the logged messages belonged to during concurrent operations.

In v0.4.0, we introduced the multi-process mode. Each workflow now runs certificate application tasks in an independent sub-process. This allows ACME related logs generated to be recorded in the workflow logs, making them visible in the WebUI.

Nevertheless, despite numerous optimizations, this approach still introduces some performance overhead. If your device is sensitive to this, you can disable the feature using an environment variable:

```bash
export CERTIMATE_WORKFLOW_MULTIPROC=0
```

### Remove support for CA Buypass {#remove-support-for-ca-buypass}

Buypass will discontinue issuance of SSL certificates from October 15, 2025. For details, please refer to the [official announcement](https://www.buypass.com/products/tls-ssl-certificates/discontinues-issuance-of-tls-ssl-certificates).

In v0.4.0, we have removed Buypass from the built-in CAs. If your workflow relies on it to apply for certificates, please orchestrate manually after upgrading and switch to another CA.
