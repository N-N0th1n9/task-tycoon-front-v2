import SaveIcon from '@public/assets/icons/save'

import Button from '@src/shared/ui/button'

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
