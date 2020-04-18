import { 
    COMENZAR_DESCARGA_COMPRAS, 
    COMENZAR_DESCARGA_COMPRAS_EXITOSA,
    COMENZAR_DESCARGA_COMPRAS_ERROR 
} from "../types/comprasTypes";
import clienteAxios from "../config/axios";

// obtener estados de compras
export function obtenerComprasAction() {
    return (dispatch) => {
        dispatch(obtenerComprasComienzo)
        clienteAxios.get('/compras')
            .then(async respuesta  => {
                const {data: personas} = await clienteAxios.get('/personas')
                const { data: productos} = await clienteAxios.get('/productos')
                const compras = respuesta.data
                compras.map(compra => {
                    // console.log(compra)
                    let pers_nombre = personas.filter(persona => persona.id === compra.persona)[0].nombre
                    let prod_nombre = productos.filter(producto => producto.id === compra.producto)[0].nombre
                    compra.persona_nombre = pers_nombre
                    compra.producto_nombre = prod_nombre
                })
                dispatch(descargaComprasExito(respuesta.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(descargaComprasError())
            })
    }
}

export const obtenerComprasComienzo = () => ({
    type: COMENZAR_DESCARGA_COMPRAS
})

export const descargaComprasExito = compras => ({
    type: COMENZAR_DESCARGA_COMPRAS_EXITOSA,
    payload: compras
})

export const descargaComprasError = () => ({
    type: COMENZAR_DESCARGA_COMPRAS_ERROR
})

