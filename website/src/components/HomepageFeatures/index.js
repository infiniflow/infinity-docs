import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Incredibly fast',
    Svg: require('@site/static/img/feature-001.svg').default,
    description: (
      <>
        <li>
          Achieves 0.1 milliseconds query latency on million-scale vector
          datasets.
        </li>
        <li>Up to 10K QPS on million-scale vector datasets.</li>
      </>
    ),
  },
  {
    title: 'Fused search',
    Svg: require('@site/static/img/feature-002.svg').default,
    description: (
      <>
        Supports a fused search of multiple embeddings and full text, in
        addition to filtering.
      </>
    ),
  },
  {
    title: 'Rich data types',
    Svg: require('@site/static/img/feature-003.svg').default,
    description: (
      <>
        Supports a wide range of data types including strings, numerics,
        vectors, and more.
      </>
    ),
  },
  {
    title: 'Ease-of-use',
    Svg: require('@site/static/img/feature-004.svg').default,
    description: (
      <>
        <li>Intuitive Python API.</li>
        <li>
          A single-binary architecture with no dependencies, making deployment a
          breeze.
        </li>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col', styles.featureItem)}>
      <Svg className={styles.featureSvg} role="img" />
      <p className={styles.featureItemTitle}>{title}</p>
      <p className={styles.featureItemDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresWrapper}>
      <div>
        <p className={styles.mainTitle}>Core Features</p>
        <p className={styles.minorTitle}>
          Infinity offers top performance, flexibility, easy usability, and
          advanced features for future AI application challenges.
        </p>
      </div>
      <section className={styles.features}>
        <div className="container">
          <div className={`row ${styles.featuresContainer}`}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
