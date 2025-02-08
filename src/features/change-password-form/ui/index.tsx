import KeyIcon from '@/shared/icons/key'
import BaseAuthFormContainer from '@/shared/ui/base-auth-form-container'
import Input from '@/shared/ui/input'

const ChangePasswordForm = () => {
  return (
    <BaseAuthFormContainer
      title='Смена пароля'
      btnText='Сохранить'
    >
      <Input
        type='password'
        placeholder='Старый пароль'
        icon={<KeyIcon />}
      />
      <Input
        type='password'
        placeholder='Новый пароль'
        icon={<KeyIcon />}
      />
      <Input
        type='password'
        placeholder='Подтвердите новый пароль'
        icon={<KeyIcon />}
      />
    </BaseAuthFormContainer>
  )
}

export { ChangePasswordForm }
