import SwitchBar from '@src/shared/ui/switchbar'
import Textarea from '@src/shared/ui/textarea'

const AnswerDetailed = () => {
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
