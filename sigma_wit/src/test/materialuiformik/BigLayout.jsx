import {
    Grid,
    Paper,
    IconButton,
    Typography,
    Badge,
    ThemeProvider,
    createTheme
} from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';

const DarkTheme = createTheme({
    palette:{
        primary:{
            main:"#000000d8",
            dark:"#181818",
            light:"#3b3b3b" 
        },
        secondary:{
            main:"#f1f1f1",
            dark:"#ffffff",
            light:"#eeeeee"
        },
        iconsColor:{
            main:"#f1f1f1",
        }
    }
})

// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
    return <ThemeProvider theme={DarkTheme}>
        <Grid
            container
            sx={{
                width:"100%", 
                height:"max-content"
            }}
        >
            <Grid item lg={2} md={3} sm={4} backgroundColor="primary.light"  xs={0} sx={{
                height:"100vh",
                position:"sticky",
            }}>

            </Grid>
            <Grid item xs sx={{ 
                height:"max-content"
            }}>
                <NavBar/>
            </Grid>
        </Grid>
    </ThemeProvider>
}


const NavBar = () => {
    return <ThemeProvider theme={DarkTheme}>
        <Paper 
        square={true}  
        elevation={2} 
        sx={{
            height:"80px",
            width:"100%"
        }}>
            <Grid container backgroundColor={"primary.main"} xs={12} sx={{
                height:"100%"
            }}>
                <Grid item xs sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                }}>
                    <Typography
                        color={"secondary.main"}
                        variant={"h4"}
                        component={
                            "h1"
                        } 
                    >
                        Emily
                    </Typography>
                </Grid>
                <Grid item xs sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <IconButton>
                        <Badge  
                        badgeContent={1} 
                        color={"iconsColor"} 
                        max={99}
                        anchorOrigin={{
                            vertical:"bottom",
                            horizontal:"right"
                        }}
                        >
                            <NotificationsIcon  color={"iconsColor"}/>
                        </Badge>
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    </ThemeProvider>
}


const FormMUI = () => {
    return  
}