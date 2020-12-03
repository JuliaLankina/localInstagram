import { GET_USER, GET_PICTURES, GET_COMMENT, CREATE_COMMENT } from "../actions/actionTypes"

const initialState = {
    users: [],
    pictures: [],
    comments: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                users: action.payload
            }

           case GET_PICTURES:
               return {
                   ...state,
                   pictures: action.payload
               }
            case GET_COMMENT:
                return {
                    ...state,
                    comments: action.payload
                }
            case CREATE_COMMENT:
                return {
                    ...state,
                    comments: state.comments.concat(action.payload)
                }  
            
        default: return state
    }
}

export default reducer