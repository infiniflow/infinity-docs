import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Incredibly fast',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <li>Achieves 0.1 milliseconds query latency on million-scale vector datasets.</li>
        <li>Up to 10K QPS on million-scale vector datasets.</li>
      </>
    ),
  },
  {
    title: 'Fused search',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Supports a fused search of multiple embeddings and full text, in addition to filtering.
      </>
    ),
  },
  {
    title: 'Rich data types',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Supports a wide range of data types including strings, numerics, vectors, and more.
      </>
    ),
  },
  {
    title: 'Ease-of-use',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <li>Intuitive Python API.</li>
        <li>A single-binary architecture with no dependencies, making deployment a breeze.</li>
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
        <Heading as="h3">{title}</Heading>
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
