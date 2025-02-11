import LinkIcon from '@public/assets/icons/link'
import Plus from '@public/assets/icons/plus'

import Button from '@src/shared/ui/button'
import Input from '@src/shared/ui/input'

const AnswerMatching = () => {
  return (
    <div className='flex flex-col gap-6'>
      <AnswerMatchingItem />
      <AnswerMatchingItem />
      <Button icon={<Plus />}>Добавить сопоставление</Button>
    </div>
  )
}

export default AnswerMatching

const AnswerMatchingItem = () => {
  return (
    <div>
      <span className='text-ttDarkGray text-sm'>Сопоставление 1</span>
      <div className='flex items-center gap-4'>
        <Input placeholder='Вариант 1' />
        <LinkIcon className='w-17' />
        <Input placeholder='Ответ 1' />
      </div>
    </div>
  )
}
