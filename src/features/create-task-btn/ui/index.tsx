import SaveIcon from '@public/assets/icons/save'

import Button from '@src/shared/ui/button'

const CreateTaskBtn = ({ disabled }: { disabled?: boolean }) => {
  return (
    <Button
      color='accent'
      icon={<SaveIcon />}
      type={'submit'}
      disabled={disabled}
    >
      Сохранить
    </Button>
  )
}

export { CreateTaskBtn }
