import { ChevronLeft, Menu } from "@mui/icons-material";
import { AppBar, Avatar, Box, CssBaseline, Drawer, IconButton, Toolbar, Container, Divider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Sidebar from '../Sidebar/index'
import ListStaff from '../Staff/ListStaff'


function Home() {

    const [Open, SetOpen] = useState(false);

    const handleOpen = () => {
        SetOpen(true);
    }
    const handleClose = () => {
        SetOpen(false);
    }

    return (
        <>
            <Box>
                <CssBaseline />
                <AppBar position="fixed" open={Open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={handleOpen}
                            edge='start'
                            size="large"
                        >
                            <Menu />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Container sx={{ marginTop: 20 }}>
                    <ListStaff />
                </Container>
            </Box>
            <Drawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                    },
                }}
                anchor="left"
                open={Open}
                onClose={handleClose}

            >
                <div>
                    <Box
                        sx={{
                            width: '250px'
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <IconButton
                                onClick={handleClose}
                                size="small"

                            >
                                <ChevronLeft />
                            </IconButton>
                        </Box>
                        <Divider />
                        <Box
                            sx={{
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                            <p>Hi, {sessionStorage.getItem("Username")}</p>

//                             <Avatar
//                                 src={require("file:///D:/react/vachay_web/src/asset/images/logo.jpg")}
//                                 sx={{
//                                     width: '100px',
//                                     height: '100px',
//                                     marginLeft: '75px'

//                                 }} />

                        </Box>

                        <Divider />
                        <Sidebar />
                    </Box>
                </div>
            </Drawer>
        </>
    )
}
export default Home;
