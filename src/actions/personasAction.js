import {
    COMENZAR_DESCARGA_PERSONAS,
    COMENZAR_DESCARGA_PERSONAS_EXITO,
    COMENZAR_DESCARGA_PERSONAS_ERROR
} from '../types'
import clienteAxios from '../config/axios'

//obtener estado de personas
export function obtenerPersonasAction() {
    return (dispatch) => {
        dispatch(obtenerPersonasComienzo())
        // consultar la api
        clienteAxios.get('/personas')
            .then(respuesta => {
                console.log(respuesta.data)
                dispatch(descargaPersonasExito(respuesta.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(descargaPersonasError())
            })
    }
}

export const obtenerPersonasComienzo = () => ({
    type: COMENZAR_DESCARGA_PERSONAS
})

export const descargaPersonasExito = personas => ({
    type: COMENZAR_DESCARGA_PERSONAS_EXITO,
    payload: personas
})

export const descargaPersonasError = () => ({
    type: COMENZAR_DESCARGA_PERSONAS_ERROR
})