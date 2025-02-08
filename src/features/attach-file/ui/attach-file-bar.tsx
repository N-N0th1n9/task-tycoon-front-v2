import DownloadIcon from '@/shared/icons/download'
import TrashIcon from '@/shared/icons/trash'
import Button from '@/shared/ui/button'
import InfoBar, { IProps as IInfoBarProps } from '@/shared/ui/infobar'
import { ButtonHTMLAttributes, FC } from 'react'

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
