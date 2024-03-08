import React from 'react'
import * as s from './BlockTitle.styled'
import { TChildrenProps } from 'types/common.types'

export const BlockTitle: React.FC<TChildrenProps> = ({ children }) => {
  return (
    <s.BlockTitleWrapper>{children}</s.BlockTitleWrapper>
  )
}
