import { TaskPayload, TaskType } from '@cfp/app/responses';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { api } from './axios';

export function useTasks() {
  const searchTasks = async (): Promise<TaskType[]> => {
    const { data } = await api.get<TaskType[]>('/tasks');
    return data;
  };

  const {
    data: tasks,
    isError,
    error,
    isLoading,
  } = useQuery<TaskType[]>(['tasks'], searchTasks, {});

  return {
    tasks,
    isError,
    error,
    isLoading,
  };
}

export function useToggleStatus() {
  const queryClient = useQueryClient();

  const toggleStatus = async (id: string) => {
    const { data } = await api.patch(`/tasks/${id}`);
    return data;
  };

  return useMutation<TaskType, unknown, { id: string }>({
    mutationFn: ({ id }) => toggleStatus(id),
    onSuccess: () => Promise.all([queryClient.invalidateQueries(['tasks'])]),
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  const deleteTask = async (id: string) => {
    const { data } = await api.delete(`/tasks/${id}`);
    return data;
  };

  return useMutation<void, unknown, string>({
    mutationFn: deleteTask,
    onSuccess: () => Promise.all([queryClient.invalidateQueries(['tasks'])]),
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  const createTask = async (payload: TaskPayload) => {
    const { data } = await api.post(`/tasks`, payload);
    return data;
  };

  return useMutation<TaskType, unknown, TaskPayload>({
    mutationFn: createTask,
    onSuccess: () => Promise.all([queryClient.invalidateQueries(['tasks'])]),
  });
}
