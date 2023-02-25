import React from 'react'
import { Breadcrumbs,
         Link,
         Typography
 } from '@mui/material'
 import { Link as RouterLink } from 'react-router-dom';

function FreeFireCharacterDetail() {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" >
                    Free Fire
                </Link>
                <Link underline="hover" color="inherit" component={RouterLink} to={`/free-fire-characters`}>
                    Free Fire Characters
                </Link>
                <Typography color="text.primary">Free Fire Characters Detail</Typography>
            </Breadcrumbs>
        </div>
    )
}

export default FreeFireCharacterDetail