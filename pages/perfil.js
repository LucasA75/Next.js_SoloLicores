import React from 'react'
import CategoriaManager from '../components/categoria/CategoriaManager'
import LayoutPerfil from '../components/layoutPerfil'
import SeccionesPerfil from '../components/perfil/SeccionesPerfil'

const Perfil = () => {
  return (
    <>
      <LayoutPerfil>
      <SeccionesPerfil/>
      <CategoriaManager />
      </LayoutPerfil>
    </>
  )
}

export default Perfil