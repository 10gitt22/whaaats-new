import { FC, InputHTMLAttributes, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'>

interface InputProps extends HTMLInputProps {
  id: string
  label: string
  className?: string
  value?: string
  type?: 'text' | 'email' | 'number' | 'password' | 'number'
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo(({
  id,
  label,
  className,
  value,
  onChange,
  type = 'text',
  ...props
}) => {
  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }, [onChange])

  return (
    <div className={classNames(styles.Input, {}, [className])}>
      <input
        id={id}
        type={type}
        value={value}
        className={styles.inputField}
        onChange={onChangeHandler}
        placeholder=" "
        autoComplete="off"
        {...props}
      />
      <label className={styles.inputLabel}>{label}</label>
    </div>
  )
})
