import { Box } from "@mui/material"
import { LineWave } from "react-loader-spinner"

const Loader = () => {
    return (
        <Box component='div' sx={{ display: 'grid', placeItems: 'center' }}>
            <LineWave
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </Box>
    )
}

export default Loader