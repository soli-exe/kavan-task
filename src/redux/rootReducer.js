import { combineReducers } from "redux";
import cityReducer from "./city/cityReducer";
import provinceReducer from "./province/provinceReducer";

const rootReducer = combineReducers({
    cityState: cityReducer,
    provinceState: provinceReducer
})

export default rootReducer;