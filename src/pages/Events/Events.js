import React, { useState, useEffect, useMemo } from 'react';
import { pdfjs } from 'react-pdf';
import { useParams, useNavigate } from 'react-router-dom';
import './Events.css';

// Import images and PDFs
import sustrainable_presentationImage from '../../assets/docs/sustrainable/presentation.jpeg';
import sustrainable_presentationPDF from '../../assets/docs/sustrainable/presentation.pdf';
import sustrainable_posterPDF from '../../assets/docs/sustrainable/poster.pdf';
import sustrainable_reportPDF from '../../assets/docs/sustrainable/report.pdf';

import uminho_open_days_presentationImage from '../../assets/docs/uminho_open_days/presentation.jpg';
import uminho_open_days_presentationPDF from '../../assets/docs/uminho_open_days/presentation.pdf';
import uminho_open_days_posterPDF from '../../assets/docs/uminho_open_days/poster.pdf';

import cerciras_training_school_pic1 from '../../assets/docs/cerciras-training-school-2024/pic1.jpeg';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Events = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState('');

  const events = useMemo(() => [
    {
      id: "sustrainable-coimbra-2023",
      title: "SusTrainable Summer School at Coimbra 2023",
      description: "I had the opportunity to receive a scholarship from the University of Minho to participate in the second SusTrainable summer school organized in Coimbra, Portugal by the University of Coimbra. Additionally, I had the privilege of presenting collaborative work with Luís Silva on the energy efficiency of sorting algorithms and programming languages using RAPL during the Students Workshop and Posters Session.",
      presentationImage: sustrainable_presentationImage,
      presentationPDF: sustrainable_presentationPDF,
      posterPDF: sustrainable_posterPDF,
      reportPDF: sustrainable_reportPDF,
      githubRepo: "https://github.com/simaocunha71/EnergyMeasurement"
    },
    {
      id: "uminho-open-days-2024",
      title: "1st UMinho Research and Innovation Open Days 2024",
      description: "I had the opportunity to participate in the first edition of UMinho Research and Innovation Open Days in Braga, Portugal at the University of Minho. Additionally, I had the privilege of presenting collaborative work with Luís Silva and João Saraiva on the energy efficiency of programming languages using RAPL, as well as the influence of powercap on the energy efficiency of programming languages during the Flash Talk and Posters Session.",
      presentationImage: uminho_open_days_presentationImage,
      presentationPDF: uminho_open_days_presentationPDF,
      posterPDF: uminho_open_days_posterPDF,
      githubRepo: "https://github.com/LuisMPSilva01/Energy-Languages-PowerCap"
    },
    {
      id: "cerciras-training-school-2024",
      title: "CERCIRAS Training School 2024",
      description: "From August 26th to 30th, I had the privilege of attending the CERCIRAS Summer School in Klagenfurt, Austria! It was my first time taking part in a CERCIRAS event, and the experience was both insightful and inspiring. I greatly appreciated the chance to meet and connect with fellow researchers, exchanging ideas and exploring potential collaborations. The conversations were engaging, and I’m excited to see where they may lead in my future work.",
      presentationImage: cerciras_training_school_pic1,
    }
    // Add more events as needed
  ], []);

  useEffect(() => {
    if (!eventId) {
      navigate(`/events/cerciras-training-school-2024`);
    } else {
      const eventIndex = events.findIndex(event => event.id === eventId);
      if (eventIndex !== -1) {
        setCurrentSlide(eventIndex);
      } else {
        navigate(`/events/cerciras-training-school-2024`);
      }
    }
  }, [eventId, events, navigate]);

  const handlePdfButtonClick = (pdfUrl, pdfName) => {
    if (pdfUrl) {
      window.open(pdfUrl, pdfName);
    }
  };

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  useEffect(() => {
    if (animation === 'enter-right' || animation === 'enter-left') {
      setTimeout(() => setAnimation('enter-active'), 50);
    }
  }, [animation]);

  const currentEvent = events[currentSlide];

  return (
    <div className="events-page">
      <div className="sidebar">
        {events.map((event) => (
          <button
            key={event.id}
            className="sidebar-button"
            onClick={() => navigate(`/events/${event.id}`)}
          >
            {event.title}
          </button>
        ))}
      </div>
      <div className="main-content">
        {currentEvent && (
          <div className={`event-item ${animation}`}>
            <div className="event-title">{currentEvent.title}</div>
            <div className="event-description">{currentEvent.description}</div>
            <img
              src={currentEvent.presentationImage}
              alt="Talk Presentation"
              className="event-image"
              onClick={() => handleImageClick(currentEvent.presentationImage)} // Added click handler
            />
            <div className="event-buttons">
              {currentEvent.posterPDF && (
                <button className="rounded-button poster-button" onClick={() => handlePdfButtonClick(currentEvent.posterPDF, 'Poster')}>Poster</button>
              )}
              {currentEvent.presentationPDF && (
                <button className="rounded-button presentation-button" onClick={() => handlePdfButtonClick(currentEvent.presentationPDF, 'Presentation')}>Presentation</button>
              )}
              {currentEvent.reportPDF && (
                <button className="rounded-button report-button" onClick={() => handlePdfButtonClick(currentEvent.reportPDF, 'Report')}>Report</button>
              )}
              {currentEvent.githubRepo && (
                <button onClick={() => window.open(currentEvent.githubRepo, '_blank')} className="rounded-button github-button">GitHub repository</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
