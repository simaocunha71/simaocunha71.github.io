import React, { useState, useEffect, useMemo } from 'react';
import { pdfjs } from 'react-pdf';
import { useParams, useNavigate } from 'react-router-dom';
import './Events.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Events = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = useMemo(() => [
    {
      id: "sustrainable-coimbra-2023",
      title: "SusTrainable Summer School at Coimbra 2023",
      description: "I had the opportunity to receive a scholarship from the University of Minho to participate in the second SusTrainable summer school organized in Coimbra, Portugal by the University of Coimbra. Additionally, I had the privilege of presenting collaborative work with Luís Silva on the energy efficiency of sorting algorithms and programming languages using RAPL during the Students Workshop and Posters Session.",
      images: ["assets/docs/sustrainable/presentation.jpeg"],
      presentationPDF: "assets/docs/sustrainable/presentation.pdf",
      posterPDF: "assets/docs/sustrainable/poster.pdf",
      reportPDF: "assets/docs/sustrainable/report.pdf",
      githubRepo: "https://github.com/simaocunha71/EnergyMeasurement"
    },
    {
      id: "uminho-open-days-2024",
      title: "1st UMinho Research and Innovation Open Days 2024",
      description: "I had the opportunity to participate in the first edition of UMinho Research and Innovation Open Days in Braga, Portugal at the University of Minho. Additionally, I had the privilege of presenting collaborative work with Luís Silva and João Saraiva on the energy efficiency of programming languages using RAPL, as well as the influence of powercap on the energy efficiency of programming languages during the Flash Talk and Posters Session.",
      images: ["assets/docs/uminho_open_days/presentation.jpg"],
      presentationPDF: "assets/docs/uminho_open_days/presentation.pdf",
      posterPDF: "assets/docs/uminho_open_days/poster.pdf",
      githubRepo: "https://github.com/LuisMPSilva01/Energy-Languages-PowerCap"
    },
    {
      id: "cerciras-training-school-2024",
      title: "CERCIRAS Training School 2024",
      description: "From August 26th to 30th, I had the privilege of attending the CERCIRAS Summer School in Klagenfurt, Austria! It was my first time taking part in a CERCIRAS event, and the experience was both insightful and inspiring. I greatly appreciated the chance to meet and connect with fellow researchers, exchanging ideas and exploring potential collaborations. The conversations were engaging, and I’m excited to see where they may lead in my future work.",
      images: ["assets/docs/cerciras-training-school-2024/pic1.jpeg"]
    },
    {
      id: "cecam-lorentz-greening-ai-2025",
      title: 'Greening AI with Software Engineering 2025',
      description: 'From February 3 to February 7, 2025, I had the incredible opportunity to attend the CECAM-Lorentz Workshop on "Greening AI with Software Engineering" at EPFL, Lausanne, Switzerland. It was an inspiring event that brought together researchers from around the world to discuss how software engineering can contribute to more sustainable AI development. As an MSc graduate passionate about green software, I was especially excited to discuss how we can make AI systems more energy-efficient and integrate sustainability into software development. I also had the chance to present my MSc thesis on the energy consumption of local LLMs for code, which led to some fascinating discussions and valuable feedback from experts in the field. A huge thank you to the amazing organizers - Luís Cruz, João Paulo Fernandes, Maja Hanne Kirkeby, Silverio Martínez Fernández, and June Sallou - as well as the @CECAM and Lorentz Center for making this event such a great experience. I left with new insights, great conversations, and a stronger motivation to contribute to the future of sustainable software engineering.',
      images: ["assets/docs/cecam-lorentz-greening-ai-2025/group_picture.jpg", "assets/docs/cecam-lorentz-greening-ai-2025/presentation.jpg"]
    }
  ], []);

  useEffect(() => {
    if (!eventId) {
      navigate(`/events/cecam-lorentz-greening-ai-2025`);
    } else {
      const eventIndex = events.findIndex(event => event.id === eventId);
      if (eventIndex !== -1) {
        setCurrentSlide(eventIndex);
        setCurrentImageIndex(0); // Reset image index when event changes
      } else {
        navigate(`/events/cecam-lorentz-greening-ai-2025`);
      }
    }
  }, [eventId, events, navigate]);

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + currentEvent.images.length) % currentEvent.images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentEvent.images.length);
  };

  const currentEvent = events[currentSlide];

  return (
    <div className="events-page">
      <div className="sidebar">
        {events.map((event) => (
          <button key={event.id} className="sidebar-button" onClick={() => navigate(`/events/${event.id}`)}>
            {event.title}
          </button>
        ))}
      </div>
      <div className="main-content">
        {currentEvent && (
          <div className="event-item">
            <div className="event-title">{currentEvent.title}</div>
            <div className="event-description">{currentEvent.description}</div>
            <div className="event-gallery-centered">
              {currentEvent.images.length > 1 && (
                <div className="slideshow-controls">
                  <button onClick={handlePrevImage} className="slideshow-button">{"<"}</button>
                  <img 
                    src={currentEvent.images[currentImageIndex]} 
                    alt={`Event image ${currentImageIndex + 1}`} 
                    className="event-image" 
                    onClick={() => handleImageClick(currentEvent.images[currentImageIndex])} 
                  />
                  <button onClick={handleNextImage} className="slideshow-button">{">"}</button>
                </div>
              )}
              {currentEvent.images.length === 1 && (
                <img 
                  src={currentEvent.images[0]} 
                  alt="Event image" 
                  className="event-image" 
                  onClick={() => handleImageClick(currentEvent.images[0])} 
                />
              )}
            </div>
            <div className="event-buttons">
              {currentEvent.presentationPDF && (
                <a href={currentEvent.presentationPDF} className="rounded-button" target="_blank" rel="noopener noreferrer">
                  Presentation PDF
                </a>
              )}
              {currentEvent.posterPDF && (
                <a href={currentEvent.posterPDF} className="rounded-button" target="_blank" rel="noopener noreferrer">
                  Poster PDF
                </a>
              )}
              {currentEvent.reportPDF && (
                <a href={currentEvent.reportPDF} className="rounded-button" target="_blank" rel="noopener noreferrer">
                  Report PDF
                </a>
              )}
              {currentEvent.githubRepo && (
                <a href={currentEvent.githubRepo} className="rounded-button" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;