import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import root_reducer from './Reducers/reducer'
import redux_thunk from 'redux-thunk'
import { applyMiddleware } from "redux"
export default  createStore( root_reducer, composeWithDevTools(applyMiddleware(redux_thunk)) )
