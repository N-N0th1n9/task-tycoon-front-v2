import BaseAuthFormContainer from '@src/shared/ui/base-auth-form-container'
import Input from '@src/shared/ui/input'

import EmailIcon from '../../../../public/assets/icons/email'
import KeyIcon from '../../../../public/assets/icons/key'

const SignInForm = () => {
  return (
    <BaseAuthFormContainer
      title='Войти'
      btnText='Войти'
    >
      <Input
        type='email'
        placeholder='Адрес эл. почты'
        icon={<EmailIcon />}
      />
      <Input
        type='password'
        placeholder='Пароль'
        icon={<KeyIcon />}
      />
    </BaseAuthFormContainer>
  )
}

export { SignInForm }
