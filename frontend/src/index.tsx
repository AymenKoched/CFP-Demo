// import './index.css';

import { Theme } from '@radix-ui/themes';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import styles from './index.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Theme accentColor="violet">
    <div className={styles.container}>
      <div className={styles.content}>
        <main className={'grow'}>
          <div className={styles.wrapper}>
            <App />
          </div>
        </main>
      </div>
    </div>
  </Theme>,
);
