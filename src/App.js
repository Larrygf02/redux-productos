import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'

//componentes
import Header from './components/Header'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'
import Productos from './components/Productos'

function App() {
  return (
    <BrowserRouter>    
      <Provider store={store}>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Productos}></Route>
            <Route exact path="/productos/nuevo" component={NuevoProducto}></Route>
            <Route exact path="/productos/editar/:id" component={EditarProducto}></Route>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
