import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
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
          display:'grid',
          gridTemplateColumns:"1fr 1fr"
        }}>
          <li style={{
          display:'grid',
          gridTemplateColumns:"100px 1fr",
          alignItems:"center"}}>
            <label>Buscar:</label>
            <input></input>
            </li>
          <li style={{
          display:'grid',
          alignItems:"center",
          textAlign:"left",
          marginLeft:"30px",
          gridTemplateColumns:"80px 100px"
        }}>
          
        <Link style={{textDecoration:"none" , color:"black"}} href="/perfil">Perfil</Link>
        <Image src="/person-c.svg" alt="Mi imagen" width={50} height={50} />
        </li>
        </ul>
    </header>
  )
}

export default Header