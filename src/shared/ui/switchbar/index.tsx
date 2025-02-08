import InfoBar, { IProps as IInfoBarProps } from '@/shared/ui/infobar'
import Switch, { IProps as ISwitchProps } from '@/shared/ui/switch'
import { FC } from 'react'

interface IProps extends ISwitchProps, Pick<IInfoBarProps, 'label'> {}

const SwitchBar: FC<IProps> = ({ label, ...props }) => {
  return (
    <InfoBar
      as='label'
      className='cursor-pointer select-none'
      label={label}
      item={<Switch {...props} />}
    />
  )
}

export default SwitchBar
