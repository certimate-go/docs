# FAQ

---

## Basic usage {#basic-usage}

### Do you provide SaaS services?

> No, we do not provide that. Currently, we only support self-hosted.

### Is data security really?

> Since only self-hosted is supported, all data is stored on the user’s server. Additionally, the source code of Certimate is open-source, and the packaging process for binary files and Docker images is entirely done using GitHub Actions. This process is transparent and visible, allowing for independent auditing.

### How long is the validity period of the certificates?

> It depends on the certificate authorities, as the current mainstream ACME CA issued free certificates have a validity period of only 90 days. Certimate can re-apply certificates and deploy them before expiration by automated workflows.

### Forget password?

> Please refer to _[Getting Started / Configuration / Reset Password](../getting-started/configuration#reset-password)_ section.

### Why only 127.0.0.1:8090 can be accessed?

> Please refer to _[Getting Started / Configuration / Set the Listening URL](../getting-started/configuration#set-the-listening-url)_ section.

---

## Troubleshooting {#troubleshooting}

### Unable to run Certimate?

> If you run Certimate in a binary deployment, please check whether the command-line argument `serve` is missing.
>
> If you run Certimate in other deployment methods, please refer to the error logs for troubleshooting.

### Unable to apply certificates?

#### The error logs contain "could not find zone", "zone _xxx_ not found":

> Perhaps because your domain name resolution includes CNAME wildcard resolution. You can try turning on the "Disable CNAME following" switch in the application node configuration.

#### The error logs contain "authoritative nameservers: _xxx_ returned SERVFAIL for \_acme-challenge._xxx_.":

> Perhaps because your domain name resolution records did not take effect in the authoritative nameservers. You can try setting the "DNS recursive nameservers" to a public DNS (such as `8.8.8.8`), and setting a larger "DNS propagation timeout" value (such as 600ms) in the application node configuration.

#### The error logs contain "NXDOMAIN looking up TXT for \_acme-challenge._xxx_ - check that a DNS record exists for this domain":

> Same as above.

#### The error logs contain "NS _xxx_ did not return the expected TXT record \[fqdn: \_acme-challenge._xxx_\]":

> Perhaps because you have previously used other SSL certificate tools, there are legacy TXT parsing records that have not been deleted. You can try cleaning up the useless `_acme-challenge.` and `_dnsauth.` TXT records.
>
> If you have recently changed the domain name registrar or modified the NS server, it may also be due to cached resolution records, and you need to wait 48-72 hours before trying again.

#### The error logs contain "acme:error:rateLimited":

> You've hit a rate limit of Let's Encrypt.

#### The error logs contain "dial tcp: lookup acme-v02.api.letsencrypt.org on 127.0.0.11:53: i/o timeout"

> Unable to connect to Let's Encrypt server. Please check your network connection status.

### Unable to deploy certificates?

#### Can't find certificate files after deploying to local?

> Perhaps because you are running Certimate in Docker, 'local' refers to the container rather than the host.
>
> You can:
>
> - Binding mount of the saving path to the host;
> - Alternatively, choose to deploy to the host using SSH.

#### Error on deploying to SSH: `failed to open remote file: sftp: "Failure"(SSH FX FAILURE)`:

> Perhaps due to insufficient permissions or insufficient disk space.
>
> It may also be because you entered an invalid file saving path in the deployment node configuration.

---

## Cannot solve the problem? {#cannot-solve-the-problem}

If none of the above content can solve your problem, welcome to ask on [GitHub Issues](https://github.com/usual2970/certimate/issues).
