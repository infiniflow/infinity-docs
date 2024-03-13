import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

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
            providing incredibly fast full-text and vector search
          </p>
          <div className={styles.buttons}>
            <Link
              className={`button button--secondary button--lg ${styles.getStatedLink}`}
              to="/docs/build_from_source"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.rightBottomBackground}></div>
      </header>
      <div className={styles.leftTopBackground}></div>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - The AI-native Database`}
      description="Offering incredibly fast full-text and vector search <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
