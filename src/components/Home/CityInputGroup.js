import CityDropdown from "./fileds/CityDropdown";
import ProvinceDropdown from "./fileds/ProvinceDropdown";

// MUI
import { Grid } from "@mui/material";

const CityInputGroup = ({ cityState, provinceState }) => {

    return (
        <Grid container spacing={2} sx={{ mt: '2rem' }}>
            <Grid item xs={12} md={6}>
                {
                    <ProvinceDropdown options={provinceState.provinces} />
                }
            </Grid>
            <Grid item xs={12} md={6}>
                {
                    <CityDropdown options={cityState.cities} />
                }
            </Grid>
        </Grid>

    )
}

export default CityInputGroup