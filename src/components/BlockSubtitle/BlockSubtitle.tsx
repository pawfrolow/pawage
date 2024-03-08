import React from 'react'
import * as s from './BlockSubtitle.styled'
import { TChildrenProps } from 'types/common.types'

export const BlockSubtitle: React.FC<TChildrenProps> = ({ children }) => {
  return (
    <s.BlockSubtitleWrapper>{children}</s.BlockSubtitleWrapper>
  )
}
