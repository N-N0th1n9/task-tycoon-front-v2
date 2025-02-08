import cln from '@/shared/helpers/classname'
import { FC, HTMLAttributes } from 'react'

import styles from './style.module.css'

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  isVisible: boolean
}

const BurgerMenu: FC<IProps> = ({ isVisible, ...props }) => {
  return (
    <button
      className={cln(styles['nav-toggle'], { [styles.opened]: isVisible })}
      aria-label='Toggle navigation'
      {...props}
    >
      <span className={styles['bar-top']}></span>
      <span className={styles['bar-mid']}></span>
      <span className={styles['bar-bot']}></span>
    </button>
  )
}

export default BurgerMenu
