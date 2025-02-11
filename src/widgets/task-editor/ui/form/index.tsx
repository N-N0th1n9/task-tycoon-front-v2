import { AttachFile } from '@src/features/attach-file'
import Input from '@src/shared/ui/input'
import Textarea from '@src/shared/ui/textarea'

const Form = () => {
  return (
    <form className='flex flex-col gap-4'>
      <Input placeholder='Название' />
      <Input placeholder='Краткое описание' />
      <Textarea placeholder='Полное описание' />
      <AttachFile />
    </form>
  )
}

export default Form
