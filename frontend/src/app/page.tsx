import React from 'react';

import { CreateTaskCard, TasksList } from './components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <TasksList className={styles.list} />
      <CreateTaskCard className={styles.create} />
    </div>
  );
}
