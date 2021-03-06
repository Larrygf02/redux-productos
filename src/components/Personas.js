import React, { Fragment, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonasAction } from '../actions/personasAction';
import Persona from './Persona';
import { Link } from 'react-router-dom'

const Personas = () => {
    // Mandar llamar la funcion principal
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarPersonas = () => dispatch(obtenerPersonasAction())
        cargarPersonas();
    }, [dispatch]);

    // acceder al state
    const loading = useSelector(state => state.personas.loading)
    const error = useSelector(state => state.personas.error)
    const personas = useSelector(state => state.personas.personas)
    console.log(personas)
    return (
        <Fragment>
            {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</div> : null}
            <h2 className="text-center my-5">Listado de personas</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map(persona => (
                        <Persona key={persona.id} persona={persona}></Persona>
                    ))}
                </tbody>
            </table>
            {loading ? <p>Cargando...</p> : null}
            <Link to={'/personas/nuevo'} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                    Agregar Persona &#43;
            </Link>
        </Fragment>
    )
}

export default Personas