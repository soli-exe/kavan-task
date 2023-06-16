import axios from "axios";
import { BASE_URL } from "../../services/api";

const fetchProvinceRequest = () => {
    return {
        type: "FETCH_PROVINCE_REQUEST"
    }
}

const fetchProvinceSuccess = provinces => {
    return {
        type: "FETCH_PROVINCE_SUCCESS",
        payload: provinces
    }
}

const fetchProvinceFailure = error => {
    return {
        type: "FETCH_PROVINCE_FAILURE",
        payload: error
    }
}

export const getCityProvince = provinceID => {
    return {
        type: "GET_CITY_PROVINCE",
        payload: provinceID
    }
}

export const fetchProvinces = (token) => {
    return (dispatch) => {
        dispatch(fetchProvinceRequest());
        axios.get(`${BASE_URL}/agency/getProvince`,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        ).then(res => {
            dispatch(fetchProvinceSuccess(res.data.data))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchProvinceFailure(errorMsg))
        })
    }
}