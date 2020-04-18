import {
    COMENZAR_DESCARGA_PERSONAS,
    COMENZAR_DESCARGA_PERSONAS_EXITO,
    COMENZAR_DESCARGA_PERSONAS_ERROR,
    OBTENER_PERSONA_ELIMINAR,
    PERSONA_ELIMINADO_EXITO,
    PERSONA_ELIMINADO_ERROR
} from '../types'
import clienteAxios from '../config/axios'

//obtener estado de personas
export function obtenerPersonasAction() {
    return (dispatch) => {
        dispatch(obtenerPersonasComienzo())
        // consultar la api
        clienteAxios.get('/personas')
            .then(respuesta => {
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

// Eliminar Persona
export function borrarPersonaAction(id) {
    return (dispatch) => {
        dispatch(obtenerPersonaElmimnar())
        clienteAxios.delete(`personas/${id}`)
            .then(respuesta => {
                dispatch(eliminarPersonaExito(id))
            })
            .catch(error => {
                dispatch(eliminarPersonaError())
            })
    }
}

export const obtenerPersonaElmimnar = () => ({
    type: OBTENER_PERSONA_ELIMINAR
})

export const eliminarPersonaExito = id => ({
    type: PERSONA_ELIMINADO_EXITO
})

export const eliminarPersonaError = () => ({
    type: PERSONA_ELIMINADO_ERROR
})