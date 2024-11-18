import { Document, Page } from "react-pdf";
import pdfFile from "../Janitorial/RequestForm";
import RequestForm from "../Janitorial/RequestForm";

function Test() {
  return (
    <div className="pdf-container">
      {/* Header */}
      <header className="pdf-header">
        <h1>Document Title</h1>
      </header>

      {/* PDF Viewer */}
      <div className="pdf-viewer">
        {/* <Document file={pdfFile}>
          <Page pageNumber={1} />
        </Document> */}
      </div>

      {/* Footer */}
      <footer className="pdf-footer">
        <p>Document Footer</p>
      </footer>
    </div>
  );
}

export default Test;
