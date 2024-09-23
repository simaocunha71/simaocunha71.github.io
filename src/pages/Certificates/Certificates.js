import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Certificates.css';

// PDFs
import english_certificate from '../../assets/docs/certificates/English_C1_Simao_Cunha.pdf';
import sustrainable_attendence from '../../assets/docs/certificates/Sustrainable_Attendence_certificate.pdf';
import sustrainable_students from '../../assets/docs/certificates/Sustrainable_Students_Workshop_certificate.pdf';
import UOD_Pitch from '../../assets/docs/certificates/UMinhoOpenDays_Pitch.pdf';
import UOD_Poster from '../../assets/docs/certificates/UMinhoOpenDays_Poster.pdf';

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
            <button className="rounded-button" onClick={() => handlePdfButtonClick(english_certificate)}>
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
            Obtained from the University of Coimbra - from July 11, 2023 to July 14, 2023
          </div>
          <div className="certificate-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick(sustrainable_attendence)}>
              Attendance Certificate
            </button>
            <button className="rounded-button" onClick={() => handlePdfButtonClick(sustrainable_students)}>
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
            Obtained from the University of Minho - January 2024
          </div>
          <div className="certificate-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick(UOD_Pitch)}>
              Pitch Certificate
            </button>
            <button className="rounded-button" onClick={() => handlePdfButtonClick(UOD_Poster)}>
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
