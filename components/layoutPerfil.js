import React, { Children } from 'react'
import SeccionesPerfil from './perfil/SeccionesPerfil'

const LayoutPerfil = (props) => {
  return (
    <div className='container__perfil'>
    {props.children}
    </div>
  )
}

export default LayoutPerfil