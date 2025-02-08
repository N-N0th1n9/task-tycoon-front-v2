import EmailIcon from '@/shared/icons/email'
import KeyIcon from '@/shared/icons/key'
import BaseAuthFormContainer from '@/shared/ui/base-auth-form-container'
import Input from '@/shared/ui/input'

const SignUpForm = () => {
  return (
    <BaseAuthFormContainer
      title='Регистрация'
      btnText='Зарегистрироваться'
    >
      <Input
        type='email'
        placeholder='Адрес эл. почты*'
        icon={<EmailIcon />}
      />
      <Input
        type='text'
        placeholder='Имя*'
        icon={<EmailIcon />}
      />
      <Input
        type='text'
        placeholder='Фамилия*'
        icon={<EmailIcon />}
      />
      <Input
        type='text'
        placeholder='Никнейм'
        icon={<EmailIcon />}
      />
      <Input
        type='password'
        placeholder='Пароль*'
        icon={<EmailIcon />}
      />
      <Input
        type='password'
        placeholder='Подтвердить пароль*'
        icon={<KeyIcon />}
      />
    </BaseAuthFormContainer>
  )
}

export { SignUpForm }
