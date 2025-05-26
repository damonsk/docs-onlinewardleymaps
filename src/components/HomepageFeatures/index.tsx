import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Maps As Code',
    description: (
      <>
        Maps as Code first appeared in 2018 to quickly create visual wardley maps.  Since then it has evolved to include a WYSIWYG editor and is able to run in the browser or as a plugin in popular editors.
      </>
    ),
  },
  {
    title: 'Open Source and Free',
    description: (
      <>
        Open source fosters collaboration, innovation, transparency, and community-driven improvement. Online Wardley Maps (OWM) is proudly open source, enabling users to contribute, customise, and extend the platform freely. This openness ensures rapid evolution and a vibrant ecosystem.
      </>
    ),
  },
  {
    title: 'Available in VSCode & Obsidian',
    description: (
      <>
        Use the Online Wardley Maps plugins in VSCode and Obsidian to create, edit, and visualise Wardley Maps seamlessly within your favourite editors. Enjoy features like syntax highlighting, autocompletion, and live map rendering.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
