import { createStore, combineReducers } from "redux";

import AuthReducers from './Reducers/AuthReducers';


const reducers = combineReducers({
    auth: AuthReducers,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;