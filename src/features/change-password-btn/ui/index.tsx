import Button from '@/shared/components/button'
import SaveIcon from '@/shared/icons/save'
import { ROUTES } from '@/shared/navigation/routing-paths'
import Link from 'next/link'

const ChangePasswordButton = () => {
  return (
    <Button
      icon={<SaveIcon />}
      className='w-full'
      as={Link}
      href={ROUTES.CHANGE_PASSWORD}
    >
      Сменить пароль
    </Button>
  )
}

export { ChangePasswordButton }
