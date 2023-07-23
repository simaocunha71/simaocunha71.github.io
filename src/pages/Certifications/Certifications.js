import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Document, Page, pdfjs } from 'react-pdf';
import './Certifications.css';

// PDFs
import english_certificate from '../../assets/docs/certificates/English_C1_Simao_Cunha.pdf';
import sustrainable_attendence from '../../assets/docs/certificates/Sustrainable_Attendence_certificate.pdf';
import sustrainable_students from '../../assets/docs/certificates/Sustrainable_Students_Workshop_certificate.pdf';

// Ensure pdfjs worker is set correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Certifications = () => {
  const [selectedPdf] = React.useState(null);

  const handlePdfButtonClick = (pdfUrl) => {
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <div style={{ marginBottom: '100px' }}></div>

      {/* Item 1 */}
      <div className="talk-item">
        <div className="talk-content">
          <div className="talk-title">English C1 Certificate</div>
          <div className="talk-description">
            Obtained from BabeliUM organization - from October 2021 to February 2022
          </div>
          <div className="talk-buttons">
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
      <div className="talk-item">
        <div className="talk-content">
          <div className="talk-title">Sustrainable Summer School 2023 - Attendance Certificate</div>
          <div className="talk-description">
            Obtained from University of Coimbra - Attendance Certificate
          </div>
          <div className="talk-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick(sustrainable_attendence)}>
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

      {/* Item 3 */}
      <div className="talk-item">
        <div className="talk-content">
          <div className="talk-title">Sustrainable Summer School 2023 - Students Workshop and Poster Session Certificate</div>
          <div className="talk-description">
            Obtained from University of Coimbra - Students Workshop and Poster Session Certificate
          </div>
          <div className="talk-buttons">
            <button className="rounded-button" onClick={() => handlePdfButtonClick(sustrainable_students)}>
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

      <div style={{ marginBottom: '100px' }}></div>
    </>
  );
};

export default Certifications;
