import { createTheme } from "@mui/material";
import { faIR } from '@mui/material/locale';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';


export const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: `"iran-sans", 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',`,
    },
}, faIR);

export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
