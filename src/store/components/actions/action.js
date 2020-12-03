import axios from "axios"
import { GET_USER, GET_PICTURES, GET_COMMENT, CREATE_COMMENT } from "./actionTypes"

export const getInstaUser = (id) => {      
    
    return dispatch => {
        
        axios.get(`/getInstaUsers/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_USER,
                    payload: response.data
            }) 
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);    
            }
        })      
    }
}

export const getPictures = (idInstaUser) => {

    return dispatch => {

        axios.get(`/getPictures/${idInstaUser}`)
            .then(res => {
                dispatch({
                    type: GET_PICTURES,
                    payload: res.data
                })
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);    
                }
            })
    }
}

export const getComment = (idInstaUser, idPicture) => {

    return dispatch => {

        axios.get(`/getComment/${idInstaUser}/${idPicture}`)
            .then(res => {
   
                dispatch({
                    type: GET_COMMENT,
                    payload: res.data
                })
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);    
                }
            })
    }
}

export const createComment = (comment) => {

    return dispatch => {
        axios.post('/addComment/', {
            id: comment.id,
            id_user: comment.id_user,
            id_otherUser: comment.id_otherUser,
            id_picture: comment.id_picture,
            text: comment.text,
            date: comment.date
        })
        .then((response) => {
 
            dispatch({
                type: CREATE_COMMENT,
                payload: Object.values(response.data)[Object.values(response.data).length-1]
            })
        })
    }


}