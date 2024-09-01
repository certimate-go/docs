import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "私有部署",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        安装简单，只需要下载二进制文件，然后直接运行即可。同时也支持docker部署、源代码部署等方式。
      </>
    ),
  },
  {
    title: "数据安全",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        由于是私有部署，所有数据均存储在自己的服务器上，不会保存在第三方的服务器上，确保数据的安全性。
      </>
    ),
  },
  {
    title: "操作简单",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        通过简单的配置即可轻松申请 SSL
        证书并部署到用户指定的目标上，然后在证书即将过期时自动续期，从申请证书到使用证书完全自动化，无需人工操作。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
