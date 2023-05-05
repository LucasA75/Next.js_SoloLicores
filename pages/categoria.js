import React, { useEffect, useState } from 'react'
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
            "img": "https://elbrindis.cl/wp-content/uploads/2022/06/Vodka-Absolut-1-Litro-460x460.jpg"
        },
        {
            "id": "2",
            'licor': 'Cerveza',
            "img": "https://elbrindis.cl/wp-content/uploads/2022/06/Vodka-Absolut-1-Litro-460x460.jpg"
        },
        {
            "id": "3",
            'licor': 'Vino',
            "img": "https://elbrindis.cl/wp-content/uploads/2022/06/Vodka-Absolut-1-Litro-460x460.jpg"
        },
        {
            "id": "4",
            'licor': 'Espumante',
            "img": "https://elbrindis.cl/wp-content/uploads/2022/06/Vodka-Absolut-1-Litro-460x460.jpg"
        },
    ]

    const consejos = [
        {
            "id": "1",
            'texto': 'Evite personas o lugares que lo hagan beber cuando no quiere o lo inviten a beber más de lo que debería.',
        },
        {
            "id": "2",
            'texto': 'Planee otras actividades que no impliquen beber para días que tenga ganas de tomar.',
        },
        {
            "id": "3",
            'texto': 'Coma algo antes de beber.',
        },
        {
            "id": "4",
            'texto': 'Utilizar cualquier celebración o acontecimiento para consumir delante de nuestros hijos.',
        },
    ]

    /* Este codigo hay que descomentar para hacer la build*/
 /*    checkAuth() */


    const [nombre, setNombre] = useState("Usuario")


    /* Cambiar esto por una llamada de la api del nombre del usuario O llamar al localStorage */
    return (
        <>
            <Layout>
                <main className='container_bg'>
                    <h1 className='titulo' style={{ textAlign: 'center', padding: '10px 0', color:'white' }}>Bienvenido {nombre}</h1>
                    <VitrinaBox licor={licores} />
                    <br></br>
                    <Consejos cons={consejos} />
                </main>
            </Layout>
        </>
    )
}

export default PageCategoria