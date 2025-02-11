import BaseAuthFormContainer from '@src/shared/ui/base-auth-form-container'
import Input from '@src/shared/ui/input'

import EmailIcon from '../../../../public/assets/icons/email'
import KeyIcon from '../../../../public/assets/icons/key'

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
