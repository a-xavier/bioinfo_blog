import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { CategoryGrid, Category } from '../components/CategoryVignette';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroGradient}>
      <div className={styles.heroContent}>
        <div className={styles.heroImageWrapper}>
          <img
            src={require('../../static/img/stock_image.png').default}
            alt="Bioinformatics"
            className={styles.heroImage}
          />
        </div>
        <h1 className={styles.heroTitle}>
          Bioinformatics: <span className={styles.heroHighlight}>from Zero</span>
        </h1>
        <p className={styles.heroSlogan}>
          A resource for bioinformatics and computational biology.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/start">
            What is it about? ⁉️
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

const categories: Category[] = [
  {
    id: 'genomics',
    name: 'Genomics',
    description: 'Learn about DNA sequencing, genome assembly, and variant analysis.',
    imageUrl: "./img/categories/DNA0004.svg",
    linkUrl: '/genomics/intro',
  },
  {
    id: 'transcriptomics',
    name: 'Transcriptomics',
    description: 'Explore RNA sequencing, gene expression analysis, and transcriptome assembly.',
    imageUrl: "./img/categories/Translation0001.png",
    linkUrl: '/transcriptomics/intro',
  },
  {
    id: 'proteomics',
    name: 'Proteomics',
    description: 'Dive into protein identification, quantification, and functional analysis.',
    imageUrl: "./img/categories/CeramideSynthase0001.png",
    linkUrl: '/proteomics/intro',
  },
  {
    id: 'metagenomics',
    name: 'Metagenomics',
    description: 'Understand microbial communities through metagenomic sequencing and analysis.',
    imageUrl: "./img/categories/bacteria.svg",
    linkUrl: '/metagenomics/intro',
  },
  {
    id: 'linux',
    name: 'Linux for Bioinformatics',
    description: 'Get comfortable with Linux commands and tools essential for bioinformatics.',
    imageUrl: "./img/categories/linux-svgrepo-com_2.svg",
    linkUrl: '/linux/intro',
  },
  {
    id: 'coding',
    name: 'Coding for Bioinformatics',
    description: 'Learn programming skills in Python and R tailored for bioinformatics applications.',
    imageUrl: "./img/categories/code-xml.svg",
    linkUrl: '/coding/intro',
  },
  {
    id: 'ressources',
    name: 'Ressources',
    description: 'Find useful datasets, tools, and references for your bioinformatics journey.',
    imageUrl: "./img/categories/package-open.svg",
    linkUrl: '/ressources/intro',
  },
  {
    id: 'statistics',
    name: 'Statistics for Bioinformatics',
    description: 'Understand statistical concepts and methods used in bioinformatics analyses.',
    imageUrl: "./img/categories/chart-network.svg",
    linkUrl: '/stats/intro',
  },
  {
    id: 'pipeline',
    name: 'Pipeline Development',
    description: 'Learn how to create and manage bioinformatics pipelines for reproducible research.',
    imageUrl: "./img/categories/workflow.svg",
    linkUrl: '/pipeline/intro',
  },
  {
    id: 'visualisation',
    name: 'Data Visualization',
    description: 'Master techniques for visualizing biological data effectively.',
    imageUrl: "./img/categories/cell_specigic_circos.png",
    linkUrl: '/visualisation/intro',
  }
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.welcomeCard}>
         <h1>Under Construction</h1>
        </div>
        <CategoryGrid categories={categories} />
      </main>
    </Layout>
  );
}
