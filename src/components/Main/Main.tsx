import React, { FC } from 'react'
import * as s from './Main.styled'

type TMainProps = {
  children: React.ReactNode
}

export const Main: FC<TMainProps> = ({ children, ...props }) => {
  return (
    <s.Main {...props}>{children}</s.Main>
  )
}
