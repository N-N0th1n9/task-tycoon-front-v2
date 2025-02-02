import InfoBar, { IProps as IInfoBarProps } from '@/shared/components/infobar'
import Switch, { IProps as ISwitchProps } from '@/shared/components/switch'
import { FC } from 'react'

interface IProps extends ISwitchProps, Pick<IInfoBarProps, 'nameTitle'> {}

const SwitchBar: FC<IProps> = ({ nameTitle, ...props }) => {
  return (
    <InfoBar
      as='label'
      className='cursor-pointer select-none'
      nameTitle={nameTitle}
      item={<Switch {...props} />}
    />
  )
}

export default SwitchBar
