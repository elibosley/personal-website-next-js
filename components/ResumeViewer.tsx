
import { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Strings from '../constants/strings';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeViewer = () => {
    return (<div>
        <Document file={Strings.resumeDirectUrl}>
            <Page pageNumber={1} />

            <style jsx>
                {`
            :global(canvas) {
                width: 100% !important;
                height: auto !important;
            }
            `}
            </style>
        </Document>
        <div style={{display: 'flex', justifyContent: 'center'}}>

            <a className="link--button" href={Strings.resumeDirectUrl}>{"Download PDF"}</a>
        </div>
    </div>);

}

export default ResumeViewer;