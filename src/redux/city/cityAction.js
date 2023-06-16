import axios from "axios";
import { BASE_URL } from "../../services/api";

const fetchCityRequest = () => {
    return {
        type: "FETCH_CITY_REQUEST"
    }
}

const fetchCitySuccess = cities => {
    return {
        type: "FETCH_CITY_SUCCESS",
        payload: cities
    }
}

const fetchCityFailure = error => {
    return {
        type: "FETCH_CITY_FAILURE",
        payload: error
    }
}
export const filterCitiesByProvince = provinceID => {
    return {
        type: "FILTER_CITY_BY_PROVINCE",
        payload: provinceID
    }
}

export const removeCitiesFilter = () => {
    return {
        type: "REMOVE_FILTER",
    }
}

export const fetchCities = (token) => {
    return (dispatch) => {
        dispatch(fetchCityRequest());
        axios.get(`${BASE_URL}/agency/getCity`,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        ).then(res => {
            dispatch(fetchCitySuccess(res.data.data))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchCityFailure(errorMsg))
        })
    }
}