import React, { useState } from 'react'
import styles from "./consejos.module.css"
const Consejos = ({cons}) => {
    const [consejos , setConsejo] = useState(cons)

    return (
        <>
            <h3 style={{ textAlign: 'center', fontSize: '30px',color:'white' }}>Consejos para tomar</h3>
            <br></br>
            <div className={styles.categorias}>
                {   
                    consejos.map(consejo => (
                        <div key={consejo.id} className={styles.cajita}>
                            {console.log(consejo)}
                            <div className={styles.imagen}>Imagen no encontrada...</div>
                            <h3 className={styles.texto}>{consejo.texto}</h3>
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default Consejos