import { useState } from "react";
import CategoriaForm from "./form";
import CategoriaListado from "./listado";

export default function CategoriaManager() {
    const [categorias, setCategorias] = useState([]);

    return (
        <div>
            <CategoriaForm 
                categorias={categorias}
                setCategorias={setCategorias}
            /> 
            <hr /><br></br>
            <CategoriaListado
                categorias={categorias}
                setCategorias={setCategorias}
            />

        </div>
    );
}