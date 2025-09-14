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

:::tip
If there is an applying certificate node in your workflow, it is recommended to set them to run at a random time of the day instead of always running at a specific time. And please don't always set it to midnight every day to avoid spikes in traffic.

Why should I do this? Please refer to:

1. [Let’s Encrypt rate limits](https://letsencrypt.org/docs/rate-limits/)
2. [Why should my Let’s Encrypt (ACME) client run at a random time?](https://letsencrypt.org/docs/faq/#why-should-my-let-s-encrypt-acme-client-run-at-a-random-time)

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

## Troubleshooting {#troubleshooting}

Read the _[FAQ](/docs/reference/faq)_ guide to learn more details.
