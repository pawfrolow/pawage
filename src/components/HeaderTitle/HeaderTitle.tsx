import React from 'react'
import * as s from './HeaderTitle.styled'
import { animation } from '@/utils'
import { TChildrenProps } from '@/types/common.types'

export const HeaderTitle: React.FC<TChildrenProps> = ({ children }) => {
  return (
    <s.HeaderTitle
      {...animation.slideFromLeft()}
    >{children}</s.HeaderTitle>
  )
}
