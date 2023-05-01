import React, { useEffect, useState } from 'react'

const CategoriaListado = ({categorias, setCategorias}) => {

   

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const baseUrl = "http://localhost:3000"
                const url = baseUrl + "/categoria"
                const respuesta = await fetch(url);
                if (!respuesta.ok) throw Error("Problemas al recuperar las categorias!")
                const cat = await respuesta.json();
                setCategorias(cat) //Esto es muy importante setea a categorais
            } catch (error) {
                console.error(error)
            }
    
        }
        cargarDatos();
    },[categorias, setCategorias])

    const eliminar = async (categoria) => {
        try {
            //Averiguar Configuracion.getBaseUrl()
            const baseUrl = "http://localhost:3000"
            const url = baseUrl + "/categoria?id="+ categoria.id
            const respuesta = await fetch(url, {
                method: 'DELETE'
               /*  headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoria) */
            })
            if(!respuesta.ok){
                throw new Error("Problemas al eliminar la categoria!");
                const resultado = await respuesta.json();
                console.log("Categoria borrada de manera exitosa")
            }
            //Actualizar el listado
            /* cargarDatos(); */
        
        }
        catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <h2>Listado de Categorias</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categorias.map(categoria => (
                            <tr key={categoria.id}>
                                <td>{categoria.id}</td>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.descripcion}</td>
                                <td>
                                    <button>Editar</button>
                                    <button onClick={() => eliminar(categoria)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default CategoriaListado