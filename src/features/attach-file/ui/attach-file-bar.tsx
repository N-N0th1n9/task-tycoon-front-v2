import { ButtonHTMLAttributes, FC } from 'react'

import Button from '@src/shared/ui/button'
import InfoBar, { IProps as IInfoBarProps } from '@src/shared/ui/infobar'

import DownloadIcon from '../../../../public/assets/icons/download'
import TrashIcon from '../../../../public/assets/icons/trash'

interface IProps extends Pick<IInfoBarProps, 'label'> {
  downloadBtnProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>
  deleteBtnProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>
}

const AttachFileBar: FC<IProps> = ({ label, downloadBtnProps, deleteBtnProps }) => {
  return (
    <InfoBar
      label={label}
      item={
        <div className='flex'>
          <Button
            icon={<DownloadIcon />}
            border='inline'
            size='xs'
            {...downloadBtnProps}
          ></Button>
          <Button
            icon={<TrashIcon />}
            color='danger'
            border='inline'
            size='xs'
            {...deleteBtnProps}
          ></Button>
        </div>
      }
    />
  )
}

export default AttachFileBar
