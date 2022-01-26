import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Box, Button, ButtonGroup, Link } from "@mui/material";

function DocumentViewer() {
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
          <ButtonGroup>
            <Button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              ‹
            </Button>
            <Button>
              <Link
                underline="none"
                color="inherit"
                href="./resume.pdf"
                download="Sam Clavette Developer Resume.pdf"
              >
                Download
              </Link>
            </Button>
            <Button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              ›
            </Button>
          </ButtonGroup>
        </Box>
      </Document>
    </Box>
  );
}

export default DocumentViewer;
