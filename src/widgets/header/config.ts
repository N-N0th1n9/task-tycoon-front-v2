import { ROUTES } from '@/shared/navigation/routing-paths'

export const PrivateLinks = [
  // { name: 'Банк', href: ROUTES.BANK as string },
  { name: 'Поиск', href: ROUTES.SEARCH },
  { name: 'Мои группы', href: '' },
  { name: 'Статистика', href: ROUTES.STATISTICS },
  { name: 'Профиль', href: ROUTES.PROFILE },
  // { name: 'Создать задание', href: ROUTES.CREATE_TASK },
  // { name: 'Мои задания', href: ROUTES.MY_TASKS },
]

export const PublicLinks = [
  { name: 'Главная', href: ROUTES.HOME },
  { name: 'Вход', href: ROUTES.SIGNIN },
  { name: 'Регистрация', href: ROUTES.SIGNUP },
]
