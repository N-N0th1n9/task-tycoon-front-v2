import InfoBar, { IProps as IInfoBarProps } from '@/shared/components/infobar'
import DownloadIcon from '@/shared/icons/download'
import TrashIcon from '@/shared/icons/trash'
import { ButtonHTMLAttributes, FC } from 'react'

import Button from '../button'

interface IProps extends Pick<IInfoBarProps, 'nameTitle'> {
  downloadBtnProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>
  deleteBtnProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>
}

const FileBar: FC<IProps> = ({ nameTitle, downloadBtnProps, deleteBtnProps }) => {
  return (
    <InfoBar
      nameTitle={nameTitle}
      item={
        <div className='flex'>
          <Button
            icon={<DownloadIcon />}
            border='inline'
            className='h-23 w-23'
            {...downloadBtnProps}
          ></Button>
          <Button
            icon={<TrashIcon />}
            color='danger'
            border='inline'
            className='h-23 w-23'
            {...deleteBtnProps}
          ></Button>
        </div>
      }
    />
  )
}

export default FileBar
