import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Empower Your Dreams with FundWeave',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The ultimate crowdinvesting platform leveraging blockchain technology, ensuring security, transparency, and efficiency.
      </>
    ),
  },
  {
    title: 'Fund. Flourish. Future with FundWeave',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Innovative features such as smart contracts, detailed project analysis, and a secondary market for token trading make investing seamless and rewarding.
      </>
    ),
  },
  {
    title: 'Take Charge of Your Investments with FundWeave',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The all-in-one platform that revolutionizes how startups and businesses raise funds, and how investors make informed decisions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
