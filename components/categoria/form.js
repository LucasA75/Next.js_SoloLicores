import React, { useState } from 'react'

const Categoriaform = ({categorias, setCategorias}) => {

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const procesarFormulario = async(eventoSubmit) =>{
        try {
            eventoSubmit.preventDefault();
            const categoria = {
                nombre,
                descripcion
            };
    
            const baseUrl = "http://localhost:3000"
            const url = baseUrl + "/categoria";
    
            const respuesta = await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(categoria)
            });
    
            if(!respuesta.ok){
                throw new Error("No se pudo guardar la categoria")
            }
            const categoriaGuardada = await respuesta.json();
            console.dir(categoriaGuardada)

             // actualiza la variable de estado 
            // que contiene las categoría que muestra la tabla 
            setCategorias(
                [...categorias, categoriaGuardada]
            );
        } catch (error) {
            console.error(error); /* Mandarle un mensaje al usuario con los errores */
        }
    }

  return (
    <>
    <form action='form' method='post'onSubmit={procesarFormulario} >
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>

        <label>Descripcion</label>
        <textarea value={descripcion}  onChange={(e)=> setDescripcion(e.target.value)}></textarea>

        <button type='submit'>Guardar</button>
    </form>

    Nombre : {nombre} | Descripcion : {descripcion}
    </>
  )
}

export default Categoriaform