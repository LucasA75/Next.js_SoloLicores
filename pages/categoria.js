import React, { useState } from 'react'
import Layout from '../components/layout'
import CategoriaManager from '../components/categoria/CategoriaManager'
import { checkAuth } from '../components/checkAuth'
import VitrinaBox from '../components/vitrina/vitrinaBox'
import Consejos from '../components/consejos/consejos'


const PageCategoria = () => {
    const licores = [
        {
            "id": "1",
            'licor': 'Vodka',
        },
        {
            "id": "2",
            'licor': 'Cerveza',
        },
        {
            "id": "3",
            'licor': 'Vino',
        },
        {
            "id": "4",
            'licor': 'Espumante',
        },
    ]


    /* checkAuth() */
    const [nombre, setNombre] = useState("Lucas")
    return (
        <>
            <Layout>
                <main className='container_bg'>
                <h1 className='titulo' style={{ textAlign: 'center', padding:'10px 0'}}>Bienvenido {nombre}</h1>
                  <CategoriaManager/>
                <VitrinaBox licor={licores} />
                <br></br>
                <Consejos/>
                </main>
            </Layout>
        </>
    )
}

export default PageCategoria