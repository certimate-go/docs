import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";

import styles from "./index.module.css";

type FeatureItem = {
  title: JSX.Element;
  description: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>homepage.features.item.localDeployment.title</Translate>,
    description: (
      <Translate>homepage.features.item.localDeployment.content</Translate>
    ),
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  },
  {
    title: <Translate>homepage.features.item.dataSecurity​.title</Translate>,
    description: (
      <Translate>homepage.features.item.dataSecurity​.content</Translate>
    ),
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
  },
  {
    title: <Translate>homepage.features.item.easyOperation.title</Translate>,
    description: (
      <Translate>homepage.features.item.easyOperation.content</Translate>
    ),
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  },
];

function Feature({ title, description, Svg }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
