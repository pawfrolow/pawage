import React from 'react'
import { HeaderTitle, LanguageSelect } from '..'
import * as s from './Header.styled';
import config from '@/config/config';
import Image from 'next/image';

export const Header = () => {
  return (
    <s.Header>
      <HeaderTitle>
        <Image src={'/assets/header.png'} alt='Header image' height={60} width={60} style={{ marginRight: 8 }} />
        <span>{config.projectName}</span>
      </HeaderTitle>
      <LanguageSelect />
    </s.Header>
  )
}
