import Button from '@/shared/components/button'
import Input from '@/shared/components/input'
import EmailIcon from '@/shared/icons/email'
import KeyIcon from '@/shared/icons/key'

const SignInForm = () => {
  return (
    <section className='flex flex-col items-center gap-15'>
      <h1 className='text-2xl font-semibold'>Вход</h1>
      <form className='flex w-full max-w-200 flex-col gap-9'>
        <div className='[&>*:not(:last-child)]:mb-4'>
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
        </div>
        <Button>Войти</Button>
      </form>
    </section>
  )
}

export { SignInForm }
