import { ChangeEvent, FC, InputHTMLAttributes, memo, useCallback, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'>

interface InputProps extends HTMLInputProps {
  id: string
  label: string
  name?: string
  className?: string
  value?: string | number
  type?: 'text' | 'email' | 'number' | 'password' | 'number'
  onChange?: (value: string) => void
  onChangeFormik?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = memo(({
  id,
  label,
  name,
  className,
  value,
  onChange,
  onChangeFormik,
  type = 'text',
  ...props
}) => {
  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }, [onChange])

  const onChangeFunction = useMemo(() => {
    return onChange ? onChangeHandler : onChangeFormik
  }, [onChangeHandler, onChangeFormik])

  return (
    <div className={classNames(styles.Input, {}, [className])}>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        className={styles.inputField}
        onChange={onChangeFunction}
        placeholder=" "
        autoComplete="off"
        {...props}
      />
      <label className={styles.inputLabel}>{label}</label>
    </div>
  )
})
