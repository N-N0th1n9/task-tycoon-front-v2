import Plus from '@public/assets/icons/plus'
import { RefObject } from 'react'

import Button from '@src/shared/ui/button'

const AttachFileButton = ({
  fileInputRef,
}: {
  fileInputRef: RefObject<HTMLInputElement | null>
}) => {
  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <Button
        icon={<Plus />}
        onClick={handleClick}
      >
        Прикрепить файл
      </Button>
    </>
  )
}

export default AttachFileButton
