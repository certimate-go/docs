import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>homepage.hero.title</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate>homepage.hero.subtitle</Translate>
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            <Translate>homepage.hero.actions.button.gettingStarted</Translate>
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
      title={`开源的SSL证书管理工具，可以帮助你申请SSL证书，自动续期SSL证书`}
      description="ssl automation https ssl-certificate ssl-certificates ssl-cert https-certificate"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Homepage;
