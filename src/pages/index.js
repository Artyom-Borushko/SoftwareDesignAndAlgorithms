import React from 'react';
import Layout from '@theme/Layout';

import { PuzzleIcon, AlgorithmIcon, OOPIcon, FxIcon, ColumnsIcon } from '../components/icons';
import { Link } from '../components';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.linksContainer}>
          <Link
            url="/docs/building-blocks-of-oop-part-1/programming_paradigm"
            title="Building Blocks of OOP, Part 1, Part 2"
          >
            <OOPIcon />
          </Link>
          <Link url="/docs/functional-programming/fp_introduction" title="Functional Programming">
            <FxIcon />
          </Link>
          <Link url="/docs/design-patterns/design_patterns" title="Design Patterns">
            <PuzzleIcon />
          </Link>
          <Link url="/docs/solid-principles/introduction" title="SOLID Principles">
            <ColumnsIcon />
          </Link>
          <Link
            url="/docs/algorithms-and-data-structures-part-1/elementary_data_structures"
            title="Algorithms and Data Structures, Part 1, Part 2"
          >
            <AlgorithmIcon />
          </Link>
        </div>
      </main>
    </Layout>
  );
}
