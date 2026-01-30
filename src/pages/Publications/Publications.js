import React, { useState } from 'react';
import './Publications.css';

function extractYear(pub) {
  // Tenta extrair o ano do campo date, conference ou doi
  if (pub.date) {
    const match = pub.date.match(/\b(20\d{2}|19\d{2})\b/);
    if (match) return match[0];
  }
  if (pub.conference) {
    const match = pub.conference.match(/\b(20\d{2}|19\d{2})\b/);
    if (match) return match[0];
  }
  if (pub.doi) {
    const match = pub.doi.match(/\b(20\d{2}|19\d{2})\b/);
    if (match) return match[0];
  }
  return '';
}

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);

  const publications = [
    {
      title: "The Green Side of the Lua",
      authors: "André Brandão, Diogo Matos, Miguel Guimarães, Simão Cunha, and João Saraiva",
      year: 2026,
      conference: "arXiv preprint",
      doi: "https://arxiv.org/abs/2601.16670",
      abstract: "The United Nations' 2030 Agenda for Sustainable Development highlights the importance of energy-efficient software to reduce the global carbon footprint. Programming languages and execution models strongly influence software energy consumption, with interpreted languages generally being less efficient than compiled ones. Lua illustrates this trade-off: despite its popularity, it is less energy-efficient than greener and faster languages such as C. This paper presents an empirical study of Lua's runtime performance and energy efficiency across 25 official interpreter versions and just-in-time (JIT) compilers. Using a comprehensive benchmark suite, we measure execution time and energy consumption to analyze Lua's evolution, the impact of JIT compilation, and comparisons with other languages. Results show that all LuaJIT compilers significantly outperform standard Lua interpreters. The most efficient LuaJIT consumes about seven times less energy and runs seven times faster than the best Lua interpreter. Moreover, LuaJIT approaches C's efficiency, using roughly six times more energy and running about eight times slower, demonstrating the substantial benefits of JIT compilation for improving both performance and energy efficiency in interpreted languages.",
      keywords: ["Energy Efficiency", "Language Benchmarking", "Green Software"],
      kudosLink: ""
    },
    {
      title: "Greening AI-enabled Systems with Software Engineering: A Research Agenda for Environmentally Sustainable AI Practices",
      authors: "Luís Cruz, João Paulo Fernandes, Maja H. Kirkeby, Silverio Martínez-Fernández, June Sallou, Hina Anwar, Enrique Barba Roque, Justus Bogner, Joel Castaño, Fernando Castor, Aadil Chasmawala, Simão Cunha, Daniel Feitosa, Alexandra González, Andreas Jedlitschka, Patricia Lago, Henry Muccini, Ana Oprescu, Pooja Rani, João Saraiva, Federica Sarro, Raghavendra Selvan, Karthik Vaidhyanathan, and Roberto Verdecchia",
      year: 2025,
      conference: "SIGSOFT Software Engineering Notes (ACM)",
      date: "July 2025",
      volume: "50",
      issue: "3",
      pages: "14–23",
      publisher: "Association for Computing Machinery",
      doi: "https://doi.org/10.1145/3743095.3743099",
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
              <div className="publication-title">
                {pub.title}
                {extractYear(pub) && (
                  <span className="publication-year">{extractYear(pub)}</span>
                )}
              </div>
              <div className="publication-authors">{pub.authors}</div>
              <div className="publication-meta">
                <em>
                  {pub.conference}
                  {pub.date && `, ${pub.date}`}
                  {pub.location && `, ${pub.location}`}
                  {pub.publisher && `, ${pub.publisher}`}
                  {pub.pages && `, ${pub.pages}.`}
                  {!pub.pages && (pub.publisher || pub.date || pub.location) && `.`}
                </em>
              </div>
              <a className="publication-doi" href={pub.doi} target="_blank" rel="noopener noreferrer">{pub.doi}</a>
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
    </div>
  );
};

export default Publications;