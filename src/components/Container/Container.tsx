import React from "react"
import styles from "./Container.module.scss"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={styles.container + ` ${className || ""}`}>{children}</div>
}
