import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ background: 'linear-gradient(90deg, #563d7c 0%, #2e8555 100%)', color: 'white' }}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: '#fff' }}>
          OnlineWardleyMaps.com
        </Heading>
        <p className="hero__subtitle" style={{ color: '#d7dae0' }}>
          Open source tools, language, and plugins for creating, sharing, and collaborating on Wardley Maps.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ backgroundColor: '#2e8555', color: '#fff', border: 'none' }}>
            Get Started with Online Wardley Maps
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`OnlineWardleyMaps.com - Open Source Wardley Mapping Platform`}
      description="Create, share, and collaborate on Wardley Maps in your browser, VS Code, or Obsidian. Free, open source, and privacy-friendly.">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h2>What is OnlineWardleyMaps.com?</h2>
              <p>
                <strong>OnlineWardleyMaps.com</strong> is a free, open source set of tools and plugins for creating, editing, and sharing Wardley Maps—a powerful approach for strategic thinking and situational awareness.<br />
                Created and maintained by <a href="https://www.linkedin.com/in/skels/" target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>Damon Skelhorn</a>.<br /><br />
                Wardley Mapping is an approach created by <a href="https://x.com/swardley" target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>Simon Wardley</a> and is used under the terms of the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>Creative Commons Attribution-ShareAlike 4.0 International License</a>.
              </p>
              <h3>Why use it?</h3>
              <ul>
                <li>Easy-to-use online editor for rapid map creation</li>
                <li>Collaborate and share maps with others</li>
                <li>Export maps as images for presentations and reports</li>
                <li>Privacy-friendly: your maps are yours</li>
                <li>Completely <a href="https://github.com/damonsk/onlinewardleymaps" target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>open source</a> and community-driven</li>
              </ul>
              <h3>Available everywhere</h3>
              <ul>
                <li><strong>Browser:</strong> Use directly at <a href="https://onlinewardleymaps.com" target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>onlinewardleymaps.com</a></li>
                <li><strong>VS Code:</strong> Install the <a href="/docs/vscode-extension" className={styles.primaryLink}>VS Code extension</a> for seamless mapping in your IDE</li>
                <li><strong>Obsidian:</strong> Integrate with your notes using the <a href="/docs/obsidian-plugin" className={styles.primaryLink}>Obsidian plugin</a></li>
              </ul>
              <p>
                Join the community, contribute, and help shape the future of Wardley Mapping tools!
              </p>
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
