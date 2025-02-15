'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@src/shared/ui/button'
import Input from '@src/shared/ui/input'
import SwitchBar from '@src/shared/ui/switchbar'

import CrossIcon from '../../../../public/assets/icons/cross'
import SaveIcon from '../../../../public/assets/icons/save'
import { useProfileStore } from '../model/stores/profile-info-store'

type FormValues = {
  email: string
  firstName: string
  lastName: string
  nickname: string
}

const UpdateProfileDataForm = () => {
  const { email, firstName, lastName, nickname, setProfile } = useProfileStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<FormValues>({
    defaultValues: { email, firstName, lastName, nickname },
  })

  useEffect(() => {
    setValue('email', email)
    setValue('firstName', firstName)
    setValue('lastName', lastName)
    setValue('nickname', nickname)
  }, [email, firstName, lastName, nickname, setValue])

  const onSubmit = (data: FormValues) => {
    setProfile(data)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-full flex-col gap-9'>
        <div className='flex w-full gap-4'>
          <div className='flex w-full items-end gap-4'>
            <Input
              placeholder='example@mail.com'
              className='w-full'
              type='email'
              label='Электронная почта'
              {...register('email', { required: 'Укажите ваш email' })}
            />
            <Button>Изменить</Button>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex w-full flex-col gap-4'>
            <Input
              placeholder='Иван'
              className='w-full'
              label='Имя'
              type='firstName'
              {...register('firstName', { required: 'Укажите ваше имя' })}
            />
            <Input
              placeholder='Иванов'
              className='w-full'
              label='Фамилия'
              type='lastName'
              {...register('lastName', { required: 'Укажите ваше имя' })}
            />
            <Input
              placeholder='Никнейм'
              className='w-full'
              label='Никнейм'
              type='nickname'
              {...register('nickname', { required: 'Укажите ваше имя' })}
            />
            <div className='flex w-full flex-col'>
              <SwitchBar label='Показываться статистику другим людям' />
              <SwitchBar label='Показывать данные другим людям' />
            </div>
            <div className='flex justify-end gap-4'>
              <Button
                icon={<CrossIcon />}
                disabled
              >
                Отменить
              </Button>
              <Button
                type='submit'
                disabled={!isValid}
                icon={<SaveIcon />}
              >
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export { UpdateProfileDataForm }
