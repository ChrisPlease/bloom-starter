import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'presentation/logos/logo'
import SubHeader from './sub-header'

import 'styles/components/header.scss'

const Header = props => {
  return (
    <header className='Header'>
      <Link to='/'>
        <Logo full />
      </Link>
      <SubHeader openModal={props.openModal} user={props.user} />
    </header>
  )
}

export default Header
