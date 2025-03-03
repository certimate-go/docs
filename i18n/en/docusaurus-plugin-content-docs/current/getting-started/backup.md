# Backup and Restore

If you need to upgrade Certimate or transfer the installation to a new server, you can back up all data for later reinstallation.

---

## Backup data {#backup}

Certimate uses SQLite to store all data, which is located in the `pb_data` directory under your installation path. You can copy all the files in this directory to another path.

A typical `pb_data` directory structure is as follows:

```
.
├─ backups/
├─ storage/
├─ auxiliary.db
└─ data.db       # VERY IMPORTANT!
```

:::caution

If you are using Docker, please ensure that the `/app/pb_data` directory in the container is mounted on the host, otherwise you will not be able to back up these files on the host.

:::

---

## Restore data {#restore}

Stop the Certimate service first, then copy all backed up files back to the `pb_data` directory and replace the files with the same name. Restart Certimate.

:::caution

Please do not directly restore data from lower versions to higher versions for cross version upgrades. As this may result in data confusion, loss, damage, and other issues.

Read the _[Migrations](../migrations/)_ guide to learn more details.

:::
