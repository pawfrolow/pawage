import React from 'react'
import * as s from './Block.styled'
import { TChildrenProps } from 'types/common.types'

export const Block: React.FC<TChildrenProps> = ({ children, style }) => {
  return (
    <s.BlockWrapper style={style}>{children}</s.BlockWrapper>
  )
}
