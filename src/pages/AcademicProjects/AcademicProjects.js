import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AcademicProjects.css';

const AcademicProjects = () => {
  const [activeYear, setActiveYear] = useState('5th');
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "assets/docs/PEI/competicoes.png",
    "assets/docs/PEI/competicao.png",
    "assets/docs/PEI/jogador.png",
    "assets/docs/PEI/jogo.png",
    "assets/docs/PEI/equipa.png",
    "assets/docs/PEI/filter.png"
  ];
  const hackathonImages = [
    "assets/docs/hackathon-bugsbyte-2024/mainpage.png",
    "assets/docs/hackathon-bugsbyte-2024/listevents.png",
    "assets/docs/hackathon-bugsbyte-2024/eventpage.png"
  ];

  const toggleYearVisibility = (year) => {
    if (activeYear !== year) setActiveYear(year);
  };

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const goToPreviousSlide = (imgs) => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
  };

  const goToNextSlide = (imgs) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <div className="button-container_ap">
        <button className={`rounded-button_2 ${activeYear === '1st' ? 'active' : ''}`} onClick={() => toggleYearVisibility('1st')}>1st Year</button>
        <button className={`rounded-button_2 ${activeYear === '2nd' ? 'active' : ''}`} onClick={() => toggleYearVisibility('2nd')}>2nd Year</button>
        <button className={`rounded-button_2 ${activeYear === '3rd' ? 'active' : ''}`} onClick={() => toggleYearVisibility('3rd')}>3rd Year</button>
        <button className={`rounded-button_2 ${activeYear === '4th' ? 'active' : ''}`} onClick={() => toggleYearVisibility('4th')}>4th Year</button>
        <button className={`rounded-button_2 ${activeYear === '5th' ? 'active' : ''}`} onClick={() => toggleYearVisibility('5th')}>5th Year</button>
        <button className={`rounded-button_2 ${activeYear === 'Other' ? 'active' : ''}`} onClick={() => toggleYearVisibility('Other')}>Other</button>
      </div>

      {activeYear === '1st' && (
        <>
          <h3 className="custom-indent">Bachelor's 1st year</h3>
          <div className="project-table-wrapper1">
          <table className="project-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Languages</th>
                <th>Repository</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Functional Programming</td>
                <td><img src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell" /></td>
                <td><a href="https://github.com/simaocunha71/PF_Haskell" className="rounded-button">Exercises</a></td>
              </tr>
              <tr>
                <td>Informatic Labs I</td>
                <td><img src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell" /></td>
                <td><a href="https://github.com/simaocunha71/LI1_ExciteBike" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Imperative Programming</td>
                <td><img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" /></td>
                <td><a href="https://github.com/simaocunha71/PI_C" className="rounded-button">Exercises</a></td>
              </tr>
              <tr>
                <td>Informatic Labs II</td>
                <td><img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" /></td>
                <td><a href="https://github.com/surumkata/rastros" className="rounded-button">Project</a></td>
              </tr>
            </tbody>
            </table>
          </div>
        </>
      )}

      {activeYear === '2nd' && (
        <>
          <h3 className="custom-indent">Bachelor's 2nd year</h3>
          <div className="project-table-wrapper2">
          <table className="project-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Languages</th>
                <th>Repository</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Communication</td>
                <td><img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" /></td>
                <td><a href="https://github.com/surumkata/shafa" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Object Oriented Programming</td>
                <td><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" /></td>
                <td>
                  <a href="https://github.com/simaocunha71/POO" className="rounded-button">Exercises</a>
                  <a href="https://github.com/surumkata/fmpoo2021" className="rounded-button">Project</a>
                </td>
              </tr>
              <tr>
                <td>Informatic Labs III</td>
                <td>
                  <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />{' '}
                  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                </td>
                <td><a href="https://github.com/simaocunha71/sgr-uminho" className="rounded-button">Projects</a></td>
              </tr>
              <tr>
                <td>Program Calculation</td>
                <td>
                  <img src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell" />{' '}
                  <img src="https://img.shields.io/badge/LaTeX-47A141?style=for-the-badge&logo=LaTeX&logoColor=white" alt="LaTeX" />
                </td>
                <td><a href="https://github.com/simaocunha71/CP_Projeto" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Operative Systems</td>
                <td><img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" /></td>
                <td>
                  <a href="https://github.com/simaocunha71/SistemasOperativos" className="rounded-button">Exercises</a>
                  <a href="https://github.com/simaocunha71/SO_Projeto" className="rounded-button">Project</a>
                </td>
              </tr>
            </tbody>
            </table>
          </div>
        </>
      )}

      {activeYear === '3rd' && (
        <>
          <h3 className="custom-indent">Bachelor's 3rd year</h3>
          <table className="project-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Languages</th>
                <th>Repository</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Artificial Intelligence</td>
                <td>
                  <img src="https://user-images.githubusercontent.com/61991247/148315069-2ef27e5e-90f7-45da-85e7-a4cf3c9030c4.png" alt="Prolog" />
                </td>
                <td>
                  <a href="https://github.com/simaocunha71/ia" className="rounded-button">Exercises</a>
                  <a href="https://github.com/simaocunha71/artificial-intelligent-green-distribution" className="rounded-button">Project</a>
                </td>
              </tr>
              <tr>
                <td>Software Systems Development</td>
                <td><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" /></td>
                <td><a href="https://github.com/simaocunha71/reparation-center-dss" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Distributed Systems</td>
                <td><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" /></td>
                <td><a href="https://github.com/surumkata/airport-sd" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Informatic Labs IV</td>
                <td>
                  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />{' '}
                  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />{' '}
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />{' '}
                  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                </td>
                <td><a href="https://github.com/surumkata/addandSEEK-localizarte" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Computer Communications</td>
                <td>
                  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />{' '}
                  <img src="https://img.shields.io/badge/VirtualBox-21416b?style=for-the-badge&logo=VirtualBox&logoColor=white" alt="VirtualBox" />
                </td>
                <td><a href="https://github.com/simaocunha71/cc" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Language Processing</td>
                <td><img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" /></td>
                <td><a href="https://github.com/simaocunha71/pl_projeto" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Computer Graphics</td>
                <td>
                  <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />{' '}
                  <img src="https://img.shields.io/badge/OpenGL-FFFFFF?style=for-the-badge&logo=opengl" alt="OpenGL" />
                </td>
                <td><a href="https://github.com/simaocunha71/engineandgenerator3D" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Intelligent Learning and Decision Making</td>
                <td>Non applicable</td>
                <td><a href="https://github.com/simaocunha71/ADI_projeto" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Operational Research</td>
                <td>Non applicable</td>
                <td><a href="https://github.com/simaocunha71/IO_Projetos" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Computer Networks</td>
                <td>
                  <img src="https://img.shields.io/badge/VirtualBox-21416b?style=for-the-badge&logo=VirtualBox&logoColor=white" alt="VirtualBox" />
                </td>
                <td><a href="https://github.com/simaocunha71/redes-de-computadores" className="rounded-button">Assignments</a></td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {activeYear === '4th' && (
        <>
          <h3 className="custom-indent">Master's 4th year</h3>
          <table className="project-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Languages</th>
                <th>Repository</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cloud Computing Applications and Services</td>
                <td>
                  <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="GCP" />
                  <img src="https://img.shields.io/badge/Ansible-000000?style=for-the-badge&logo=ansible&logoColor=white" alt="Ansible" />
                  <img src="https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white" alt="K8" />
                  <img src="https://img.shields.io/badge/Ghost-000?style=for-the-badge&logo=ghost&logoColor=yellow" alt="Ghost" />
                </td>
                <td><a href="https://github.com/simaocunha71/ghost-cloud" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Parallel Computing</td>
                <td><img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" /></td>
                <td><a href="https://github.com/simaocunha71/kmeans-cp" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Data and Machine Learning</td>
                <td>
                  <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
                  <img src="https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Sklearn" />
                </td>
                <td><a href="https://github.com/simaocunha71/machine_learning-daa" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Network Services Engineering</td>
                <td>
                  <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
                  <img src="https://img.shields.io/badge/VirtualBox-21416b?style=for-the-badge&logo=VirtualBox&logoColor=white" alt="VB" />
                </td>
                <td><a href="https://github.com/simaocunha71/streaming-esr" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Formal Methods in Software Engineering</td>
                <td>Non applicable</td>
                <td><a href="https://github.com/simaocunha71/mfes" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Software Requirements and Architectures</td>
                <td>
                  <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
                  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" alt="Django" />
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                </td>
                <td><a href="https://github.com/surumkata/rasbet" className="rounded-button">Project</a></td>
              </tr>
            </tbody>
          </table>

          <h4 style={{ textAlign: 'center' }}>Master's courses area #1: Software Development, Validation and Maintenance</h4>
          <table className="project-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Languages</th>
                <th>Repository</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Software Maintenance and Evolution</td>
                <td><img src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell" /></td>
                <td><a href="https://github.com/simaocunha71/mes_project" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Topics of Software Development</td>
                <td>
                  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
                  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
                  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                </td>
                <td>
                  <a href="https://github.com/LuisMPSilva01/BraGuia" className="rounded-button">Projects</a>
                  <a href={"assets/docs/TDS_Entrega_PI_93262_93168_Relatorio.pdf"} className="rounded-button">Investigation Project Report</a>
                  <a href={"assets/docs/TDS_Entrega_PI_93262_93168_Apresentacao.pdf"} className="rounded-button">Investigation Project Presentation</a>
                </td>
              </tr>
              <tr>
                <td>Experimentation in Software Engineering</td>
                <td>
                  <img src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Script" />
                  <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
                  <img src="https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
                </td>
                <td><a href="https://github.com/simaocunha71/EnergyMeasurement" className="rounded-button">Project</a></td>
              </tr>
            </tbody>
          </table>

          <h4 style={{ textAlign: 'center' }}>Master's courses area #2: Internet Engineering</h4>
          <table className="project-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Languages</th>
                <th>Repository</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Network Management and Security</td>
                <td><img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" /></td>
                <td><a href="https://github.com/simaocunha71/gsr" className="rounded-button">Project</a></td>
              </tr>
              <tr>
                <td>Quality of Service in the Internet</td>
                <td><img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" /></td>
                <td>
                  <a href="https://github.com/simaocunha71/qsi" className="rounded-button">Assignments</a>
                  <a href="https://github.com/realRunlo/CNP" className="rounded-button">Project</a>
                </td>
              </tr>
              <tr>
                <td>IP Internetworking</td>
                <td><img src="https://img.shields.io/badge/VirtualBox-21416b?style=for-the-badge&logo=VirtualBox&logoColor=white" alt="VirtualBox" /></td>
                <td><a href="https://github.com/simaocunha71/iri" className="rounded-button">Assignments</a></td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {activeYear === '5th' && (
        <>
          <h3 className="custom-indent">Master's 5th year</h3>
          <div className="project-item">
            <div className="project-title">Informatics Engineering Project</div>
            <div className="project-description">
              This project involved creating dashboards using WyScout API data in Microsoft PowerBI for Sporting Clube de Braga.
              Below are some of the pages created in the project:
            </div>
            <div className="slideshow-container">
              <button className="prev" onClick={() => goToPreviousSlide(images)}>&lt;</button>
              <div className="slideshow-item">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} onClick={() => openImageInNewTab(images[currentIndex])} />
              </div>
              <button className="next" onClick={() => goToNextSlide(images)}>&gt;</button>
            </div>
            <div className="project-buttons">
              <a href="https://github.com/realRunlo/BragaScoutingPlatform" className="rounded-button">Github Repository</a>
            </div>
          </div>
          <div className="project-item">
            <div className="project-title">Master's Dissertation in Informatics Engineering</div>
            <div className="project-description">
              This dissertation presents the development of a comprehensive platform for evaluating large language
              models (LLMs) through benchmarking coding tasks with established datasets, including HumanEval-X,
              MBPP+, and CyberSecEval. The primary objective of this platform is to assess not only the effectiveness,
              energy efficiency and runtime of LLMs in generating code but also their security implications in software
              development scenarios. By focusing on these critical aspects, the research aims to provide insights into
              the practical applications of LLMs in various programming contexts.<br /><br />
              The document thoroughly explores the project’s context, motivation, and objectives, emphasizing the
              transformative influence of advanced LLMs, such as GPT-4 and Llama-2, on the software development
              landscape. It investigates the challenges associated with the energy consumption of LLMs, particularly
              when represented as quantized models - simplified (and smaller) models that are easier to run on hardware with limited resources - analysing their performance and resource requirements across different
              programming languages and prompt engineering techniques.<br /><br />
              The findings showed that energy consumption and runtime varied among different LLMs based on the
              benchmark, programming language and prompting type (0-shot vs 3-shot). Overall, 3-shot prompting led to
              lower energy consumption and faster runtime than 0-shot prompting. Pass@10 outperformed pass@1, and
              SacreBLEU and GoogleBLEU scores improved with 3-shot prompting, while CodeBLEU scores decreased.<br /><br />
              Additionally, the research highlights the findings from the CyberSecEval benchmark, which evaluates
              the security of generated code, revealing vulnerabilities inherent in the outputs of various LLMs. This
              underscores the critical need to consider security alongside energy efficiency and execution time when
              selecting an LLM for software development.<br /><br />
              Through an extensive analysis of LLM performance metrics, including functional correctness and code
              quality, this dissertation contributes to the advancement of sustainable software engineering practices.
              By prioritizing sustainability and security in LLM deployment, it offers a complete approach to software
              development that follows the recent, but important, sustainable principles in software development.
            </div>
            <div className="project-buttons">
              <Link to="/msc-thesis" className="rounded-button">Webpage</Link>
            </div>
          </div>
        </>
      )}

      {activeYear === 'Other' && (
        <>
          <div className="project-item">
            <div className="project-title">Hackathon Bugsbyte 2024</div>
            <div className="project-description">
              This project was developed during the Hackathon Bugsbyte 2024 held at the Altice Forum in Braga, Portugal. Over the course of 48 hours, our team created a simple application aimed at facilitating the search for cultural events across various districts of Portugal. The application features a modern user interface designed to enhance the user experience.
            </div>
            <div className="slideshow-container">
              <button className="prev" onClick={() => goToPreviousSlide(hackathonImages)}>&lt;</button>
              <div className="slideshow-item">
                <img src={hackathonImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} onClick={() => openImageInNewTab(hackathonImages[currentIndex])} />
              </div>
              <button className="next" onClick={() => goToNextSlide(hackathonImages)}>&gt;</button>
            </div>
            <div className="project-buttons">
              <a href="https://github.com/simaobarroso/hackthon-bugsbyte" className="rounded-button">Github repository</a>
            </div>
          </div>
        </>
      )}
      <div style={{ marginBottom: '100px' }}></div>
    </div>
  );
};

export default AcademicProjects;