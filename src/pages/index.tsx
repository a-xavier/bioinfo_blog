import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroGradient}>
      <div className={styles.heroContent}>
        <div className={styles.heroImageWrapper}>
          <img
            src={require('../../static/img/bioinfo.png').default}
            alt="Bioinformatics"
            className={styles.heroImage}
          />
        </div>
        <h1 className={styles.heroTitle}>
          Bioinformatics: <span className={styles.heroHighlight}>from Zero</span>
        </h1>
        <p className={styles.heroSlogan}>
          The best resource for bioinformatics
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/start">
            Get Started 🚀
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/genomics/intro">
            Genomics Guide 🧬
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.welcomeCard}>
          <h2 className={styles.welcomeTitle}>Welcome to BioBlog</h2>
          <p className={styles.welcomeBlurb}>
            BioBlog is your friendly starting point for anyone curious about genomics and bioinformatics.<br />
            Whether you're a student, researcher, or just passionate about science, you'll find clear guides,<br />
            practical tutorials, and curated resources to help you begin your journey from scratch.<br />
            <span className={styles.welcomeHighlight}>Dive in and discover how data and biology come together to shape the future!</span>
          </p>
        </div>
      </main>
    </Layout>
  );
}
