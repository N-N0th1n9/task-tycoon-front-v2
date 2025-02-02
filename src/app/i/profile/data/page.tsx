import Button from '@/shared/components/button'
import Input from '@/shared/components/input'
import Labeled from '@/shared/components/label-wrapper'
import SwitchBar from '@/shared/components/switchbar'
import CrossIcon from '@/shared/icons/cross'
import SaveIcon from '@/shared/icons/save'

const ProfileDataPage = () => {
  return (
    <div className='flex w-full flex-col gap-9'>
      <div className='flex w-full gap-4'>
        <Labeled label='Электронная почта'>
          <div className='flex gap-4'>
            <Input
              placeholder='example@mail.com'
              className='w-full'
              type='email'
            />
            <Button>Изменить</Button>
          </div>
        </Labeled>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex w-full flex-col gap-4'>
          <Labeled label='Имя'>
            <Input
              placeholder='Иван'
              className='w-full'
            />
          </Labeled>
          <Labeled label='Фамилия'>
            <Input
              placeholder='Иванов'
              className='w-full'
            />
          </Labeled>
          <Labeled label='Никнейм'>
            <Input
              placeholder='Никнейм'
              className='w-full'
            />
          </Labeled>
          <div className='flex w-full flex-col'>
            <SwitchBar nameTitle='Показываться статистику другим людям' />
            <SwitchBar nameTitle='Показывать данные другим людям' />
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

export default ProfileDataPage
