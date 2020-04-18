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
            .then(respuesta => {
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

