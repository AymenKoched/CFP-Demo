import '@radix-ui/themes/styles.css';
import './globals.css';

import { AppFooter, AppHeader } from '@cfp/app/components';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import React from 'react';

import styles from './layout.module.scss';
import QueryClientProvider from './QueryClientProvider.component';

export const metadata: Metadata = {
  title: 'CFP Group',
  description: 'CFP Group App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="sky">
          <QueryClientProvider>
            <div className={styles.container}>
              <div className={styles.content}>
                <AppHeader />
                <main className={'grow'}>
                  <div className={styles.wrapper}>{children}</div>
                </main>
                <AppFooter />
              </div>
            </div>
          </QueryClientProvider>
        </Theme>
      </body>
    </html>
  );
}
