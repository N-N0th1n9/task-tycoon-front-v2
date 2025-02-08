import AttachFileBar from './attach-file-bar'
import AttachFileButton from './attach-file-btn'

// interface IProps extends Pick<IInfoBarProps, 'label'> {
//   downloadBtnProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>
//   deleteBtnProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>
// }

const AttachFile = () => {
  const file = false

  return file ? <AttachFileBar label='НазваниеФайла.рсшр' /> : <AttachFileButton />
}

export { AttachFile }
