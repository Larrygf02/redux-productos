import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <Link to={'/'} className="text-light">
                    <h1> CRUD - React, Redux Hooks, REST API</h1>
                </Link>
                <Link to={'/'} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                    Productos
                </Link>
                <Link to={'/personas'} className="btn btn-danger d-block">Personas</Link>
            </div>
        </nav>
    )
}

export default Header;