import React from 'react'
import {
    Breadcrumbs,
    Link,
    Typography,
    Card,
    CardContent,
    TextField,
    Grid,
    Select,
    MenuItem
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link as RouterLink } from 'react-router-dom'
import  onlyNumber from '../../tools/helper'

function FreeFireCharacterAdd() {

    const [value, setValue] = React.useState(null);
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
            <Card>
                <Typography variant="h3">Add Character</Typography>
                <CardContent>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Name</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Gender</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                displayEmpty
                                fullWidth
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Unknown'}>Unknown</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Price</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Date Of Birth</Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                
                                label="Basic example"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Occupation</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Hobby</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Ability</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Story</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%', marginBottom: '3em' }} multiline
                                rows={3}
                                maxRows={4} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                            <Typography variant="button" display="block" gutterBottom>Level UP</Typography>
                        </Grid>
                    </Grid>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                                    <Typography variant="button" display="block" gutterBottom>Character Name</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField sx={{ width: '100%' }} />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                                    <Typography variant="button" display="block" gutterBottom>Level</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField sx={{ width: '100%' }} />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                                    <Typography variant="button" display="block" gutterBottom>Required Fragments</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField sx={{ width: '100%' }} />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                                    <Typography variant="button" display="block" gutterBottom>Description</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField sx={{ width: '100%' }} />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sx={{ marginTop: '1em', marginBottom: '3em' }}>
                                    <Typography variant="button" display="block" gutterBottom>Reward</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField sx={{ width: '100%' }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}

export default FreeFireCharacterAdd