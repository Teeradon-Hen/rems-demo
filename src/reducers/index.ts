import { combineReducers } from "redux" 
import { reducer as formReducer} from "redux-form"
import example from  './Example'

const rootReducer = combineReducers({
    form: formReducer,
    example
})

export default rootReducer