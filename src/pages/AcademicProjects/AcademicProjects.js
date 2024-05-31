import React, { useState } from 'react';
import './AcademicProjects.css';

//TDS documents
import TDS_presentationPDF from '../../assets/docs/TDS_Entrega_PI_93262_93168_Apresentacao.pdf';
import TDS_reportPDF from '../../assets/docs/TDS_Entrega_PI_93262_93168_Relatorio.pdf';

//PEI documents
import PEI_competicao from '../../assets/docs/PEI/competicao.png';
import PEI_competicoes from '../../assets/docs/PEI/competicoes.png';
import PEI_jogador from '../../assets/docs/PEI/jogador.png';
import PEI_jogo from '../../assets/docs/PEI/jogo.png';
import PEI_equipa from '../../assets/docs/PEI/equipa.png';
import PEI_filter from '../../assets/docs/PEI/filter.png';

//RPD documents
import RPD_presentationPDF from '../../assets/docs/apresentacao_rpd.pdf';
import RPD_reportPDF from '../../assets/docs/rpd.pdf';

//Hackathon Bugsbyte images
import HB2024_main from '../../assets/docs/hackathon_bugsbyte_2024/mainpage.png';
import HB2024_list from '../../assets/docs/hackathon_bugsbyte_2024/listevents.png';
import HB2024_eventpage from '../../assets/docs/hackathon_bugsbyte_2024/eventpage.png';

