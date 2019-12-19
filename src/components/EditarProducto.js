import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { obtenerProductoEditarAction } from '../actions/productosAction'

const EditarProducto = () => {
    // dispatch para ejecutar la funcion principal
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerProductoEditarAction())
    }, [])
    return ( <p>Editar ...</p>)
}

export default EditarProducto;