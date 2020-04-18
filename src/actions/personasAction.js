import {
    COMENZAR_DESCARGA_PERSONAS,
    COMENZAR_DESCARGA_PERSONAS_EXITO,
    COMENZAR_DESCARGA_PERSONAS_ERROR,
    OBTENER_PERSONA_ELIMINAR,
    PERSONA_ELIMINADO_EXITO,
    PERSONA_ELIMINADO_ERROR
} from '../types'
import clienteAxios from '../config/axios'
import { AGREGAR_PERSONA, AGREGAR_PERSONA_EXITO, AGREGAR_PERSONA_ERROR } from '../types/personaType';

// crear nueva persona
export function crearNuevaPersonaAction(persona) {
    return (dispatch) => {
        dispatch(nuevaPersona());
        clienteAxios.post('/personas', persona)
            .then(respuesta => {
                dispatch( agregarPersonaExito(persona))
            })
            .catch(error => {
                dispatch( agregarPersonaError())
            })
    }
}

export const nuevaPersona = () => ({
    type: AGREGAR_PERSONA
})

export const agregarPersonaExito = persona => ({
    type: AGREGAR_PERSONA_EXITO,
    payload: persona
})

export const agregarPersonaError = () => ({
    type: AGREGAR_PERSONA_ERROR
})
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
    type: PERSONA_ELIMINADO_EXITO,
    payload: id
})

export const eliminarPersonaError = () => ({
    type: PERSONA_ELIMINADO_ERROR
})