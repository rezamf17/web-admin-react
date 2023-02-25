import React from 'react'
import { Typography, 
          Breadcrumbs,
          Link
} from '@mui/material'

const home = () => {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
      </Breadcrumbs>
      <Typography paragraph variant='h3'>
        Selamat Datang Di Web Admin
      </Typography>

    </div>
  )
}

export default home