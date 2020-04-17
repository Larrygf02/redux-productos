import React, { Fragment, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonasAction } from '../actions/personasAction';

const Personas = () => {
    // Mandar llamar la funcion principal
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarPersonas = () => dispatch(obtenerPersonasAction)
        cargarPersonas();
    }, []);
    return (
        <Fragment>
            <h2>Listado de personas</h2>
        </Fragment>
    )
}

export default Personas