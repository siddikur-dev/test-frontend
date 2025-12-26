import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTasks, createTask, updateTaskStatus } from '../api/taskApi';

export const useTasks = () => {
  const queryClient = useQueryClient();

  // ১. টাস্ক ফেচ করা
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  // ২. টাস্ক তৈরি করা (Optimistic Update)
  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onMutate: async (newTask) => {
      await queryClient.cancelQueries(['tasks']);
      const previousTasks = queryClient.getQueryData(['tasks']);
      queryClient.setQueryData(['tasks'], (old) => [...old, { ...newTask, id: Date.now(), isPending: true }]);
      return { previousTasks };
    },
    onError: (err, newTask, context) => queryClient.setQueryData(['tasks'], context.previousTasks),
    onSettled: () => queryClient.invalidateQueries(['tasks']),
  });

  // ৩. স্ট্যাটাস পরিবর্তন (Optimistic Update)
  const updateMutation = useMutation({
    mutationFn: updateTaskStatus,
    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries(['tasks']);
      const previousTasks = queryClient.getQueryData(['tasks']);
      queryClient.setQueryData(['tasks'], (old) =>
        old.map((t) => (t.id === id ? { ...t, status } : t))
      );
      return { previousTasks };
    },
    onError: (err, variables, context) => queryClient.setQueryData(['tasks'], context.previousTasks),
    onSettled: () => queryClient.invalidateQueries(['tasks']),
  });

  return { tasks, isLoading, isError, createTaskMutation, updateMutation };
};