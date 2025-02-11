import BaseAuthFormContainer from '@src/shared/ui/base-auth-form-container'
import Input from '@src/shared/ui/input'

import KeyIcon from '../../../../public/assets/icons/key'

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
