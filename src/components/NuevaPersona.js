import React, { useState } from 'react'
import { crearNueva } from '../actions/'
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionAction'
import { useDispatch, useSelector } from 'react-redux'
import { crearNuevaPersonaAction } from '../actions/personasAction'


const NuevoProducto = ({history}) => {
    //state
    const [ nombre, guardarNombre ] = useState('')
    const [ edad, guardarEdad ] = useState('');

    // crear nuevo producto
    const dispatch = useDispatch()
    const agregarPersona = (producto) => dispatch(crearNuevaPersonaAction(producto))
    const validarFormulario = () => dispatch( validarFormularioAction())
    const exitoValidacion = () => dispatch( validacionExito());
    const errorValidacion = () => dispatch( validacionError());

    // Obtener los datos del state
    const error = useSelector((state) => state.error.error)
    // Agregar nuevo producto
    const submitNuevoPersona = e => {
        e.preventDefault();

        validarFormulario();
        // validar el formulario
        if (nombre.trim() === '' || edad.trim === '') {
            errorValidacion();
            return;
        }

        exitoValidacion()
        // crear el nuevo producto
        agregarPersona({
            nombre,
            edad
        })
        // reidreccionar
        history.push('/personas')
    }

    return (

        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={submitNuevoPersona}>
                            <div className="form-group">
                                <label>Nombre Persona</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Persona"
                                    value={nombre}
                                    onChange={ e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Edad Persona</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Edad Persona" 
                                    value={edad}
                                    onChange={ e => guardarEdad(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        { error ? <div className="font-weight-bold alert aler-danger">Los campos son obligatorios</div>: null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto;