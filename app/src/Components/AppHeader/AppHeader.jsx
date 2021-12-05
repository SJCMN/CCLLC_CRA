import AppBar from '@mui/material/AppBar'
// import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function AppHeader() {
    return (
        <AppBar position="relative">
            <Toolbar>
                {/* <CameraIcon sx={{ mr: 2 }} /> */}
                <Typography variant="h6" color="inherit" noWrap>
                    CCLLC_DEV
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader