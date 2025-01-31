import Input from '@/shared/components/input'
import EditIcon from '@/shared/icons/edit'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-20'>
      <h1>Home Page</h1>
      <Input
        placeholder='Плейсхолдер'
        label='Get it'
        icon={<EditIcon />}
        error='Обязательно поле'
      />
    </div>
  )
}

export default HomePage
