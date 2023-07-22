import React from 'react';
import Footer from '../../components/Footer/Footer';
import './Talks.css';

//Sustrainable image
import presentationImage from '../../assets/docs/sustrainable/presentation.jpeg';

const Talks = () => {
  const handlePdfButtonClick = (pdfName) => {
    // Replace this function with your desired action when a button is clicked
    alert(`You clicked the button for ${pdfName}`);
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
          <button className="rounded-button poster-button" onClick={() => handlePdfButtonClick('Poster')}>
            Poster
          </button>
          <button className="rounded-button presentation-button" onClick={() => handlePdfButtonClick('Presentation')}>
            Presentation
          </button>
          <button className="rounded-button report-button" onClick={() => handlePdfButtonClick('Report')}>
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

      <Footer />
    </>
  );
};

export default Talks;
