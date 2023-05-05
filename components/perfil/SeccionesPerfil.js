import React from 'react'

const SeccionesPerfil = () => {
  return (
    <aside style={{display:"grid",justifySelf:"center"}}>
        <ul >
        <li style={{marginTop:"40px"}}><a style={{color:"white",textDecoration:"none"}} href='./categoria'> Volver a home</a></li>
            <li  style={{margin:"40px 0"}}>Mi Cuenta</li>
            <li style={{marginBottom:"40px"}}>Configuracion</li>
            <li style={{marginBottom:"40px"}}>Ventas</li>
        </ul>
    </aside>
  )
}

export default SeccionesPerfil