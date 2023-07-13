import axios from "axios";
import { ADD_CONTACT, CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS, REMOVE_CONTACT, UPDATE_CONTACT } from "./Type";
let backend_url = "https://shuny-eka-systems-server.vercel.app/users"

export const getContacts = () => async (dispatch) => {
    dispatch({ type: CONTACT_LOADING });
    try {
        let res = await axios.get(`${backend_url}`);
      
        dispatch({ type: CONTACT_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: CONTACT_ERROR, payload: e.message });
    }
};

export const addContact = (object) => async (dispatch) => {
    

    dispatch({ type: CONTACT_LOADING });
    try {
        let res = await axios.post(`${backend_url}`, object);
        console.log("object",res)
        alert(`${res.data}`);
        dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (e) {
        dispatch({ type: CONTACT_ERROR, payload: e.message });
    }
};


export const updateContact = (result,editId) => async (dispatch) => {
    dispatch({ type: CONTACT_LOADING });
    try {
        let res = await axios.put(`${backend_url}/${editId}`,result );
        alert(`${res.data}`);
dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (e) {
        dispatch({ type: CONTACT_ERROR, payload: e.message });
    }
};

export const deleteContact = (id,onClose) => async (dispatch) => {
    dispatch({ type: CONTACT_LOADING });
    try {
        let res = await axios.delete(`${backend_url}/${id}`);
        alert(`${res.data}`);
        onClose()

        dispatch({ type: REMOVE_CONTACT, payload: res.data._id });
    } catch (e) {
        dispatch({ type: CONTACT_ERROR, payload: e.message });
    }
};