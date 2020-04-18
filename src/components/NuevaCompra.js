import React from 'react';

const NuevaCompra = () => {
    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Nueva Compra</div>
            <div className="card-body">
                <form>
                    <div className="flex-row">
                        <div className="form-group">
                            <label htmlFor="">Persona</label>
                            <select className="form-control">
                                <option value="">1</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Producto</label>
                            <select className="form-control">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-danger nuevo-post d-block d-md-inline-block">
                            Agregar Compra &#43;
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NuevaCompra