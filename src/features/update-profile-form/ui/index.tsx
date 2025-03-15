'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import CrossIcon from '@public/assets/icons/cross'
import SaveIcon from '@public/assets/icons/save'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Button from '@src/shared/ui/button'
import Input from '@src/shared/ui/input'
import SwitchBar from '@src/shared/ui/switchbar'

const profileSchema = z.object({
  email: z.string().email('Некорректный email'),
  firstName: z.string().nonempty('Обязательное поле'),
  lastName: z.string().nonempty('Обязательное поле'),
  nickname: z.string().nonempty('Обязательное поле'),
  showStats: z.boolean(),
  showResults: z.boolean(),
})

type FormValues = z.infer<typeof profileSchema>

const UpdateProfileDataForm = () => {
  const [profile, setProfile] = useState<FormValues>({
    email: '',
    firstName: '',
    lastName: '',
    nickname: '',
    showStats: false,
    showResults: false,
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: profile,
    resolver: zodResolver(profileSchema),
    mode: 'onChange',
  })

  useEffect(() => {
    reset(profile)
  }, [profile, reset])

  const onSubmit = (data: FormValues) => {
    setProfile(data)
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full'
    >
      <div className='flex flex-col gap-9'>
        <div className='flex gap-4'>
          <div className='flex w-full items-end gap-4'>
            <Input
              placeholder='example@mail.com'
              type='email'
              label='Электронная почта'
              {...register('email')}
              error={errors.email?.message}
            />
            <Button>Изменить</Button>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            <Input
              placeholder='Иван'
              label='Имя'
              type='text'
              {...register('firstName')}
              error={errors.firstName?.message}
            />
            <Input
              placeholder='Иванов'
              label='Фамилия'
              type='text'
              {...register('lastName')}
              error={errors.lastName?.message}
            />
            <Input
              placeholder='Никнейм'
              label='Никнейм'
              type='text'
              {...register('nickname')}
              error={errors.nickname?.message}
            />
            <div className='flex flex-col'>
              <SwitchBar
                label='Показывать статистику другим людям'
                {...register('showStats')}
              />
              <SwitchBar
                label='Показывать данные другим людям'
                {...register('showResults')}
              />
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
