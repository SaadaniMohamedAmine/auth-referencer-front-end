import {createStore,applyMiddleware,compose} from 'redux' 
//we import compose to integrate the link ,the createStore function accept
//the link of redux as the second parameter
import thunk from 'redux-thunk'
//thunk is a middleware and to use it,we 
//have to use applyMiddleware
import rootReducer from './reducer'

export default createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) ;