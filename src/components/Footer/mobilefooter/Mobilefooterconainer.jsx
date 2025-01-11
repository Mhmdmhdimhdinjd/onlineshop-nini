import React from "react";
import { Box, Typography } from '@mui/material';
import Mobilefooter__wrapper from "./mobilefooter_data";

const Mobilefooter = () => {


    return (
        <Box sx={{ bgcolor: 'grey.800', color: 'white', p: 4 }}>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
                <Typography textAlign="center" fontFamily={'gandom'} >
                    ما را در فضای مجازی دنبال کنید
                </Typography>
            </Box>

            <Mobilefooter__wrapper />

        </Box>

    )
}


export default Mobilefooter