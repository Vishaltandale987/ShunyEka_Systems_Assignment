import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";


import { ContactReducer } from "./Reducer";
import UserSlice from "../Store/UserSlice";


const rootReducer = combineReducers({
    contactManager: ContactReducer,
    users: UserSlice,
});

const composeEnhancer = Window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));