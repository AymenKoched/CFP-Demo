'use client';

import { ErrorMessage } from '@cfp/app/components';
import { useCreateTask } from '@cfp/app/hooks';
import { TaskPayload, taskSchema } from '@cfp/app/responses';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, TextField } from '@radix-ui/themes';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import styles from './CreateTaskForm.module.scss';

export type CreateTaskFormProps = {
  className?: string;
};

const CreateTaskForm = ({ className }: CreateTaskFormProps) => {
  const mutation = useCreateTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskPayload>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const resetFilters = useCallback(() => {
    reset({
      title: '',
      description: '',
    });
  }, [reset]);

  return (
    <Card className={classNames(className, styles.container)} size="4">
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="title" className={styles.form_group__label}>
            Title:
          </label>
          <TextField.Root
            id={'title'}
            {...register('title')}
            size={'3'}
            radius={'medium'}
          />
          {errors?.title?.message && (
            <ErrorMessage text={errors.title.message as string} />
          )}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="description" className={styles.form_group__label}>
            Description:
          </label>
          <TextField.Root
            id={'description'}
            {...register('description')}
            size={'3'}
            radius={'medium'}
          />
          {errors?.description?.message && (
            <ErrorMessage text={errors.description.message as string} />
          )}
        </div>

        <div className={styles.form__footer}>
          <Button
            className={styles.form__footer__icon}
            color="crimson"
            variant="soft"
            size="2"
            type={'button'}
            onClick={resetFilters}
          >
            Cancel
          </Button>
          <Button
            className={styles.form__footer__icon}
            color="indigo"
            variant="soft"
            size="2"
            type={'submit'}
            loading={mutation.isLoading}
          >
            {'Create'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateTaskForm;
