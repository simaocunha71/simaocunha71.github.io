import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      title: "SusTrainable Summer School at Coimbra 2023",
      description: "I had the opportunity to receive a scholarship from the University of Minho to participate in the second SusTrainable summer school organized in Coimbra, Portugal by the University of Coimbra. Additionally, I had the privilege of presenting collaborative work with Luís Silva on the energy efficiency of sorting algorithms and programming languages using RAPL during the Students Workshop and Posters Session.",
      images: ["assets/docs/sustrainable-summer-school-2023/presentation.jpeg"],
      presentationPDF: "assets/docs/sustrainable-summer-school-2023/presentation.pdf",
      posterPDF: "assets/docs/sustrainable-summer-school-2023/poster.pdf",
      reportPDF: "assets/docs/sustrainable-summer-school-2023/report.pdf",
      githubRepo: "https://github.com/simaocunha71/EnergyMeasurement"
    },
    {
      title: "1st UMinho Research and Innovation Open Days 2024",
      description: "I had the opportunity to participate in the first edition of UMinho Research and Innovation Open Days in Braga, Portugal at the University of Minho. Additionally, I had the privilege of presenting collaborative work with Luís Silva and João Saraiva on the energy efficiency of programming languages using RAPL, as well as the influence of powercap on the energy efficiency of programming languages during the Flash Talk and Posters Session.",
      images: ["assets/docs/uminho-open-days-2024/presentation.jpg"],
      presentationPDF: "assets/docs/uminho-open-days-2024/presentation.pdf",
      posterPDF: "assets/docs/uminho-open-days-2024/poster.pdf",
      githubRepo: "https://github.com/LuisMPSilva01/Energy-Languages-PowerCap"
    },
    {
      title: "CERCIRAS Training School 2024",
      description: "From August 26th to 30th, I had the privilege of attending the CERCIRAS Summer School in Klagenfurt, Austria! It was my first time taking part in a CERCIRAS event, and the experience was both insightful and inspiring. I greatly appreciated the chance to meet and connect with fellow researchers, exchanging ideas and exploring potential collaborations. The conversations were engaging, and I’m excited to see where they may lead in my future work.",
      images: ["assets/docs/cerciras-training-school-2024/pic1.jpeg"]
    },
    {
      title: 'Greening AI with Software Engineering 2025',
      description: 'From February 3 to February 7, 2025, I had the incredible opportunity to attend the CECAM-Lorentz Workshop on "Greening AI with Software Engineering" at EPFL, Lausanne, Switzerland. It was an inspiring event that brought together researchers from around the world to discuss how software engineering can contribute to more sustainable AI development. As an MSc graduate passionate about green software, I was especially excited to discuss how we can make AI systems more energy-efficient and integrate sustainability into software development. I also had the chance to present my MSc thesis on the energy consumption of local LLMs for code, which led to some fascinating discussions and valuable feedback from experts in the field. A huge thank you to the amazing organizers - Luís Cruz, João Paulo Fernandes, Maja Hanne Kirkeby, Silverio Martínez Fernández, and June Sallou - as well as the @CECAM and Lorentz Center for making this event such a great experience. I left with new insights, great conversations, and a stronger motivation to contribute to the future of sustainable software engineering.',
      images: ["assets/docs/cecam-lorentz-greening-ai-2025/group_picture.jpg", "assets/docs/cecam-lorentz-greening-ai-2025/presentation.jpg"]
    }
  ];

  const handlePrevImage = (images) => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = (images) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="events-page">
      {events.map((event, index) => (
        <div key={index} className="event-item">
          <div className="event-title">{event.title}</div>
          <div className="event-description">{event.description}</div>
          <div className="event-gallery-centered">
            {event.title === 'Greening AI with Software Engineering 2025' && event.images.length > 1 ? (
              <>
                <button onClick={() => handlePrevImage(event.images)} className="slideshow-button">{"<"}</button>
                <img 
                  src={event.images[currentImageIndex]} 
                  alt={`Event image ${currentImageIndex + 1}`} 
                  className="event-image" 
                  onClick={() => window.open(event.images[currentImageIndex], '_blank')} 
                />
                <button onClick={() => handleNextImage(event.images)} className="slideshow-button">{">"}</button>
              </>
            ) : (
              event.images.map((image, idx) => (
                <img 
                  key={idx} 
                  src={image} 
                  alt={`Event image ${idx + 1}`} 
                  className="event-image" 
                  onClick={() => window.open(image, '_blank')} 
                />
              ))
            )}
          </div>
          <div className="event-buttons">
            {event.presentationPDF && (
              <a href={event.presentationPDF} className="rounded-button" target="_blank" rel="noopener noreferrer">
                Presentation PDF
              </a>
            )}
            {event.posterPDF && (
              <a href={event.posterPDF} className="rounded-button" target="_blank" rel="noopener noreferrer">
                Poster PDF
              </a>
            )}
            {event.reportPDF && (
              <a href={event.reportPDF} className="rounded-button" target="_blank" rel="noopener noreferrer">
                Report PDF
              </a>
            )}
            {event.githubRepo && (
              <a href={event.githubRepo} className="rounded-button" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;