import EmailIcon from '@/shared/icons/email'
import KeyIcon from '@/shared/icons/key'
import BaseAuthFormContainer from '@/shared/ui/base-auth-form-container'
import Input from '@/shared/ui/input'

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
