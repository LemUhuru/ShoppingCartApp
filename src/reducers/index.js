import { combineReducers } from 'redux'
import inventoryReducer from '../modules/inventory/reducer'
import cartReducer from '../modules/cart/reducer'

export default combineReducers({
    inventory: inventoryReducer,
    cart: cartReducer,
})
