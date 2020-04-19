import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerPersonasAction } from '../actions/personasAction';

const NuevaCompra = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarPersonas = () => dispatch(obtenerPersonasAction())
        cargarPersonas();
    }, [dispatch]);
    const personas = useSelector(state => state.personas.personas)
    // state
    const [ persona, guardarPersona ] = useState('')
    const [ producto, guardarProducto ] = useState(1)
    const [ cantidad, guardarCantidad ] = useState(0)
    const submitNuevaCompra = e => {
        e.preventDefault()
    }
    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Nueva Compra</div>
            <div className="card-body">
                <form onSubmit={submitNuevaCompra}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="">Persona</label>
                                <select className="form-control" value={persona} onChange={e => guardarPersona(Number(e.target.value))}>
                                    <option value="">Escoga una persona</option>
                                    {personas.map(persona => (
                                        <option key={persona.id}>{persona.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group ml-4">
                                <label htmlFor="">Producto</label>
                                <select className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group ml-4">
                                <label htmlFor="">Cantidad</label>
                                <input type="number" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-danger nuevo-post d-block d-md-inline-block">
                            Agregar Compra &#43;
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NuevaCompra