# Workflows

A Workflow is a collections of nodes that automate a process. Workflows begin execution when a trigger condition occurs and execute sequentially to achieve complex tasks.

On the workflow management page, you can manage your workflows.

---

## Nodes {#nodes}

Nodes are the key building blocks of a workflow. Certimate provides a range of built-in nodes, they perform many actions, including:

### Start node {#start-node}

Define the trigger for workflow initiation.A workflow always need a start node, and only one start node is allowed in a workflow.

There are two trigger modes:

- **Manual**: execute workflows manually.
- **Scheduled**: execute workflows automatically at fixed intervals and times. To enable this, set the workflow to "Active".

The manual trigger is suitable for testing a workflow before enabling scheduled trigger, or when you don't want the workflow to execute automatically.

The scheduled trigger works in a similar way to the CRON software utility in Unix-like systems. The actual time zone is based on the server.

:::note
To generate a CRON expression, you can use [crontab guru](https://crontab.guru/).
:::

A start node structure is as follows:

```yaml
id: "uniqueid"
type: "start"
name: "Start"
config:
  trigger: "scheduled"
  triggerCron: "10 1 * * *"
```

### End node {#end-node}

Suspend the workflow and exit. Usually the last node of a workflow.

If an end node is added to a branch, the rest part of the workflow will not be executed.

An end node structure is as follows:

```yaml
id: "uniqueid"
type: "end"
name: "End"
```

### Applying certificate node {#applying-certificate-node}

Apply for SSL certificate issuance from the certificate authority.

In this node, you can configure all the parameters required to apply for an SSL certificate from a certificate authority.

An applying certificate node structure is as follows:

```yaml
id: "uniqueid"
type: "bizApply"
name: "Application"
config:
  challengeType: "dns-01"
  contactEmail: "admin@certimate.me"
  domains: "*.certimate.me;certimate.me"
  for: "domain"
  keyAlgorithm: "EC256"
  nameservers: "1.1.1.1;8.8.8.8"
  provider: "cloudflare"
  providerAccessId: "accessid"
  skipBeforeExpiryDays: 30
```

### Uploading certificate node {#uploading-certificate-node}

Upload the user's existing SSL certificate.

In this node, you can configure the location to load the certificate file.

An uploading certificate node structure is as follows:

```yaml
id: "uniqueid"
type: "bizUpload"
name: "Uploading"
config:
  source: "local"
  certificate: "/path/to/your-cert.pem"
  privateKey: "/path/to/your-key.pem"
```

### Monitoring certificate node {#monitoring-certificate-node}

Obtain the SSL certificate of the website through HTTPS protocol.

In this node, you can configure the actual site domain name to be monitored.

A monitoring certificate node structure is as follows:

```yaml
id: "uniqueid"
type: "bizMonitor"
name: "Monitoring"
config:
  host: "www.certimate.me"
  port: 443
```

### Deploying certificate node {#deploying-certificate-node}

Invoke the APIs of the service provider to deploy the SSL certificate.

In this node, you can configure the provider parameters required for deploying SSL certificates.

A deploying certificate node structure is as follows:

```yaml
id: "uniqueid"
type: "bizDeploy"
name: "Deployment"
config:
  certificateOutputNodeId: "applynodeid"
  provider: "aliyun-cdn"
  providerAccessId: "accessid"
  providerConfig:
    domain: "www.certimate.me"
    region: "cn-hangzhou"
  skipOnLastSucceeded: true
```

### Notifying node {#notifying-node}

Invoke the APIs of the service provider to push message notifications.

In this node, you can configure the provider parameters required for sending notifications.

A notifying certificate node structure is as follows:

```yaml
id: "uniqueid"
type: "bizNotify"
name: "Notification"
config:
  subject: "[Certimate] Alarm"
  message: "Your workflow run failed!"
  provider: "email"
  providerAccessId: "accessid"
  providerConfig:
    receiverAddress: "admin@certimate.me"
  skipOnAllPrevSkipped: true
```

### Delay node {#delay-node}

Pause the execution, and wait for a certain amount of time.

A delay node structure is as follows:

```yaml
id: "uniqueid"
type: "delay"
name: "延迟"
config:
  wait: 60
```

### Parallel/Conditional branch node {#parallel-conditional-branch-node}

When the specified conditions are met, enter the corresponding branch. The failure of a node in a certain branch does not affect the continuation of parallel branch execution.

You can split a workflow conditionally based on combining conditions:

- Enter Unconditionally: no conditions.
- Enter when any condition is met: Create two or more conditions and select **AND** in the dropdown between them.
- Enter when all conditions are met: Create two or more conditions and select **OR** in the dropdown between them.

A parallel/conditional node structure is as follows:

```yaml
id: "uniqueid"
type: "condition"
name: "Parallel"
blocks:
  - id: "subuniqueid1"
    type: "branchBlock"
    name: "Branch 1"
    blocks:
      #...
  - id: "subuniqueid2"
    type: "branchBlock"
    name: "Branch 2"
    blocks:
      #...
  - id: "subuniqueid3"
    type: "branchBlock"
    name: "Branch 3"
    blocks:
      #...
```

### Execution result branch node {#execution-result-branch-node}

Attempt to execute subsequent nodes, and when any node fails to execute, interrupt and enter the execution failure branch.

An execution result node structure is as follows:

```yaml
id: "uniqueid"
type: "tryCatch"
name: "Try to ..."
blocks:
  - id: "subuniqueid1"
    type: "tryBlock"
    name: ""
    blocks:
      #...
  - id: "subuniqueid2"
    type: "catchBlock"
    name: "On failed ..."
    blocks:
      #...
```

---

## Executions {#executions}

### Execute workflows manually {#execute-workflows-manually}

You may need to execute your workflow manually when erchestration and testing, or if your workflow doesn't have a scheduled trigger.

To execute manually, click "Execute Workflow" button.

### Execute workflows automatically {#execute-workflows-automatically}

All new workflows are inactive by default.

You need to activate workflows first so that they can execute automatically. When a workflow is inactive, you must execute it manually.

To activate or deactivate your workflow, open your workflow and toggle "Active" / "Inactive" button.

Once a workflow is active, it executes whenever its trigger conditions are met.

---

## Export and import {#export-and-import}

Certimate saves workflows in text format. You can export your workflows as YAML/JSON files or import YAML/JSON files.

### Example {#export-and-import-example}

Here is an example:

```yaml
nodes:
  - id: "id-1"
    type: "start"
    name: "Start"
    config:
      trigger: "scheduled"
      triggerCron: "10 1 * * *"

  - id: "id-2"
    type: "tryCatch"
    name: "Try to ..."
    blocks:
      - id: "id-2-1"
        type: "tryBlock"
        name: ""
        blocks:
          - id: "id-2-1-1"
            type: "bizApply"
            name: "Application"
            config:
              challengeType: "dns-01"
              contactEmail: "admin@certimate.me"
              domains: "*.certimate.me;certimate.me"
              for: "domain"
              keyAlgorithm: "EC256"
              nameservers: "1.1.1.1;8.8.8.8"
              provider: "cloudflare"
              providerAccessId: "accessid"
              skipBeforeExpiryDays: 30
          - id: "id-2-1-2"
            type: "bizDeploy"
            name: "Deployment"
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
        name: "On failed ..."
        blocks:
          - id: "id-2-2-1"
            type: "bizNotify"
            name: "Notification"
            config:
              subject: "[Certimate] Alarm"
              message: "Your workflow run failed!"
              provider: "email"
              providerAccessId: "<email-access-id>"
              providerConfig:
                receiverAddress: "admin@certimate.me"
              skipOnAllPrevSkipped: true
          - id: "id-2-2-2"
            type: "end"
            name: "End"

  - id: "id-3"
    type: "end"
    name: "End"
```

### Syntax rules {#export-and-import-syntax-rules}

Each node contains the following fields:

- `id`: Node ID. Must be unique across the entire workflow. Length between 1 and 32 characters, consisting only of numbers, uppercase/lowercase letters, underscores (`_`), or hyphens (`-`). Cannot start with an underscore or hyphen.
- `type`: Node type.
- `name`: Node name.
- `config` (optional): Node configuration items.
- `blocks` (optional): Child nodes.

In addition, there are several additional constraints:

1. The first node must be of type "`start`".
2. The last node must be of type "`end`".
3. A "`tryCatch`" node must contain exactly two child nodes. The first child must be of type "`tryBlock`", representing the try branch (similar to `try` in `try-catch-finally` syntax); the second child must be of type "`catchBlock`", representing the failure branch (similar to `catch` in `try-catch-finally` syntax).
4. A "`condition`" node must contain at least one child node. All child nodes must be of type "`branchBlock`".

---

## Best practices {#best-practices}

### Apply certificates at different times {#best-practices-1}

If you have multiple workflows containing applying certificate nodes, it is recommended to set them to run at a random time of the day instead of always running at a specific time. And please don't always set it to midnight every day to avoid spikes in traffic.

Why should I do this? Please refer to:

1. [Let’s Encrypt rate limits](https://letsencrypt.org/docs/rate-limits/)
2. [Why should my Let’s Encrypt (ACME) client run at a random time?](https://letsencrypt.org/docs/faq/#why-should-my-let-s-encrypt-acme-client-run-at-a-random-time)

### Run at least daily and renew certificates early {#best-practices-2}

Renewing a certificate is the single highest-risk ACME procedure because it implies that the future uptime of one or more sites depends on it succeeding before the certificate expires. Because domain validation requires external resources (namely DNS), certificate issuance can be fickle, especially as more time passes from the initial issuance.

Technically, the initial issuance faces the same technical challenges as a renewal, but initial issuances are supervised more often than renewals and failures of initial issuance are usually more noticeable by sysadmins, so they are fixed sooner.

Therefore, choosing the renewal timing requires careful consideration: it should be delayed enough to maximize certificate validity and avoid frequent renewal load, yet early enough to allow sufficient time for identifying, diagnosing, and fixing issues before expiration.

A common practice is to set the renewal window to one-third of the certificate's validity period. For certificates with very short lifespans, extending this window helps allocate more time for troubleshooting.

Examples:

- For a 90 day certificate, attempt renewal 30 days before expiration.
- For a 24 hour certificate, attempt renewal 8-12 hours before expiration.

The renewal window determines when to start the renewal process, not the workflow execution frequency. You should run the workflow at least daily to ensure prompt retries in case of unexpected failures.

### Limit to one applying certificate node per workflow {#best-practices-3}

It is recommended to include at most one certificate request node per workflow. Multiple request nodes may lead to:

- Excessive request frequency, triggering CA rate limits.
- Unnecessary resource consumption and bandwidth usage.
- Increased complexity in certificate management.

If you need to manage certificates for multiple independent domains automatically, distribute them across separate workflows.

### Limit to one domain per certificate {#best-practices-4}

Although it is possible to map many names to one certificate (M:1), a one-to-one (1:1) mapping is recommended. 1:1 is easy to manage, less error-prone, reduces failures at scale, reduces the impact of revocation, and speeds up certificate maintenance. It also can enhance security since each certificate can use a different private key; thus if one key is compromised, the security of connections to the other sites is not automatically compromised as well. The only notable downside is that it may use more storage space since you will have more certificates.

Using M:1 has little benefit in automated settings, complicates the addition and removal of names, slows down certificate issuance, and increases the chance of validation errors. There will be greater logical and operational complexity by combining many names onto one certificate. In addition, all those names necessarily share a single private key, so if one key is lost, all those sites need a new certificate with a different key. Multi-SAN certificates also have a larger size, so they slow down TLS handshakes.

If a single web server or cluster of servers is handling all subdomains of a single registered domain, it is often better to use and manage a single wildcard certificate.

M:1 might be required if:

- Storage space is extremely limited.
- The web host / service provider charges for certificates and you need to reduce that cost.
- You need to manage fewer certificates due to CA-enforced rate limits.
- Your server software only allows one certificate per virtual host, and the virtual host serves multiple domains.

### Don't rely solely on the monitoring certificate node {#best-practices-5}

While the platform provides the capability to monitor certificate expiration for domains, this should not be used as a prerequisite for renewal.

Use certificate monitoring primarily as a safety net: in scenarios where automated renewal fails, it can alert operators before expiration to allow for manual intervention.

:::note
To get a professional SSL certificate monitoring, you can use tools like [Uptime Kuma](https://github.com/louislam/uptime-kuma).
:::

---

## Troubleshooting {#troubleshooting}

In the WebUI, you can view the workflow run's logs. You can troubleshoot issues based on the error messages within these logs.

Read the _[FAQ](/docs/reference/faq)_ guide to learn more details.
