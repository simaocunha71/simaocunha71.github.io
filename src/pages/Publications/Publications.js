import React, { useState } from 'react';
import './Publications.css';

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [citationVisible, setCitationVisible] = useState(null);

  const publications = [
    {
      title: "Trading Runtime for Energy Efficiency: Leveraging Power Caps to Save Energy Across Programming Languages",
      authors: "Simão Cunha, Luís Silva, João Saraiva and João Paulo Fernandes",
      conference: "Proceedings of the 17th ACM SIGPLAN International Conference on Software Language Engineering (SLE ’24)",
      date: "October 20–21, 2024",
      location: "Pasadena, CA, USA",
      publisher: "ACM, New York, NY, USA",
      pages: "13 pages",
      doi: "https://doi.org/10.1145/3687997.3695638",
      abstract: "Energy efficiency of software is crucial in minimizing environmental impact and reducing operational costs of ICT systems. Energy efficiency is therefore a key area of contemporary software language engineering research.\nWe conduct an extensive investigation comparing regular and power-capped executions of 9 benchmark programs obtained from The Computer Language Benchmarks Game, across 20 distinct programming languages. Our results show that employing power caps can be used to trade running time, which is degraded, for energy efficiency, which is improved, in all the programming languages and in all benchmarks that were considered. We observe overall energy savings of almost 14% across the 20 programming languages, with notable savings of 27% in Haskell. This saving, however, comes at the cost of an overall increase of the program’s execution time of 91% on average.\nWe are also able to draw similar observations using language-specific benchmarks for programming languages of different paradigms and with different execution models. This is achieved by analyzing a wide range of benchmark programs from the nofib Benchmark Suite of Haskell Programs, DaCapo Benchmark Suite for Java, and the Python Performance Benchmark Suite. We observe energy savings of approximately 8% to 21% across the test suites, with execution time increases ranging from 21% to 46%. Notably, the DaCapo suite exhibits the most significant values, with 20.84% energy savings and a 45.58% increase in execution time.\nOur results have the potential to drive significant energy savings in the context of computational tasks for which runtime is not critical, including Batch Processing Systems, Background Data Processing, and Automated Backups.",
      citation: "Simão Cunha, Luís Silva, João Saraiva, and João Paulo Fernandes. 2024. Trading Runtime for Energy Efficiency: Leveraging Power Caps to Save Energy Across Programming Languages. In Proceedings of the 17th ACM SIGPLAN International Conference on Software Language Engineering (SLE '24), October 20–21, 2024, Pasadena, CA, USA. ACM, New York, NY, USA, 13 pages. https://doi.org/10.1145/3687997.3695638",
      keywords: ["Green Software", "Power Cap", "Energy Efficiency", "Programming Languages", "Language Benchmarking"],
      pdfLink: "https://example.com/your-pdf-link" // Replace with actual PDF link
    },
    {
      title: "On the Impact of PowerCap in Haskell, Java, and Python",
      authors: "Luís Maia, Marta Sá, Inês Ferreira, Simão Cunha, Luís Silva, Paulo Azevedo and João Saraiva",
      conference: "RAW’24: 3rd Workshop on Resource Awareness of Systems and Society",
      date: "July 02–05, 2024",
      location: "Maribor, SI",
      abstract: "Historically, programming language performance focused on fast execution times. With the advent of cloud and edge computing, and the significant energy consumption of large data centers, energy efficiency has become a critical concern both for computer manufacturers and software developers.\nThis paper investigates the impact of CPU power capping on the energy consumption and execution time of programs written in Haskell, Java, and Python. Our preliminary results analyzing well-established benchmarks indicate that while power capping does reduce energy consumption across all benchmarks, it also substantially increases execution time. These findings highlight the trade-offs between energy efficiency and runtime performance, offering insights for optimizing software under energy constraints.",
      citation: "Luís Maia, Marta Sá, Inês Ferreira, Simão Cunha, Luís Silva, Paulo Azevedo, and João Saraiva. 2024. On the Impact of PowerCap in Haskell, Java, and Python. In RAW’24: 3rd Workshop on Resource Awareness of Systems and Society, July 02–05, 2024, Maribor, SI.",
      keywords: ["Energy Efficiency", "Programming Languages", "Benchmark", "Power Cap"],
      pdfLink: "https://example.com/your-pdf-link" // Replace with actual PDF link
    }
  ];

  const handlePDFClick = (link) => {
    window.open(link, '_blank');
  };

  const handleCitationClick = (index) => {
    setCitationVisible(citationVisible === index ? null : index);
  };

  const handleAbstractClick = (index) => {
    setSelectedPublication(selectedPublication === index ? null : index);
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
                <button className="rounded-button" onClick={() => handlePDFClick(pub.pdfLink)}>View PDF</button>
                <button className="rounded-button" onClick={() => handleCitationClick(index)}>
                  {citationVisible === index ? 'Hide Citation' : 'Show Citation'}
                </button>
                <button className="rounded-button" onClick={() => handleAbstractClick(index)}>
                  {selectedPublication === index ? 'Hide Abstract' : 'Show Abstract'}
                </button>
              </div>
              {citationVisible === index && (
                <div className="citation">
                  <h3>Citation</h3>
                  <p>{pub.citation}</p>
                </div>
              )}
              {selectedPublication === index && (
                <div className="abstract">
                  <h3>Abstract</h3>
                  <div className="paragraph-indent">
                    {pub.abstract.split('\n').map((line, i) => (
                      <p key={i} className="paragraph-indent">{line}</p>
                    ))}
                  </div>
                  {pub.keywords && (
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
    </div>
  );
};

export default Publications;
