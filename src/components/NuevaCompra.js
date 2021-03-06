import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerPersonasAction } from '../actions/personasAction';
import { obtenerProductosAction } from '../actions/productosAction';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionAction';
import { crearNuevaCompraAction } from '../actions/comprasAction';

const NuevaCompra = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarDatos = () => {
            dispatch(obtenerProductosAction())
            dispatch(obtenerPersonasAction())
        }
        cargarDatos();
    }, [dispatch]);
    const personas = useSelector(state => state.personas.personas)
    const productos = useSelector(state => state.productos.productos)
    // state
    const [ persona, guardarPersona ] = useState(0)
    const [ producto, guardarProducto ] = useState(0)
    const [ cantidad, guardarCantidad ] = useState(0)
    // formulario
    const agregarCompra = (compra) => dispatch(crearNuevaCompraAction(compra))
    const validarFormulario = () => dispatch( validarFormularioAction())
    const exitoValidacion = () => dispatch( validacionExito());
    const errorValidacion = () => dispatch( validacionError());
    const submitNuevaCompra = e => {
        e.preventDefault()
        validarFormulario()
        // validar formulario
        if (persona === 0 || producto === 0 || cantidad === 0) {
            errorValidacion()
            return;
        }
        
        exitoValidacion()
        // crear la nueva compra
        agregarCompra({
            persona,
            producto,
            cantidad
        })
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
                                    <option value="0">Escoga una persona</option>
                                    {personas.map(persona => (
                                        <option key={persona.id} value={persona.id}>{persona.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group ml-4">
                                <label htmlFor="">Producto</label>
                                <select className="form-control" value={producto} onChange={e => guardarProducto(Number(e.target.value))}>
                                    <option value="0">Escoga un producto</option>
                                    {productos.map(producto => (
                                        <option key={producto.id} value={producto.id}>{producto.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group ml-4">
                                <label htmlFor="">Cantidad</label>
                                <input type="number" className="form-control" value={cantidad} onChange={e => guardarCantidad(e.target.value)}/>
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