const AcademicProjects = () => {
  // State variables to manage table visibility for each year
  const [activeYear, setActiveYear] = useState('5th'); // 5th year is active by default

  // Function to toggle visibility for a specific year
  const toggleYearVisibility = (year) => {
    if (activeYear !== year) {
      setActiveYear(year);
    }
  };

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const images = [PEI_competicoes, PEI_competicao, PEI_jogador, PEI_jogo, PEI_equipa, PEI_filter];
  const hackathonImages = [HB2024_main, HB2024_list, HB2024_eventpage];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = (images) => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = (images) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ marginTop: '70px' }}>

      <div className="button-container_ap">
        {/* Buttons for each year */}
        <button className={`rounded-button_2 ${activeYear === '1st' ? 'active' : ''}`} onClick={() => toggleYearVisibility('1st')}>1st Year</button>
        <button className={`rounded-button_2 ${activeYear === '2nd' ? 'active' : ''}`} onClick={() => toggleYearVisibility('2nd')}>2nd Year</button>
        <button className={`rounded-button_2 ${activeYear === '3rd' ? 'active' : ''}`} onClick={() => toggleYearVisibility('3rd')}>3rd Year</button>
        <button className={`rounded-button_2 ${activeYear === '4th' ? 'active' : ''}`} onClick={() => toggleYearVisibility('4th')}>4th Year</button>
        <button className={`rounded-button_2 ${activeYear === '5th' ? 'active' : ''}`} onClick={() => toggleYearVisibility('5th')}>5th Year</button>
        <button className={`rounded-button_2 ${activeYear === 'Other' ? 'active' : ''}`} onClick={() => toggleYearVisibility('Other')}>Other</button>

      </div>

        {/* Table for 1st year */}
        {activeYear === '1st' && (
          <>
            <h3>Bachelor's 1st year</h3>

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
              <td>
                <a href="https://github.com/simaocunha71/PF_Haskell" className="rounded-button">Exercises</a>
              </td>

            </tr>
            <tr>
              <td>Informatic Labs I</td>
              <td><img src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell" /></td>
              <td>
                <a href="https://github.com/simaocunha71/LI1_ExciteBike" className="rounded-button">Project</a>
              </td>

            </tr>
            <tr>
              <td>Imperative Programming</td>
              <td><img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" /></td>
              <td>
                <a href="https://github.com/simaocunha71/PI_C" className="rounded-button">Exercises</a>
              </td>

            </tr>
            <tr>
              <td>Informatic Labs II</td>
              <td><img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" /></td>
              <td>
                <a href="https://github.com/surumkata/rastros" className="rounded-button">Project</a>
              </td>
            </tr>
          </tbody>
        </table>
          </>
        )}

        {activeYear === '2nd' && (
          <>

          <h3>Bachelor's 2nd year</h3>
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
              <td>
                <a href="https://github.com/surumkata/shafa" className="rounded-button">Project</a>
              </td>
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
              <td>
                <a href="https://github.com/simaocunha71/sgr-uminho" className="rounded-button">Projects</a>
              </td>
            </tr>
            <tr>
              <td>Program Calculation</td>
              <td>
                <img src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell" />{' '}
                <img src="https://img.shields.io/badge/LaTeX-47A141?style=for-the-badge&logo=LaTeX&logoColor=white" alt="LaTeX" />
              </td>
              <td>
                <a href="https://github.com/simaocunha71/CP_Projeto" className="rounded-button">Project</a>
              </td>
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
          </>
        )}

        {activeYear === '3rd' && (
          <>
          <h3>Bachelor's 3rd year</h3>


        
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
              <td>
                <a href="https://github.com/simaocunha71/reparation-center-dss" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Distributed Systems</td>
              <td><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" /></td>
              <td>
                <a href="https://github.com/surumkata/airport-sd" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Informatic Labs IV</td>
              <td>
                <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />{' '}
                <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />{' '}
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />{' '}
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
              </td>
              <td>
                <a href="https://github.com/surumkata/addandSEEK-localizarte" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Computer Communications</td>
              <td>
                <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />{' '}
                <img src="https://img.shields.io/badge/VirtualBox-21416b?style=for-the-badge&logo=VirtualBox&logoColor=white" alt="VirtualBox" />
              </td>
              <td>
                <a href="https://github.com/simaocunha71/cc" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Language Processing</td>
              <td><img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" /></td>
              <td>
                <a href="https://github.com/simaocunha71/pl_projeto" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Computer Graphics</td>
              <td>
                <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />{' '}
                <img src="https://img.shields.io/badge/OpenGL-FFFFFF?style=for-the-badge&logo=opengl" alt="OpenGL" />
              </td>
              <td>
                <a href="https://github.com/simaocunha71/engineandgenerator3D" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Intelligent Learning and Decision Making</td>
              <td>Non applicable</td>
              <td>
                <a href="https://github.com/simaocunha71/ADI_projeto" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Operational Research</td>
              <td>Non applicable</td>
              <td>
                <a href="https://github.com/simaocunha71/IO_Projetos" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Computer Networks</td>
              <td>
                <img src="https://img.shields.io/badge/VirtualBox-21416b?style=for-the-badge&logo=VirtualBox&logoColor=white" alt="VirtualBox" />
              </td>
              <td>
                <a href="https://github.com/simaocunha71/redes-de-computadores" className="rounded-button">Assignments</a>
              </td>
            </tr>
          </tbody>
        </table>
          </>
        )}


      <div style={{ marginBottom: '10px' }}></div>

        {activeYear === '4th' && (
          <>
          <h3>Master's 4th year</h3>

        
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
              <td>
                <a href="https://github.com/simaocunha71/ghost-cloud" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Parallel Computing</td>
              <td>
                <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
              </td>
              <td>
                <a href="https://github.com/simaocunha71/kmeans-cp" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Data and Machine Learning</td>
              <td>
                <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
                <img src="https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Sklearn" />
              </td>
              <td>
                <a href="https://github.com/simaocunha71/machine_learning-daa" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Network Services Engineering</td>
              <td>
                <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
                <img src="https://img.shields.io/badge/VirtualBox-21416b?style=for-the-badge&logo=VirtualBox&logoColor=white" alt="VB" />
              </td>
              <td>
                <a href="https://github.com/simaocunha71/streaming-esr" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Formal Methods in Software Engineering</td>
              <td>Non applicable</td>
              <td>
                <a href="https://github.com/simaocunha71/mfes" className="rounded-button">Project</a>
              </td>
            </tr>
            <tr>
              <td>Software Requirements and Architectures</td>
              <td>
                <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
                <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" alt="Django" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
              </td>
              <td>
                <a href="https://github.com/surumkata/rasbet" className="rounded-button">Project</a>
              </td>
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
            <td>
                <a href="https://github.com/simaocunha71/mes_project" className="rounded-button">Project</a>
            </td>
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
                <a href= {TDS_reportPDF} className="rounded-button">Investigation Project Report</a>
                <a href= {TDS_presentationPDF} className="rounded-button">Investigation Project Presentation</a>
            </td>
          </tr>
          <tr>
            <td>Experimentation in Software Engineering</td>
            <td>
              <img src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Script" />
              <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
              <img src="https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
            </td>
            <td>
                <a href="https://github.com/simaocunha71/EnergyMeasurement" className="rounded-button">Project</a>
            </td>
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
            <td>
                <a href="https://github.com/simaocunha71/gsr" className="rounded-button">Project</a>
            </td>
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
            <td>
                <a href="https://github.com/simaocunha71/iri" className="rounded-button">Assignments</a>
            </td>
          </tr>
        </tbody>
      </table>
          </>
        )}

        {activeYear === '5th' && (
          <>
          <h3>Master's 5th year</h3>

        
        <div className="talk-item">
          <div className="talk-title">Informatics Engineering Project</div>
          <div className="talk-description">
            This project involved creating dashboards using WyScout API data in Microsoft PowerBI for Sporting Clube de Braga. 
            Below are some of the pages created in the project:
          </div>
            <div className="slideshow-container">
              <button className="prev" onClick={() => goToPreviousSlide(images)}>
                &lt;
              </button>
              <div className="slideshow-item">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} onClick={() => openImageInNewTab(images[currentIndex])} />
              </div>
              <button className="next" onClick={() => goToNextSlide(images)}>
                &gt;
              </button>

            </div>
            <div style={{ marginTop: '20px' }}></div>

          <div className="talk-buttons">
            <a href="https://github.com/realRunlo/BragaScoutingPlatform" className="rounded-button">Github repository</a>
          </div>
        </div>

        <div className="talk-item">
          <div className="talk-title">Master's Dissertation in Informatics Engineering</div>
          <div className="talk-description">
            This dissertation details the creation of a platform designed for evaluating Large Language Models
            (LLMs) through benchmarking coding tasks using well-known datasets such as Human-Eval. The primary
            goal of this platform is to assess the effectiveness and energy efficiency of LLMs in addressing diverse
            challenges, with a specific focus on code generation and software development. The document thoroughly
            examines the project's context, motivation, and objectives, emphasizing the transformative influence of
            LLMs like GPT-4 and LLAMA-2 on the field of software development. Furthermore, it delves into the
            challenges posed by the energy consumption of LLMs when represented as quantized models, analyzing
            their size and weight differences. This exploration underscores the fundamental principles of sustainability
            within software engineering. Through an extensive analysis of the performance of existing LLMs, this
            dissertation actively contributes to the progression of both efficient and sustainable software development
            practices.
          </div>
          <div className="talk-buttons">
            <a href={RPD_reportPDF} className="rounded-button">Preliminary Dissertation Report (PDR)</a>
            <a href={RPD_presentationPDF} className="rounded-button">PDR Presentation</a>
          </div>
        </div>
        </>
      )}
      {activeYear === 'Other' && (
        <>
          <div className="talk-item">
            <div className="talk-title">Hackathon Bugsbyte 2024</div>
            <div className="talk-description">
              This project was developed during the Hackathon Bugsbyte 2024 held at the Altice Forum in Braga, Portugal. <br></br>
              Over the course of 48 hours, our team created a simple application aimed at facilitating the search for cultural events across various districts of Portugal. <br></br>
              The application features a modern user interface designed to enhance the user experience.
            </div>
            <div className="slideshow-container">
              <button className="prev" onClick={() => goToPreviousSlide(hackathonImages)}>
                &lt;
              </button>
              <div className="slideshow-item">
                <img src={hackathonImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} onClick={() => openImageInNewTab(hackathonImages[currentIndex])} />
              </div>
              <button className="next" onClick={() => goToNextSlide(hackathonImages)}>
                &gt;
              </button>

            </div>
            <div style={{ marginTop: '20px' }}></div>

            <div className="talk-buttons">
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
