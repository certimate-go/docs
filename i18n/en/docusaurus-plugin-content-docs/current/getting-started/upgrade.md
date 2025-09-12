# Upgrade

A full changelog of past releases is available on [GitHub Releases](https://github.com/certimate-go/certimate/releases) page.

:::tip
Before performing a Certimate upgrade, it is recommended to back up all data to prevent any issues during the upgrade process.

Read the _[Backup and Restore](/docs/getting-started/backup)_ guide to learn more details.
:::

---

## Upgrade process {#upgrade-process}

### Via binary Installation {#via-binary-installation}

1. Stop the old version process.
2. Backup Certimate data.
3. Download the new version release and replace the files in your installation directory.
4. Restart Certimate.

### Via Docker Installation {#via-docker-installation}

1. `docker compose down` or `docker stop` to stop the old version container.
2. Backup Certimate data.
3. `docker compose pull` or `docker pull` to pull the new image.
4. `docker compose up -d` or `docker run` to restart the container.

---

## Cross version upgrades {#cross-version-upgrades}

You can skip multiple minor versions to upgrade directly under the same major version (such as v0.3.0 → v0.3.5), and Certimate will automatically migrate your application data.

When you try to skip some major versions (such as v0.2.15 → v0.3.0), you need to follow the precautions in the migration guide.

It is not recommended to skip multiple major version upgrades in a row. You should perform the upgrade in order of the major version number (such as v0.1.9 → v0.2.0 → v0.3.0 → v0.3.5).

Read the _[Releases](/docs/about/releases)_ and the _[Migrations](/docs/migrations/)_ guide to learn more details.

---

## Downgrade {#downgrade}

Unfortunately, once the upgrading is completed, it is no longer supported to rollback, as the data structure may have undergone fundamental changes.

Therefore, please do not forget to back up your old version data!
