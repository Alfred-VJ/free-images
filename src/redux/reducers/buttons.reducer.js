import { NEXT_BEFORE } from "../actionsType/buttons.type"

const initialState = {
    pagina: 47
  }
  
  const buttReducer = (state = initialState, action) => {
    switch (action.type) {
      case NEXT_BEFORE:
        console.log("REDUCER", action.payload)
        let value;
          action.payload === "l" && state.pagina > 1 ? value = state.pagina - 1 : state.pagina === 1 && action.payload === "l" ? value = 1 : value = state.pagina + 1
        
        return {
          ...state,
          pagina: value,
        }
      default:
        return state
    }
  }
  
  export default buttReducer
  