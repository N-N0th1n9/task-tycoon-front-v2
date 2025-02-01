import Button from '@/shared/components/button'
import Input from '@/shared/components/input'
import EmailIcon from '@/shared/icons/email'
import KeyIcon from '@/shared/icons/key'

const SignUpForm = () => {
  return (
    <section className='flex flex-col items-center gap-15'>
      <h1 className='text-2xl font-semibold'>Регистрация</h1>
      <form className='flex w-full max-w-200 flex-col gap-9'>
        <div className='[&>*:not(:last-child)]:mb-4'>
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
        </div>
        <Button>Войти</Button>
      </form>
    </section>
  )
}

export { SignUpForm }
