import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export const enum ButtonVariants {
  CLEAR = 'clear',
  PRIMARY = 'primary'
}

type ButtonProps = {
  className?: string
  variant?: ButtonVariants
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = ButtonVariants.PRIMARY,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles[variant]]: true
  }

  return (
    <button
      className={classNames(styles.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
