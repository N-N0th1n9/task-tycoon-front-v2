import BaseAuthFormContainer from '@/shared/components/base-auth-form-container'
import Input from '@/shared/components/input'
import KeyIcon from '@/shared/icons/key'

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
