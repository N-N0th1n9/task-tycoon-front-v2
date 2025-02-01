import BaseAuthFormContainer from '@/shared/components/base-auth-form-container'
import Input from '@/shared/components/input'
import EmailIcon from '@/shared/icons/email'
import KeyIcon from '@/shared/icons/key'

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
