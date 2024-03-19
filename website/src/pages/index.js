import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const connectionList = [
  { label: 'Twitter', link: 'https://twitter.com/infiniflowai' },
  { label: 'Github', link: 'https://github.com/infiniflow/infinity' },
  { label: 'Discord', link: 'https://discord.com/invite/jEfRUwEYEV' },
];

function HomepageHeader() {
  return (
    <>
      <header className={clsx(styles.heroBanner)}>
        <div className="container">
          <p className={clsx('hero__subtitle', styles.mainTitle)}>
            The
            <span className={styles.mainBlueTitle}> AI-Native </span>
            Database for LLM Applications
          </p>
          <p className={styles.minorTitle}>
            Providing incredibly fast full-text and vector search
          </p>
          <div className={styles.buttons}>
            <Link
              className={`button button--secondary button--lg ${styles.getStatedLink}`}
              to="/docs"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.rightBottomBackground}></div>
      <div className={styles.leftTopBackground}></div>
    </>
  );
}

function JoinUs() {
  return (
    <section className={styles.joinUsWrapper}>
      <div className={styles.joinUsTitle}>Join Our Community</div>
      <section className={clsx(styles.joinUsConnection, 'container')}>
        {connectionList.map((x) => (
          <div className={styles.joinUsConnectionItem} key={x.label}>
            <span
              className={clsx(styles[`joinUs${x.label}`], styles.joinUsIcon)}
            ></span>
            <Link to={x.link} className={styles.joinUsLabel}>
              {x.label}
            </Link>
            <span className={styles.joinUsArrow}></span>
          </div>
        ))}
      </section>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`AI-native database for LLM`}
      description="Offering incredibly fast full-text and vector search <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <JoinUs></JoinUs>
      </main>
    </Layout>
  );
}
