import React from 'react'
import {
    Typography,
    Breadcrumbs,
    Link,
    Card,
    CardContent,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    IconButton,
    Button
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link as RouterLink } from 'react-router-dom';

function FreeFireCharacters() {

    const rows = [
        {
            id: 1,
            name: "Marianna",
            gender: "Female",
            price: "500",
            dob: "2000-05-22",
            occupation: "Hairstlyist",
            hobby: "Cooking",
            ability: "-",
            story: "-",
            created_at: "2023-02-04T13:31:08.000000Z",
            updated_at: "2023-02-04T13:31:26.000000Z",
            deleted_at: null,
            free_fire_level: [
                {
                    id: 1,
                    id_character: 1,
                    character_name: "Marianna",
                    level: "1",
                    required_fragments: "None",
                    desc: "Reduce damage when outside safe zone by 4%.",
                    reward: "-",
                    created_at: "2023-02-04T13:31:08.000000Z",
                    updated_at: "2023-02-04T13:31:26.000000Z",
                    deleted_at: null
                },
                {
                    id: 2,
                    id_character: 1,
                    character_name: "Marianna",
                    level: "2",
                    required_fragments: "100",
                    desc: "Reduce damage when outside safe zone by 8%.",
                    reward: "-",
                    created_at: "2023-02-04T13:31:08.000000Z",
                    updated_at: "2023-02-04T13:31:26.000000Z",
                    deleted_at: null
                },
                {
                    id: 3,
                    id_character: 1,
                    character_name: "Marianna",
                    level: "3",
                    required_fragments: "100",
                    desc: "Reduce damage when outside safe zone by 16%.",
                    reward: "-",
                    created_at: "2023-02-04T13:31:08.000000Z",
                    updated_at: "2023-02-04T13:31:26.000000Z",
                    deleted_at: null
                }
            ]
        }
    ];
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Free Fire
                </Link>
                <Typography color="text.primary" >Free Fire Characters</Typography>
            </Breadcrumbs>
            <Card>
                <CardContent>
                    <Button color='error' variant="contained" sx={{float : 'right'}} component={RouterLink} to={`/free-fire-characters/add`}>Add Character</Button>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>No</TableCell>
                                    <TableCell>Character Name</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rows.map((items, i) => {
                                        return (
                                            <TableRow key={i}>
                                                <TableCell>{i + 1}</TableCell>
                                                <TableCell>{items.name}</TableCell>
                                                <TableCell>{items.gender}</TableCell>
                                                <TableCell>{items.price}</TableCell>
                                                    <TableCell>
                                                        <IconButton component={RouterLink} to={`/free-fire-characters/detail`}>
                                                            <VisibilityIcon />
                                                        </IconButton>
                                                        <IconButton>
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default FreeFireCharacters