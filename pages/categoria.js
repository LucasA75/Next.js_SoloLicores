import React from 'react'
import Layout from '../components/layout'
import CategoriaManager from '../components/categoria/CategoriaManager'
import { checkAuth } from '../components/checkAuth'

const PageCategoria = () => {
    /* checkAuth() */
    return (
        <>  
        <Layout>
        <h1 className='titulo'>Categoria</h1>
            <CategoriaManager/>
        </Layout>
        </>
    )
}

export default PageCategoria