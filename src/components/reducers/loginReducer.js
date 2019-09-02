

const cartReducer= (state = {}, action)=>{
    switch(action.type) {
        case "LOGIN_SUCCESS":
            return action.payload
        case "LOGIN_FAILED":
            return {}
    }
}