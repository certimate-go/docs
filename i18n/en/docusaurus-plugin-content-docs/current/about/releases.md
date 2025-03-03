# Releases

|                                                    Current latest version                                                    |                                      Current latest stable version                                       |
| :--------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| ![GitHub Release](https://img.shields.io/github/v/release/usual2970/certimate?include_prereleases&sort=semver&label=Release) | ![GitHub Release](https://img.shields.io/github/v/release/usual2970/certimate?sort=semver&label=Release) |

A full changelog of past releases is available on [GitHub Releases](https://github.com/usual2970/certimate/releases) page.

---

## Versioning {#versioning}

Certimate releases follow [Semantic Versioning](https://semver.org/).

Before reaching v1.0.0, the first digit of the version number will always be `0`, the second digit will be considered as **major version number**, and the third digit will be considered as **minor version number**.

For example:

- v0.2.5 and v0.2.19 are the same major versions;
- v0.2.24 and v0.3.1 are different major versions.

### Release cycle {#release-cycle}

Certimate does not have a fixed release cycle. Versions are released as needed.

### Pre-releases {#pre-releases}

Every releases will go through an alpha phase and a beta phase.

Pre-releases are meant for integration / stability testing, and for early adopters to provide feedback for unstable features. Do not use pre-releases in production. All pre-releases are considered unstable and may ship breaking changes in between, so always pin to exact versions when using pre-releases.

We don't commit to preserving pre-releases indefinitely. They may be removed from the repository at any time after the corresponding stable version is released.

### Docker image tags {#docker-image-tags}

- `latest`: Default tag, points to the latest stable version.
- `next`: Points to the latest pre-releases version.
- Version number: Directly correspond to a specific version (e.g., `v0.3.0`).

---

## Compatibility {#compatibility}

Please keep in mind that Certimate is still under active development and full backward compatibility is not guaranteed before reaching v1.0.0.

To ensure a smooth upgrade experience for users, we may need to require users to take actions before upgrading.

Read the _[Migrations](../migrations/)_ guide to learn more details.

---

## Roadmap {#roadmap}

You can explore the Roadmap on GitHub to get a general idea where the project is headed, but there are no fixed ETAs.
