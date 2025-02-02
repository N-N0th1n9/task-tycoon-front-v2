'use client'

import Button from '@/shared/components/button'
import DeleteIcon from '@/shared/icons/trash'

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
