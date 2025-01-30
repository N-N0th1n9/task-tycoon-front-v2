export const ROUTES = {
  HOME: '/',
  SIGNIN: '/auth/sign-in',
  SIGNUP: '/auth/sign-up',
  PROFILE: '/i/profile',
  CREATE_TASK: '/i/task/create',
  MY_TASKS: '/i/my-tasks',
  SEARCH: '/i/search',
  CHANNELS: '/i/channels',
  BANK: '/i/bank',
  STATISTICS: '/i/my-statistics',
  // USER: (id: string) => `/user/${id}`,
  TASK: (task_id: string): string => `/i/task/${task_id}`,
  TASK_SOLVING: (id: string): string => `/i/task/solving/${id}`,
  TASK_EDIT: (task_id: string): string => `/i/task/edit/${task_id}`,
  TASK_STATS: (task_id: string): string => `/i/task/stats/${task_id}`,
  TASK_REVIEW: ({
    task_id,
    user_id,
    attempt_id,
  }: {
    task_id: string
    user_id: string
    attempt_id: string
  }): string => `/i/task/review/task_id/${task_id}/user_id/${user_id}/attempt_id/${attempt_id}`,
  USER_ATTEMPTS: ({ task_id, user_id }: { task_id: string; user_id: string }): string =>
    `/i/user-attempts/task_id/${task_id}/user_id/${user_id}`,
  NOT_FOUND: '/404-not-found',
}
