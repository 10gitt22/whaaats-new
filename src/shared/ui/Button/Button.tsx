import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

type ButtonProps = {
  className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <button
      className={classNames(styles.Button, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
