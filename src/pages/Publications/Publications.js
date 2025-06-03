import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import './Publications.css';

// Ensure pdfjs worker is set correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);

  const publications = [
    {
      title: "Greening AI-enabled Systems with Software Engineering: A Research Agenda for Environmentally Sustainable AI Practices",
      authors: "Luís Cruz, João Paulo Fernandes, Maja H. Kirkeby, Silverio Martínez-Fernández, June Sallou, Hina Anwar, Enrique Barba Roque, Justus Bogner, Joel Castaño, Fernando Castor, Aadil Chasmawala, Simão Cunha, Daniel Feitosa, Alexandra González, Andreas Jedlitschka, Patricia Lago, Ana Oprescu, Pooja Rani, João Saraiva, Federica Sarro, Raghavendra Selvan, Karthik Vaidhyanathan, Roberto Verdecchia, Ivan P. Yamshchikov, Henry Muccini",
      conference: "arXiv preprint (from the Greening AI with Software Engineering workshop, CECAM & Lorentz Center, 2025)",
      doi: "https://doi.org/10.48550/arXiv.2506.01774",
      abstract: 'The environmental impact of Artificial Intelligence (AI)-enabled systems is increasing rapidly, and software engineering plays a critical role in developing sustainable solutions. The "Greening AI with Software Engineering" CECAM-Lorentz workshop (no. 1358, 2025) funded by the Centre Européen de Calcul Atomique et Moléculaire and the Lorentz Center, provided an interdisciplinary forum for 29 participants, from practitioners to academics, to share knowledge, ideas, practices, and current results dedicated to advancing green software and AI research. The workshop was held February 3-7, 2025, in Lausanne, Switzerland. Through keynotes, flash talks, and collaborative discussions, participants identified and prioritized key challenges for the field. These included energy assessment and standardization, benchmarking practices, sustainability-aware architectures, runtime adaptation, empirical methodologies, and education. This report presents a research agenda emerging from the workshop, outlining open research directions and practical recommendations to guide the development of environmentally sustainable AI-enabled systems rooted in software engineering principles.',
      keywords: [],
      kudosLink: ""
    },
    {
      title: "Trading Runtime for Energy Efficiency: Leveraging Power Caps to Save Energy Across Programming Languages",
      authors: "Simão Cunha, Luís Silva, João Saraiva and João Paulo Fernandes",
      conference: "Proceedings of the 17th ACM SIGPLAN International Conference on Software Language Engineering (SLE ’24)",
      date: "October 20–21, 2024",
      location: "Pasadena, CA, USA",
      publisher: "Association for Computing Machinery, New York, NY, USA",
      pages: "13 pages",
      doi: "https://doi.org/10.1145/3687997.3695638",
      abstract: "Energy efficiency of software is crucial in minimizing environmental impact and reducing operational costs of ICT systems. Energy efficiency is therefore a key area of contemporary software language engineering research.\nWe conduct an extensive investigation comparing regular and power-capped executions of 9 benchmark programs obtained from The Computer Language Benchmarks Game, across 20 distinct programming languages. Our results show that employing power caps can be used to trade running time, which is degraded, for energy efficiency, which is improved, in all the programming languages and in all benchmarks that were considered. We observe overall energy savings of almost 14% across the 20 programming languages, with notable savings of 27% in Haskell. This saving, however, comes at the cost of an overall increase of the program’s execution time of 91% on average.\nWe are also able to draw similar observations using language-specific benchmarks for programming languages of different paradigms and with different execution models. This is achieved by analyzing a wide range of benchmark programs from the nofib Benchmark Suite of Haskell Programs, DaCapo Benchmark Suite for Java, and the Python Performance Benchmark Suite. We observe energy savings of approximately 8% to 21% across the test suites, with execution time increases ranging from 21% to 46%. Notably, the DaCapo suite exhibits the most significant values, with 20.84% energy savings and a 45.58% increase in execution time.",
      keywords: ["Green Software", "Power Cap", "Energy Efficiency", "Programming Languages", "Language Benchmarking"],
      kudosLink: "https://www.growkudos.com/publications/10.1145%252F3687997.3695638"
    },
    {
      title: "On the Impact of PowerCap in Haskell, Java, and Python",
      authors: "Luís Maia, Marta Sá, Inês Ferreira, Simão Cunha, Luís Silva, Paulo Azevedo and João Saraiva",
      conference: "Proceedings of the 3rd International Workshop on Resource AWareness of Systems and Society",
      date: "July 02–05, 2024",
      location: "Maribor, Slovenia",
      doi: "https://ceur-ws.org/Vol-3867/paper4.pdf",
      abstract: "Historically, programming language performance focused on fast execution times. With the advent of cloud and edge computing, and the significant energy consumption of large data centers, energy efficiency has become a critical concern both for computer manufacturers and software developers.\nThis paper investigates the impact of CPU power capping on the energy consumption and execution time of programs written in Haskell, Java, and Python. Our preliminary results analyzing well-established benchmarks indicate that while power capping does reduce energy consumption across all benchmarks, it also substantially increases execution time. These findings highlight the trade-offs between energy efficiency and runtime performance, offering insights for optimizing software under energy constraints.",
      keywords: ["Energy Efficiency", "Programming Languages", "Benchmark", "Power Cap"],
    }
  ];

  const handleAbstractClick = (index) => {
    setSelectedPublication(selectedPublication === index ? null : index);
  };

  const handleKudosClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="publications-container">
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <div className="publication-content">
              <div className="publication-title">{pub.title}</div>
              <div className="publication-description">
                <strong>{pub.authors}.</strong>
                <br />
                <em>
                  {pub.conference}
                  {pub.date && `, ${pub.date}`}
                  {pub.location && `, ${pub.location}`}
                  {pub.publisher && `, ${pub.publisher}`}
                  {pub.pages && `, ${pub.pages}.`}
                  {!pub.pages && (pub.publisher || pub.date || pub.location) && `.`}
                </em>
                <br />
                <a href={pub.doi} target="_blank" rel="noopener noreferrer">{pub.doi}</a>
              </div>
              <div className="publication-buttons">
                <button className="rounded-button" onClick={() => handleAbstractClick(index)}>
                  {selectedPublication === index ? 'Hide Abstract' : 'Show Abstract'}
                </button>
                {pub.kudosLink && (
                  <button className="rounded-button" onClick={() => handleKudosClick(pub.kudosLink)}>
                    View on Kudos
                  </button>
                )}
              </div>
              {selectedPublication === index && (
                <div className="abstract">
                  <h3>Abstract</h3>
                  <div className="paragraph-indent">
                    {pub.abstract.split('\n').map((line, i) => (
                      <p key={i} className="paragraph-indent">{line}</p>
                    ))}
                  </div>
                  {pub.keywords && pub.keywords.length > 0 && (
                    <div className="keywords">
                      <strong>Keywords:</strong> {pub.keywords.join(', ')}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
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
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Publications;