import {GET_PICTURE} from "../actionsType/picture.type"

const initialState = {
    images: null
  }
  
  const imgReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PICTURE:
        return {
          ...state,
          images: action.payload
        }
      default:
        return state
    }
  }
  
  export default imgReducer
  