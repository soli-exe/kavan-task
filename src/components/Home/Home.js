import { useEffect } from "react";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import CityInputGroup from "./CityInputGroup";
// MUI
import { Container, Typography } from "@mui/material"
// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../../redux/city/cityAction";
import { fetchProvinces } from "../../redux/province/provinceAction";
// Spinner
import Loader from "../shared/Loader";

const Home = () => {

    const { getData } = useSessionStorage();
    const token = getData('access-token');


    const dispatch = useDispatch();
    const cityState = useSelector(state => state.cityState);
    const provinceState = useSelector(state => state.provinceState);

    useEffect(() => {
        if (!cityState.cities.length && !provinceState.provinces.length) {
            dispatch(fetchCities(token))
            dispatch(fetchProvinces(token))
        }
    }, [])



    if (cityState.loading && provinceState.loading) {
        return <Loader />
    }

    if (cityState.error || provinceState.error) {
        return <Typography component={'h1'} variant="h3" color='red'>خطایی رخ داده است</Typography>
    }

    return (
        <Container maxWidth="md">
            {
                cityState && provinceState &&
                <CityInputGroup cityState={cityState} provinceState={provinceState} />
            }
        </Container>
    )
}

export default Home