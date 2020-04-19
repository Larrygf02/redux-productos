import React from 'react';

const NuevaCompra = () => {
    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Nueva Compra</div>
            <div className="card-body">
                <form>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="">Persona</label>
                                <select className="form-control">
                                    <option value="">1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group ml-4">
                                <label htmlFor="">Producto</label>
                                <select className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group ml-4">
                                <label htmlFor="">Cantidad</label>
                                <input type="number" className="form-control"/>
                            </div>
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