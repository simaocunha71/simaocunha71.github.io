import React, { useState, useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import { useParams, useHistory } from 'react-router-dom';
import './Talks.css';

// Importar imagens e PDFs
import sustrainable_presentationImage from '../../assets/docs/sustrainable/presentation.jpeg';
import sustrainable_presentationPDF from '../../assets/docs/sustrainable/presentation.pdf';
import sustrainable_posterPDF from '../../assets/docs/sustrainable/poster.pdf';
import sustrainable_reportPDF from '../../assets/docs/sustrainable/report.pdf';

import uminho_open_days_presentationImage from '../../assets/docs/uminho_open_days/presentation.jpg';
import uminho_open_days_presentationPDF from '../../assets/docs/uminho_open_days/presentation.pdf';
import uminho_open_days_posterPDF from '../../assets/docs/uminho_open_days/poster.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Talks = () => {
  const { eventId } = useParams();
  const history = useHistory();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState('');

  // Array de talks com detalhes de cada evento
  const talks = [
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
    }
    // Adicionar mais talks conforme necessário
  ];

  // Efeito para verificar o eventId na URL e ajustar o slide atual
  useEffect(() => {
    if (!eventId) {
      // Redirecionar para o evento padrão se nenhum eventId for fornecido
      history.replace(`/talks/sustrainable-coimbra-2023`);
    } else {
      const talkIndex = talks.findIndex(talk => talk.id === eventId);
      if (talkIndex !== -1) {
        setCurrentSlide(talkIndex);
      }
    }
  }, [eventId, talks, history]);

  // Função para lidar com o clique nos botões de PDF
  const handlePdfButtonClick = (pdfUrl, pdfName) => {
    window.open(pdfUrl, pdfName);
  };

  // Função para mudar o slide com animação de entrada e saída
  const changeSlide = (direction) => {
    setAnimation(direction === 'left' ? 'exit-right' : 'exit-left');
    setTimeout(() => {
      setCurrentSlide((prevSlide) => {
        const newSlide = direction === 'left' ? (prevSlide - 1 + talks.length) % talks.length : (prevSlide + 1) % talks.length;
        history.push(`/talks/${talks[newSlide].id}`);
        return newSlide;
      });
      setAnimation(direction === 'left' ? 'enter-left' : 'enter-right');
    }, 500); // Ajustar a duração para combinar com a transição CSS
  };

  // Efeito para adicionar a classe de animação ativa após a saída
  useEffect(() => {
    if (animation === 'enter-right' || animation === 'enter-left') {
      setTimeout(() => setAnimation('enter-active'), 50);
    }
  }, [animation]);

  return (
    <div style={{ marginTop: '50px' }}>
      <div className="talks-container">
        <div className={`talk-item ${animation}`}>
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
          <button className="left-button" onClick={() => changeSlide('left')}>&lt;</button>
          <button className="right-button" onClick={() => changeSlide('right')}>&gt;</button>
        </div>
      </div>
      <div style={{ marginBottom: '100px' }}></div>
    </div>
  );
};

export default Talks;
