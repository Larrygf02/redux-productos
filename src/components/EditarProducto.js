import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductoEditarAction, editarProductoAction } from '../actions/productosAction'

const EditarProducto = ({match}) => {
    // crear los refs para la edicion
    const nombreRef = useRef('')
    const precioRef = useRef('')

    // dispatch para ejecutar la funcion principal
    const dispatch = useDispatch()
    const editarProducto = producto => dispatch(editarProductoAction(producto))
    //obtener el id a editar
    const { id } = match.params
    useEffect(() => {
        dispatch(obtenerProductoEditarAction(id))
    }, [dispatch, id])

    //Acceder al state
    const producto = useSelector(state => state.productos.producto)
    if (!producto) return 'Cargando...' 

    const submitEditarProducto = e => {
        e.preventDefault();

        // validar el formulario
        editarProducto({
            id,
            nombre: nombreRef.current.value,
            precio: precioRef.current.value
        })
        // no hay error

        //guardar los cambios

        // redireccionar
    }
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Editar Producto</h2>
                        <form onSubmit={submitEditarProducto}>
                            <div className="form-group">
                                <label>Titulo</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Titulo"
                                    defaultValue={producto.nombre}
                                    ref={nombreRef}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio"
                                    defaultValue={producto.precio}
                                    ref={precioRef}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                        </form>
 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto;