import { combineReducers } from "redux" 
import exampleList from  './ExampleListReducer'
import ExampleSelectedID from "./ExampleSelectedID"
const rootReducer = combineReducers({
    exampleList,
    ExampleSelectedID
})

export default rootReducer