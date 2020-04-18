import React from 'react';
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux'
import { borrarPersonaAction } from '../actions/personasAction';

const Persona = ({persona}) => {
    // dispatch 
    const dispatch = useDispatch()
    const confirmarElimnarPersona = id => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Persona eliminada no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Eliminado',
                    'La persona se ha eliminado correctamente',
                    'success'
                )
                // Llamar a la accion
                console.log(id)
                dispatch(borrarPersonaAction(id))
            }
        })
    }
    return (
        <tr >
            <td>{persona.nombre}</td>
            <td>{persona.edad}</td>
            <td className="acciones">
                <button className="btn btn-danger" onClick={() => confirmarElimnarPersona(persona.id)}>Eliminar</button>
                <button className="btn btn-primary ml-2">Ver compras</button>
            </td>
        </tr>
    )
}
export default Persona;