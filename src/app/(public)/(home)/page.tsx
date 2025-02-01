import Textarea from '@/shared/components/textarea'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-20'>
      <h1>Home Page</h1>
      <Textarea
        label='Textarea'
        error='Обязательное поле'
      />
    </div>
  )
}

export default HomePage
