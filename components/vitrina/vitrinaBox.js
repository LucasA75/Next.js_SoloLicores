import React, { useState } from 'react'
import styles from "./vitrina.module.css"

const VitrinaBox = ({ licor }) => {

    const [articulos, setArticulos] = useState(licor)

    return (
        <>
            <h3 style={{ textAlign: 'center', fontSize: '30px' , margin:'20px 0'}}>Categorias Destacadas</h3>
            <div className={styles.categorias} >
                {

                    articulos.map(articulo => (
                        <div key={articulo.id} className={styles.cajita}>
                            {console.log(articulo)}
                            <h3>{articulo.licor}</h3>
                            <div>Imagen no encontrada...</div>
                            <p>{articulo.precio}</p>
                            <button className={styles.btn}>Ver más</button>
                        </div>
                    ))
                }


            </div>

        </>
    )
}

export default VitrinaBox