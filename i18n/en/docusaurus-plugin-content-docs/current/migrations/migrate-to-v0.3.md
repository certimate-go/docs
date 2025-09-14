# Migrate to v0.3

v0.3.0 is a major version that is not backward compatible. This documentation will help you upgrade your Certimate service to v0.3.

---

## What changes? {#what-changes}

Please read our announcement [_v0.3.0：第二个不向后兼容的大版本_](/blog/v0.3.0).

---

## Ready to upgrade {#ready-to-upgrade}

Read the _[Upgrade](/docs/getting-started/upgrade)_ guide to learn more details.

After upgrading and restarting Certimate, it will automatically run a migration program.

:::caution
Once the upgrade is completed, it will not be possible to downgrade back to a lower version. If you need to rollback, please back up your data of the old version data before upgrading.
:::

### From v0.1.x ~ v0.2.x {#from-v0.1.x-v0.2.x}

The following data will be fully preserved:

- System settings data.
- ACME accounts data.

The following data will be converted to adapt to the new version:

- Access credentials data.

The following data will be discarded:

- Domains data.
- Deployment histories.

### From v0.3.0-alpha {#from-v0.3.0-alpha}

All your data will be fully preserved.

---

## Breaking changes {#breaking-changes}

### Domain management deprecated {#domain-management-deprecated}

The functionality related to domain management has been deprecated.
