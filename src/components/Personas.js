import React, { Fragment, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonasAction } from '../actions/personasAction';

const Personas = () => {
    // Mandar llamar la funcion principal
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarPersonas = () => dispatch(obtenerPersonasAction())
        cargarPersonas();
    }, []);

    // acceder al state
    const loading = useSelector(state => state.personas.loading)
    const error = useSelector(state => state.personas.error)
    const personas = useSelector(state => state.personas.personas)
    console.log(personas)
    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de personas</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map(persona => (
                        <tr key={persona.id}>
                            <td>{persona.nombre}</td>
                            <td>{persona.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Personas