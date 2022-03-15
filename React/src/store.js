import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import InventoryReducer from './reducers/InventoryReducer'
import ValidateCarReducer from './reducers/ValidateCarReducer'



const rootReducer = combineReducers({
    inventory: InventoryReducer,
    selectedCar: ValidateCarReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))
export default store