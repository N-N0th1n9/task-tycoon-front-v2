import CrossIcon from '@/shared/icons/cross'
import SaveIcon from '@/shared/icons/save'
import Button from '@/shared/ui/button'
import Input from '@/shared/ui/input'
import SwitchBar from '@/shared/ui/switchbar'

const UpdateProfileDataForm = () => {
  // const submitForm = () => {}

  return (
    <div className='flex w-full flex-col gap-9'>
      <div className='flex w-full gap-4'>
        <div className='flex w-full items-end gap-4'>
          <Input
            placeholder='example@mail.com'
            className='w-full'
            type='email'
            label='Электронная почта'
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
          />
          <Input
            placeholder='Иванов'
            className='w-full'
            label='Фамилия'
          />
          <Input
            placeholder='Никнейм'
            className='w-full'
            label='Никнейм'
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
              icon={<SaveIcon />}
              disabled
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { UpdateProfileDataForm }
