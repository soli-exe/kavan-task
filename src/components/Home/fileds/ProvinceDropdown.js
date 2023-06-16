import React, { useState, useEffect } from 'react'
import Dropdown from '../../shared/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { filterCitiesByProvince } from '../../../redux/city/cityAction';
import { removeCitiesFilter } from '../../../redux/city/cityAction';

const ProvinceDropdown = ({ options }) => {
    const label = "استان را انتخاب کنید"
    const [value, setValue] = useState("");


    const dispatch = useDispatch();
    const provinceState = useSelector(state => state.provinceState);

    const filterCities = (id) => {
        return dispatch(filterCitiesByProvince(id))
    }

    const removeFilter = () => {
        return dispatch(removeCitiesFilter())
    }

    useEffect(() => {
        setValue('');
    }, [])

    useEffect(() => {
        if (!provinceState.currentCityProvince.length) {
            setValue('');
        } else {
            setValue(provinceState.currentCityProvince[0].name)
        }


    }, [provinceState.currentCityProvince])

    return (
        <>
            {
                options &&
                <Dropdown
                    filterFunc={filterCities} removeFilter={removeFilter}
                    items={options}
                    label={label}
                    value={value} setValue={setValue}
                />
            }
        </>
    )
}

export default ProvinceDropdown