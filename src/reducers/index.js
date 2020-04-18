import { combineReducers } from 'redux'
import productosReducers from './productosReducers'
import validacionReducer from './validacionReducer'
import personasReducer from './personasReducer'
import comprasReducer from './comprasReducer'


export default combineReducers({
    productos: productosReducers,
    personas: personasReducer,
    error: validacionReducer,
    compras: comprasReducer
})