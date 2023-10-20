import React from 'react'
import pkg from '../../../package.json'
import * as s from './Footer.styled'

export const Footer = () => {
  return (
    <s.Footer>
      v{pkg.version}
    </s.Footer>
  )
}
