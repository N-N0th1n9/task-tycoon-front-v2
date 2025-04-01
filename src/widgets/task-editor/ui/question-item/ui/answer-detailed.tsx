import { useFormContext } from 'react-hook-form'

import SwitchBar from '@src/shared/ui/switchbar'
import Textarea from '@src/shared/ui/textarea'

const AnswerDetailed = () => {
  const { register } = useFormContext()

  return (
    <div>
      <Textarea
        label='Ответ'
        initialHeight={30}
      />
      <SwitchBar label='Проверять автоматически' />
    </div>
  )
}

export default AnswerDetailed
