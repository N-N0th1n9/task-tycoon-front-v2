import SaveIcon from '@/shared/icons/save'
import Button from '@/shared/ui/button'

const CreateTaskBtn = () => {
  return (
    <Button
      color='accent'
      icon={<SaveIcon />}
    >
      Сохранить
    </Button>
  )
}

export { CreateTaskBtn }
