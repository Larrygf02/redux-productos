import React, { Fragment, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerComprasAction } from '../actions/comprasAction';
import Compra from './Compra';
import { obtenerProductoAction } from '../actions/productosAction';
import NuevaCompra from './NuevaCompra';

const Compras = () => {
    // Mandar llamar la funcion principal
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarDatos = () => {
            dispatch(obtenerComprasAction())
            dispatch(obtenerProductoAction())
        } 
        cargarDatos();
    }, []);

    // acceder al state
    const loading = useSelector(state => state.compras.loading)
    const error = useSelector(state => state.compras.error)
    const compras = useSelector(state => state.compras.compras)
    return (
        <Fragment>
            {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</div> : null}
            <h2 className="text-center my-5">Listado de compras</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Persona</th>
                        <th scope="col">Compra</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {compras.map(compra => (
                        <Compra key={compra.id} compra={compra}></Compra>
                    ))}
                </tbody>
            </table>
            {loading ? <p>Cargando...</p> : null}
            <NuevaCompra></NuevaCompra>
        </Fragment>
    )
}

export default Compras