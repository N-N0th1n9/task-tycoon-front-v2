'use client'

import DeleteIcon from '@/shared/icons/trash'
import Button from '@/shared/ui/button'

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
