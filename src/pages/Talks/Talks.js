import React, { useState } from 'react';
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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Talks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const talks = [
    {
      title: "SusTrainable Summer School at Coimbra 2023",
      description: "I had the opportunity to receive a scholarship from the University of Minho to participate in the second SusTrainable summer school organized in Coimbra, Portugal by the University of Coimbra. Additionally, I had the privilege of presenting collaborative work with Luís Silva on the energy efficiency of sorting algorithms and programming languages using RAPL during the Students Workshop and Posters Session.",
      presentationImage: sustrainable_presentationImage,
      presentationPDF: sustrainable_presentationPDF,
      posterPDF: sustrainable_posterPDF,
      reportPDF: sustrainable_reportPDF,
      githubRepo: "https://github.com/simaocunha71/EnergyMeasurement"
    },
    {
      title: "1st UMinho Research and Innovation Open Days 2024",
      description: "I had the opportunity to participate in the first edition of UMinho Research and Innovation Open Days in Braga, Portugal at the University of Minho. Additionally, I had the privilege of presenting collaborative work with Luís Silva and João Saraiva on the energy efficiency of programming languages using RAPL, as well as the influence of powercap on the energy efficiency of programming languages during the Flash Talk and Posters Session.",
      presentationImage: uminho_open_days_presentationImage,
      presentationPDF: uminho_open_days_presentationPDF,
      posterPDF: uminho_open_days_posterPDF,
      githubRepo: "https://github.com/LuisMPSilva01/Energy-Languages-PowerCap"
    }
    // Add more talks as needed
  ];

  const handlePdfButtonClick = (pdfUrl, pdfName) => {
    window.open(pdfUrl, pdfName);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % talks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + talks.length) % talks.length);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <div className="talks-container">
        <div className="talk-item">
          <div className="talk-title">{talks[currentSlide].title}</div>
          <div className="talk-description">{talks[currentSlide].description}</div>
          <img
            src={talks[currentSlide].presentationImage}
            alt="Talk Presentation"
            className="talk-image"
          />
          <div className="talk-buttons">
            <button className="rounded-button poster-button" onClick={() => handlePdfButtonClick(talks[currentSlide].posterPDF, 'Poster')}>Poster</button>
            <button className="rounded-button presentation-button" onClick={() => handlePdfButtonClick(talks[currentSlide].presentationPDF, 'Presentation')}>Presentation</button>
            <button className="rounded-button report-button" onClick={() => handlePdfButtonClick(talks[currentSlide].reportPDF, 'Report')}>Report</button>
            {talks[currentSlide].githubRepo && (
              <button onClick={() => window.open(talks[currentSlide].githubRepo, '_blank')} className="rounded-button github-button">GitHub repository</button>
            )}
          </div>
        </div>
        <div className="slideshow-controls">
          <button className="left-button" onClick={prevSlide}>&lt;</button>
          <button className="right-button" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Talks;