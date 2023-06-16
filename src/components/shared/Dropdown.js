import CloseIcon from '@mui/icons-material/Close';
import { Box, MenuItem, FormControl, InputLabel, Select, IconButton } from '@mui/material';
import { useEffect } from 'react';

export default function Dropdown({ filterFunc, removeFilter, items, label, value, setValue }) {

    useEffect(() => {
        setValue("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleMenuItemClick = (e, id, provId) => {
        provId ? filterFunc(provId) : filterFunc(id)
    };

    const handleRemoveValueClick = () => {
        if (removeFilter) {
            removeFilter()
        }
        return setValue("");
    }


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120, display: 'flex' }}>
            {
                value.length > 1 &&
                <IconButton onClick={handleRemoveValueClick} sx={{ ":hover": { background: 'none' } }} aria-label="delete">
                    <CloseIcon />
                </IconButton>
            }
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {
                        items &&
                        items.map(item => {
                            return (
                                <MenuItem value={item.name} key={item.id} onClick={() => handleMenuItemClick(null, item.id, item.provinceId)}>
                                    {item.name}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
