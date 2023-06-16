import React, { useEffect, useState } from 'react'
import Dropdown from '../../shared/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { getCityProvince } from '../../../redux/province/provinceAction';
import { filterCitiesByProvince } from '../../../redux/city/cityAction';

const CityDropdown = ({ options }) => {
    const label = "شهر را انتخاب کنید"
    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);

    const dispatch = useDispatch();
    const cityState = useSelector(state => state.cityState);

    const getCurrentProvince = (id) => {
        dispatch(filterCitiesByProvince(id));
        dispatch(getCityProvince(id))
    }

    useEffect(() => {
        setItems(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setItems(cityState.filteredCities);
        if (!cityState.filteredCities.length) {
            setItems(options);
        }
    }, [cityState.filteredCities, options])

    return (
        <>
            {
                options &&
                <Dropdown
                    filterFunc={getCurrentProvince}
                    items={items}
                    label={label}
                    value={value} setValue={setValue}
                />
            }
        </>
    )
}

export default CityDropdown