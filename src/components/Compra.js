import React from 'react'

const Compra = ({compra}) => {
    return (
        <tr>
            <td>{compra.persona}</td>
            <td>{compra.producto}</td>
            <td>{compra.cantidad}</td>
        </tr>
    )
}

export default Compra;