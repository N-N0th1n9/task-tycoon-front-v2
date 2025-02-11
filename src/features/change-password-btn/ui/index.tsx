import Link from 'next/link'

import { ROUTES } from '@src/shared/navigation/routing-paths'
import Button from '@src/shared/ui/button'

import SaveIcon from '../../../../public/assets/icons/save'

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
