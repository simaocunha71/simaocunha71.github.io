import React from 'react';
import { pdfjs } from 'react-pdf';
import './Talks.css';

// Sustainable docs
import sustrainable_presentationImage from '../../assets/docs/sustrainable/presentation.jpeg';
import sustrainable_presentationPDF from '../../assets/docs/sustrainable/presentation.pdf';
import sustrainable_posterPDF from '../../assets/docs/sustrainable/poster.pdf';
import sustrainable_reportPDF from '../../assets/docs/sustrainable/report.pdf';

// UMinho Open Days docs
import uminho_open_days_presentationImage from '../../assets/docs/uminho_open_days/presentation.jpg';
import uminho_open_days_presentationPDF from '../../assets/docs/uminho_open_days/presentation.pdf';
import uminho_open_days_posterPDF from '../../assets/docs/uminho_open_days/poster.pdf';

// Ensure pdfjs worker is set correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Talks = () => {
  const handlePdfButtonClick = (pdfUrl, pdfName) => {
    // Open the PDF in a new tab with the document name
    window.open(pdfUrl, pdfName);
  };

  return (
    <>
      <div style={{ marginBottom: '100px' }}></div>
      <div className="talk-item">
        <div className="talk-title">SusTrainable Summer School at Coimbra 2023</div>
        <div className="talk-description">
          I had the opportunity to receive a scholarship from the University of Minho to participate in the second SusTrainable summer school organized in Coimbra, Portugal by the University of Coimbra.
          Additionally, I had the privilege of presenting collaborative work with Luís Silva on the energy efficiency of sorting algorithms and programming languages using RAPL during the Students Workshop and Posters Session.
        </div>
        <img
          src={sustrainable_presentationImage}
          alt="SusTrainable Summer School Presentation"
          className="talk-image"
        />
        <div className="talk-buttons">
          <button className="rounded-button poster-button" onClick={() => handlePdfButtonClick(sustrainable_posterPDF, 'Poster')}>
            Poster
          </button>
          <button className="rounded-button presentation-button" onClick={() => handlePdfButtonClick(sustrainable_presentationPDF, 'Presentation')}>
            Presentation
          </button>
          <button className="rounded-button report-button" onClick={() => handlePdfButtonClick(sustrainable_reportPDF, 'Report')}>
            Report
          </button>
          <button
            onClick={() => window.open('https://github.com/simaocunha71/EnergyMeasurement', '_blank')}
            className="rounded-button github-button"
          >
            GitHub repository
          </button>
        </div>
      </div>

      <div className="talk-item">
        <div className="talk-title">1st UMinho Research and Innovation Open Days 2024</div>
        <div className="talk-description">
          I had the opportunity to participate in the first edition of UMinho Research and Innovation Open Days in Braga, Portugal at the University of Minho.
          Additionally, I had the privilege of presenting collaborative work with Luís Silva and João Saraiva on the energy efficiency of programming languages using RAPL, as well as the influence of powercap on the energy efficiency of programming languages during the Flash Talk and Posters Session.
        </div>
        <img
          src={uminho_open_days_presentationImage}
          alt="UMinho Open Days Presentation"
          className="talk-image"
        />
        <div className="talk-buttons">
          <button className="rounded-button poster-button" onClick={() => handlePdfButtonClick(uminho_open_days_posterPDF, 'Poster')}>
            Poster
          </button>
          <button className="rounded-button presentation-button" onClick={() => handlePdfButtonClick(uminho_open_days_presentationPDF, 'Presentation')}>
            Presentation
          </button>
          <button
            onClick={() => window.open('https://github.com/LuisMPSilva01/Energy-Languages-PowerCap', '_blank')}
            className="rounded-button github-button"
          >
            GitHub repository
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '100px' }}></div>
    </>
  );
};

export default Talks;
