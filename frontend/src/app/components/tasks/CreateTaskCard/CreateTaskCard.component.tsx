import { Card } from '@radix-ui/themes';
import classNames from 'classnames';
import React from 'react';

import { CreateTaskForm } from '../CreateTaskForm';
import styles from './CreateTaskCard.module.scss';

export type CreateTaskCardProps = { className?: string };

export default function CreateTaskCard({ className }: CreateTaskCardProps) {
  return (
    <Card className={classNames(className, styles.container)} size="4">
      <h1 className={styles.container__title}>Create Task</h1>
      <CreateTaskForm className={styles.container__form} />
    </Card>
  );
}
