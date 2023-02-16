import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export const enum ButtonVariants {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

type ButtonProps = {
  className?: string
  variant?: ButtonVariants
  disabled?: boolean
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonProps> = memo(({
  children,
  className,
  variant = ButtonVariants.PRIMARY,
  disabled,
  ...otherProps
}) => {
  const mods: Mods = {
    [styles[variant]]: true,
    [styles.disabled]: disabled
  }

  return (
    <button
      className={classNames(styles.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})
