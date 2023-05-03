import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#f5f5f5',
      color: '#000',
      fontFamily: 'Roboto',
      fontSize: '1.5rem',
      fontWeight: '500',
      margin: '0 auto',
      padding: '0.5rem 1rem',
      transition: 'all .2s ease-in-out',
      display:'flex',
      justifyContent:'space-between',
      overflow:'hidden'
    }}>
        <h2>SoloLicores</h2>
        <ul style={{
          display:'flex',
          gap:'30px'
        }}>
          <li>
            <label>Buscar:</label>
            <input></input>
            </li>
          <li><Link href="/perfil">Perfil</Link></li>
        </ul>
    </header>
  )
}

export default Header