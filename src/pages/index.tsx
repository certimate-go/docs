import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img alt="Certimate" src="/img/logo.svg" width={144} height={144} />
        <Heading as="h1" className="hero__title">
          <Translate>homepage.hero.title</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate>homepage.hero.subtitle</Translate>
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
          >
            <Translate>homepage.hero.actions.button.getStarted</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Homepage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.tagline}
      description="ssl tls https ssl-certificate ssl-certificates ssl-cert https-certificate https-certificates https-cert automation"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Homepage;
