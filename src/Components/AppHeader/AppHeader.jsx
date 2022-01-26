import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "@mui/material/Link";

function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="info" position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
            <Link
              color="inherit"
              href="https://www.ccllcdev.com/"
              underline="none"
            >
              CCLLC_DEV
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              href="https://github.com/SJCMN"
              sx={{ mr: 2 }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              href="https://www.linkedin.com/in/sam-clavette-2896609/"
              sx={{ mr: 2 }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              href="https://twitter.com/scmn"
              sx={{ mr: 2 }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
