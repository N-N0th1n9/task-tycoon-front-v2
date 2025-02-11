'use client'

import Button from '@src/shared/ui/button'

import DeleteIcon from '../../../../public/assets/icons/trash'

const LogoutButton = () => {
  const handleLogout = () => {
    // Выход из системы
  }

  return (
    <Button
      icon={<DeleteIcon />}
      color='danger'
      className='w-full'
      onClick={handleLogout}
    >
      Выйти
    </Button>
  )
}

export { LogoutButton }
