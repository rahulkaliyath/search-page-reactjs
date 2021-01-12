import dataActionTypes from './data.types';
import axios from 'axios';

export const searchData = searchString => async dispatch =>{

    dispatch({
        type : dataActionTypes.START_SEARCH
    })

    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    };

    

    try { 
        const body = JSON.stringify({searchString});
        const resp = await axios.post('http://localhost:5000/api/search',body,config);

        dispatch({
            type : dataActionTypes.SEARCH_DATA,
            payload :resp.data
        });


    } catch (error) {
        dispatch({
            type : dataActionTypes.SEARCH_FAILED
        })
    }


    

}

export const addFilter = (category,filter) => dispatch => {

    dispatch({
        type : dataActionTypes.ADD_FILTER,
        payload : {category,filter}
    })
};

export const removeFilter = (category,filter) => dispatch => {
    
    dispatch({
        type : dataActionTypes.REMOVE_FILTER,
        payload : {category,filter}
    })
};