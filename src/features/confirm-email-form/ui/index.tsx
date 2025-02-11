import BaseAuthFormContainer from '@src/shared/ui/base-auth-form-container'
import Button from '@src/shared/ui/button'
import Input from '@src/shared/ui/input'

import EmailIcon from '../../../../public/assets/icons/email'
import KeyIcon from '../../../../public/assets/icons/key'

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
