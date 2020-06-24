import React from 'react'
import Box from '@material-ui/core/Box';

export default function Layout({children}) {
    return (
        <div>
            <Box  mx={10} py={5}  >
                {children}
            </Box>
        </div>
    )
}
