import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import styles from './Modal.module.scss'

type ModalProps = {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  lazy,
  onClose
}) => {
  const { theme } = useTheme()
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') handleClose()
  }, [handleClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className, `app_theme_${theme}`])}>
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
