
import { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeViewer = () => {
    return (<div>
        <Document file={"https://raw.githubusercontent.com/elibosley/Resume/master/Elijah%20Bosley%20Resume.pdf"}>
            <Page pageNumber={1} />
        </Document>
    </div>);

}

export default ResumeViewer;