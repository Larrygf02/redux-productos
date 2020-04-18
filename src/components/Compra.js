import React from 'react'

const Compra = ({compra}) => {
    return (
        <tr>
            <td>{compra.persona_nombre}</td>
            <td>{compra.producto_nombre}</td>
            <td>{compra.cantidad}</td>
        </tr>
    )
}

export default Compra;