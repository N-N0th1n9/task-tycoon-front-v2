import Button from '@src/shared/ui/button'

import SaveIcon from '../../../../public/assets/icons/save'

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
