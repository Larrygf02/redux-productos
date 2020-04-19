import React, { useEffect } from 'react'
import Producto from './Producto'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAction } from '../actions/productosAction'
import { Link } from 'react-router-dom'

const Productos = () => {
    // Mandar llamar la funcion principal
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarProductos = () => dispatch(obtenerProductosAction())
        cargarProductos();
    }, [dispatch]);

    //acceder al state
    const loading = useSelector(state => state.productos.loading)
    const error = useSelector(state => state.productos.error)
    const productos = useSelector(state => state.productos.productos)

    return (
        <React.Fragment>
            {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</div> : null}

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
                        <Producto key={producto.id} producto={producto}></Producto>
                    ))}
                </tbody>
            </table>
            { loading ? <p>Cargando...</p>: null}
            <Link to={'/productos/nuevo'} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                Agregar Producto &#43;
            </Link>


        </React.Fragment>
    )
}

export default Productos;