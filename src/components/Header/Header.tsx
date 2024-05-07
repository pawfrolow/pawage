import React from 'react'
import { HeaderTitle, LanguageSelect } from './components'
import * as s from './Header.styled';
import config from 'config/config';

export const Header = () => {
  return (
    <s.Header>
      <HeaderTitle>
        <img src={'/assets/header.png'} alt='Header' height={60} width={60} style={{ marginRight: 8 }} />
        <span>{config.projectName}</span>
      </HeaderTitle>
      <LanguageSelect />
    </s.Header>
  )
}
