const initialState = {
    loading: false,
    provinces: [],
    currentCityProvince: [],
    error: ""
}


const provinceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PROVINCE_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_PROVINCE_SUCCESS":
            return {
                ...state,
                loading: false,
                provinces: [...action.payload]
            }
        case "FETCH_PROVINCE_FAILURE":
            return {
                loading: false,
                error: action.payload
            }
        case "GET_CITY_PROVINCE":
            return {
                ...state,
                currentCityProvince: state.provinces.filter(prov => {
                    return prov.id === action.payload
                }),
            }
        default: return state
    }
}

export default provinceReducer;