import React, { useEffect } from 'react'
import Producto from './Producto'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAction, obtenerProductosComienzo } from '../actions/productosAction'

const Productos = () => {
    // Mandar llamar la funcion principal
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarProductos = () => dispatch(obtenerProductosAction())
        cargarProductos();
    }, []);

    //acceder al state
    const loading = useSelector(state => state.productos.loading)
    const error = useSelector(state => state.productos.error)
    const productos = useSelector(state => state.productos.productos)

    return (
        <React.Fragment>
            {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</div> : 
                        <React.Fragment>
                            <h2 className="text-center my-5">Listado de Productos</h2>

                            <table className="table table-striped">
                                <thead className="bg-primary table-dark">
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Acciones</th>
                                    </tr>   
                                </thead>
                                <tbody>
                                    {productos.map( producto => (
                                        <Producto producto={producto}></Producto>
                                    ))}
                                </tbody>
                            </table>
                            { loading ? 'Cargando...': null}
                        </React.Fragment>
            }

        </React.Fragment>
    )
}

export default Productos;