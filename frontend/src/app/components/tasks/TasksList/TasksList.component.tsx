'use client';

import { useTasks } from '@cfp/app/hooks';
import { Card, ScrollArea } from '@radix-ui/themes';
import classNames from 'classnames';
import { isEmpty, map } from 'lodash';
import React, { useMemo } from 'react';

import { TaskCard } from '../TaskCard';
import { TaskCardSkeleton } from '../TaskCardSkeleton';
import styles from './TasksList.module.scss';

export type TasksListProps = { className?: string };

export default function TasksList({ className }: TasksListProps) {
  const { tasks, isLoading } = useTasks();

  const tasksCount = useMemo(() => tasks?.length || 0, [tasks]);

  const tasksList = (
    <ScrollArea type="auto" scrollbars="vertical" style={{ height: 600 }}>
      <div className={styles.container__list}>
        {map(tasks, (task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </ScrollArea>
  );

  const loader = (
    <ScrollArea type="auto" scrollbars="vertical" style={{ height: 600 }}>
      <div className={styles.container__list}>
        {[...new Array(5)].map((_, index) => (
          <TaskCardSkeleton key={index} />
        ))}
      </div>
    </ScrollArea>
  );

  return (
    <Card className={classNames(className, styles.container)} size="4">
      <h1 className={styles.container__title}>Tasks</h1>
      <div className={styles.container__desc}>
        <p>Review recent Tasks.</p>
        <p>
          {tasksCount} {tasksCount === 1 ? 'task' : 'tasks'} found
        </p>
      </div>
      {isLoading ? loader : isEmpty(tasks) ? <p>No tasks yet!</p> : tasksList}
    </Card>
  );
}
