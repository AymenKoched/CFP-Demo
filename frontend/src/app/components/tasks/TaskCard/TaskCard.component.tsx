'use client';

import { ActionConfirmationModal } from '@cfp/app/components';
import { useDeleteTask, useToggleStatus } from '@cfp/app/hooks';
import { Status, TaskType } from '@cfp/app/responses';
import { CheckCircledIcon, CircleIcon, TrashIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import classNames from 'classnames';
import React, { useMemo } from 'react';

import styles from './TaskCard.module.scss';

export type TaskCardProps = {
  className?: string;
  task: TaskType;
};

export default function TaskCard({ className, task }: TaskCardProps) {
  const { mutate: toggleStatus, isLoading: isToggling } = useToggleStatus();
  const { mutate: deleteTask, isLoading: isDeleting } = useDeleteTask();

  const handleToggle = () => {
    if (!isToggling) toggleStatus({ id: task.id });
  };

  const handleDelete = () => {
    if (!isDeleting) deleteTask(task.id);
  };

  const deleteTrigger = useMemo(
    () => (
      <IconButton
        className="cursor-pointer"
        size="2"
        variant="ghost"
        color="red"
      >
        <TrashIcon />
      </IconButton>
    ),
    [],
  );

  const StatusIcon = () => (
    <IconButton
      className={'cursor-pointer'}
      size={'2'}
      variant={'ghost'}
      color={task.status === Status.Pending ? 'blue' : 'green'}
      onClick={handleToggle}
      disabled={isToggling}
      loading={isToggling}
    >
      {task.status === Status.Pending ? (
        <CircleIcon color={'blue'} />
      ) : (
        <CheckCircledIcon color={'green'} />
      )}
    </IconButton>
  );

  return (
    <div className={classNames(className, styles.card)}>
      <div className={styles.card__content}>
        <div className={styles.card__text}>
          <h2 className={styles.card__title}>{task.title}</h2>
          <p className={styles.card__desc}>{task.description}</p>
        </div>
        <div className={styles.card__icons}>
          <StatusIcon />
          <ActionConfirmationModal
            trigger={deleteTrigger}
            title="Delete Task"
            description="Are you sure? This task will be deleted."
            confirmText="Delete"
            onConfirm={handleDelete}
            isLoading={isDeleting}
          />
        </div>
      </div>
    </div>
  );
}
