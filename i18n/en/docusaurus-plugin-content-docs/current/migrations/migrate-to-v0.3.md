# Migrate to v0.3

v0.3.0 is a major version that is not backward compatible, and its data structure has undergone significant changes compared to previous versions. We will try our best to preserve and automatically convert the data from previous versions.

---

## Ready to upgrade {#ready-to-upgrade}

Read the _[Upgrade](/docs/getting-started/upgrade)_ guide to learn more details.

After upgrading and restarting Certimate, it will automatically run a migration program.

### From v0.1.x ~ v0.2.x {#from-v0.1.x-v0.2.x}

- The following data will be fully preserved:
  - System settings data.
  - ACME accounts data.
- The following data will be converted to adapt to the new version:
  - Authorizations data.
- The following data will be discarded:
  - Domains data.
  - Deployment histories.

### From v0.3.0-alpha {#from-v0.3.0-alpha}

- All your data will be fully preserved.

---

## Breaking changes {#breaking-changes}

- The domain management function has been deprecated.
