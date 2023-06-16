const initialState = {
    loading: false,
    cities: [],
    filteredCities: [],
    error: ""
}

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CITY_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_CITY_SUCCESS":
            return {
                ...state,
                loading: false,
                cities: [...action.payload]
            }
        case "FETCH_CITY_FAILURE":
            return {
                loading: false,
                error: action.payload
            }
        case "FILTER_CITY_BY_PROVINCE":
            return {
                ...state,
                filteredCities: state.cities.filter(city => city.provinceId === action.payload),
            }
        case "REMOVE_FILTER":
            return {
                cities: [...state.cities],
                filteredCities: []
            }

        default: return state
    }
}

export default cityReducer;