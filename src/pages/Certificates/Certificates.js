import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Certificates.css';

// Ensure pdfjs worker is set correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Certificates = () => {
  const [selectedPdf] = React.useState(null);

  const handlePdfButtonClick = (pdfUrl) => {
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <div style={{ marginTop: '80px' }}></div>

      {/* Item 1 */}
      <div className="certificate-item">
        <div className="certificate-content">
          <div className="certificate-title">English C1 Certificate</div>
          <div className="certificate-description">
            Obtained from BabeliUM organization - from October 2021 to February 2022
          </div>
          <div className="certificate-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick("assets/docs/English_C1_Simao_Cunha.pdf")}>
              Open PDF Certificate
            </button>
          </div>
          {selectedPdf && (
            <div className="pdf-container">
              <Document file={selectedPdf}>
                <Page pageNumber={1} />
              </Document>
            </div>
          )}
        </div>
      </div>

      {/* Item 2 */}
      <div className="certificate-item">
        <div className="certificate-content">
          <div className="certificate-title">Sustrainable Summer School 2023 - Attendance and Students Workshop and Poster Session Certificates</div>
          <div className="certificate-description">
            Obtained from University of Coimbra - from July 11, 2023 to July 14, 2023
          </div>
          <div className="certificate-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick("assets/docs/sustrainable-summer-school-2023/attendance_certificate.pdf")}>
              Attendance Certificate
            </button>
            <button className="rounded-button" onClick={() => handlePdfButtonClick("assets/docs/sustrainable-summer-school-2023/students_workshop_certificate.pdf")}>
              Students Workshop and Poster Session Certificate
            </button>
          </div>
          {selectedPdf && (
            <div className="pdf-container">
              <Document file={selectedPdf}>
                <Page pageNumber={1} />
              </Document>
            </div>
          )}
        </div>
      </div>

      {/* Item 3 */}
      <div className="certificate-item">
        <div className="certificate-content">
          <div className="certificate-title">1st UMinho Research & Innovation Open Days 2024 - Pitch and Poster Session Certificates</div>
          <div className="certificate-description">
            Obtained from University of Minho - January 2024
          </div>
          <div className="certificate-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick("assets/docs/uminho-open-days-2024/pitch_certificate.pdf")}>
              Pitch Certificate
            </button>
            <button className="rounded-button" onClick={() => handlePdfButtonClick("assets/docs/uminho-open-days-2024/poster_certificate.pdf")}>
              Poster Certificate
            </button>
          </div>
          {selectedPdf && (
            <div className="pdf-container">
              <Document file={selectedPdf}>
                <Page pageNumber={1} />
              </Document>
            </div>
          )}
        </div>
      </div>

      <div className="certificate-item">
        <div className="certificate-content">
          <div className="certificate-title">Cerciras Training School 2024 - Attendance Certificate</div>
          <div className="certificate-description">
            Obtained from University of Klagenfurt - August 2024
          </div>
          <div className="certificate-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick("assets/docs/cerciras-training-school-2024/certificate.pdf")}>
              Attendance Certificate
            </button>
          </div>
          {selectedPdf && (
            <div className="pdf-container">
              <Document file={selectedPdf}>
                <Page pageNumber={1} />
              </Document>
            </div>
          )}
        </div>
      </div>

      <div className="certificate-item">
        <div className="certificate-content">
          <div className="certificate-title">Greening AI with Software Engineering 2025 - Attendance Certificate</div>
          <div className="certificate-description">
            Obtained from CECAM & Lorentz Center - February 2025
          </div>
          <div className="certificate-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick("assets/docs/cecam-lorentz-greening-ai-2025/certificate.pdf")}>
              Attendance Certificate
            </button>
          </div>
          {selectedPdf && (
            <div className="pdf-container">
              <Document file={selectedPdf}>
                <Page pageNumber={1} />
              </Document>
            </div>
          )}
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Certificates;
