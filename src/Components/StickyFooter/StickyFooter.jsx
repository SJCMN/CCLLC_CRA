import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MediaMap from "../MediaMap/MediaMap";
import DocumentViewer from "../DocumentViewer/DocumentViewer";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://www.ccllcdev.com/" underline="none">
        CCLLC_DEV
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 6 }} maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            marginLeft: "1.5rem",
          }}
        >
        Hello! I'm Sam Clavette.
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          margin="auto"
          sx={{ width: "94%" }}
        >
          {`These are some projects I have been working on while attending the `}
          <Link
            underline="hover"
            color="inherit"
            href="https://www.primeacademy.io/courses/engineering"
          >
            Prime Academy
          </Link>
          {` Full-Stack Software Engineering Immersion program. I am a developer who loves to use data and tech to help make peoples lives a bit easier.`}
        </Typography>
        <MediaMap />
        <DocumentViewer />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">sam@ccllcdev.com</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
