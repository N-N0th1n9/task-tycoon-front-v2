import Plus from '@/shared/icons/plus'
import Button from '@/shared/ui/button'

const CreateQuestionButton = () => {
  // const handleClick = () => {}

  return (
    <Button
      icon={<Plus />}
      className='w-full'
    >
      Добавить вопрос
    </Button>
  )
}

export { CreateQuestionButton }
