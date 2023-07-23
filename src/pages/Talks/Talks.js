import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Document, Page, pdfjs } from 'react-pdf';
import './Talks.css';

//Sustrainable image
import presentationImage from '../../assets/docs/sustrainable/presentation.jpeg';
import presentationPDF from '../../assets/docs/sustrainable/presentation.pdf';
import posterPDF from '../../assets/docs/sustrainable/poster.pdf';
import reportPDF from '../../assets/docs/sustrainable/report.pdf';

// Ensure pdfjs worker is set correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Talks = () => {
  const [selectedPdf] = React.useState(null);

  const handlePdfButtonClick = (pdfUrl) => {
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <div style={{ marginBottom: '100px' }}></div>
      <div className="talk-item">
        <div className="talk-title">SusTrainable Summer School at Coimbra 2023</div>
        <div className="talk-description">
          I had the opportunity to receive a scholarship from the University of Minho to participate in the second SusTrainable summer school organized in Coimbra, Portugal by the University of Coimbra. 
          Additionally, I had the privilege of presenting my work on the energy efficiency of sorting algorithms and programming languages using RAPL during the Students Workshop and Posters Session.
        </div>
        <img
          src={presentationImage}
          alt="Talks Image"
          className="talk-image"
        />
        <div className="talk-buttons">
          <button className="rounded-button poster-button" onClick={() => handlePdfButtonClick(posterPDF)}>
            Poster
          </button>
          <button className="rounded-button presentation-button" onClick={() => handlePdfButtonClick(presentationPDF)}>
            Presentation
          </button>
          <button className="rounded-button report-button" onClick={() => handlePdfButtonClick(reportPDF)}>
            Report
          </button>
          <button
            onClick={() => window.open('https://github.com/simaocunha71/EnergyMeasurement', '_blank')}
            className="rounded-button github-button"
          >
            GitHub repository
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

      <Footer />
    </>
  );
};

export default Talks;
