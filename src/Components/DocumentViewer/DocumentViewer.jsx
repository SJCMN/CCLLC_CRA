import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Box, Button, ButtonGroup, Link, IconButton } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



function DocumentViewer({theme}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);



  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <Box
      sx={{
        display: { md: "inline-block", xs: "none" },
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        maxWidth: "100%",
      }}
    >
      <Document file="./resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={1.25} />
        <Box
          sx={{
            pb: 2,
            textAlign: "center",
          }}
        >
          <ButtonGroup  variant="info" disableRipple={true}>
            <IconButton
           
              size="small"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Button color="error">
              <Link
                size="small"
                underline="none"
                color="black"
                fontWeight={"bold"}
                href="./resume.pdf"
                download="Sam Clavette Developer Resume.pdf"
              >
                Download
              </Link>
            </Button>
            <IconButton
            
              size="small"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </ButtonGroup>
        </Box>
      </Document>
    </Box>
  );
}

export default DocumentViewer;
