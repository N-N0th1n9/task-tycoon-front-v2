import { FC } from 'react'

import InfoBar, { IProps as IInfoBarProps } from '@src/shared/ui/infobar'
import Switch, { IProps as ISwitchProps } from '@src/shared/ui/switch'

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
