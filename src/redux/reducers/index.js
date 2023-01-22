import { combineReducers } from 'redux'
import imgReducer from './picture.reducer'
import buttReducer from './buttons.reducer'

const rootReducer = combineReducers({
    imgReducer,
    buttReducer
})

export default rootReducer
