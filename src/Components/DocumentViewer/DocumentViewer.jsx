import React from 'react'
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Box, Paper } from '@mui/material'



function DocumentViewer () {

    const [ numPages, setNumPages ] = useState(null);
    const [ pageNumber, setPageNumber ] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    };

    const previousPage = () => {
        changePage(-1);
    };

    const nextPage = () => {
        changePage(1)
    };

  
   

    return (
        <Paper 
        elevation={2}
        >
            <Document
            file = "./resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            
            </Document>
                <p>
                {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    ‹
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage} 
                >
                    ›
                </button>
                
                
          
        </Paper>
    )
}

export default DocumentViewer;