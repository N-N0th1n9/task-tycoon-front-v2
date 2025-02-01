import BaseAuthFormContainer from '@/shared/components/base-auth-form-container'
import Button from '@/shared/components/button'
import Input from '@/shared/components/input'
import EmailIcon from '@/shared/icons/email'
import KeyIcon from '@/shared/icons/key'

const ConfirmEmailForm = () => {
  return (
    <BaseAuthFormContainer
      title={'Подтверждение почты'}
      btnText={'Подтвердить'}
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
      <div>
        <span className='mt-8 mb-4 block text-center text-xs'>
          Получите код на новую почту и введите его:
        </span>
        <div className='flex gap-4'>
          <Button>Получить</Button>
          <Input
            type='text'
            placeholder='Код с почты'
            icon={<KeyIcon />}
          />
        </div>
      </div>
    </BaseAuthFormContainer>
  )
}

export { ConfirmEmailForm }
