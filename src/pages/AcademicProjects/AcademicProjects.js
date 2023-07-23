import React from 'react';
import './AcademicProjects.css';

import presentationPDF from '../../assets/docs/TDS_Entrega_PI_93262_93168_Apresentacao.pdf';
import reportPDF from '../../assets/docs/TDS_Entrega_PI_93262_93168_Relatorio.pdf';

const AcademicProjects = () => {
  return (
    <div>
      <h1>My college projects <span role="img" aria-label="floppy disk">💾</span></h1>

      <details open>
        <summary><b>Bachelor's degree <span role="img" aria-label="books">📚</span></b></summary>
  
        <h3>1st year</h3>
        <table className="project-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Language(s)</th>
              <th>Repository(ies)</th>
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

        <h3>2nd year</h3>
        <table className="project-table">
          <thead>
          <tr>
              <th>Course</th>
              <th>Language(s)</th>
              <th>Repository(ies)</th>
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

        <h3>3rd year</h3>
        <table className="project-table">
          <thead>
          <tr>
              <th>Course</th>
              <th>Language(s)</th>
              <th>Repository(ies)</th>
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
      </details>

      <div style={{ marginBottom: '10px' }}></div>
      <details open>
        <summary><b>Master's degree <span role="img" aria-label="mortar board">🎓</span></b></summary>
  
        <h4 style={{ textAlign: 'center' }}>Master's courses area #1: Software Development, Validation and Maintenance</h4>
      <table className="project-table">
        <thead>
          <tr>
          <th>Course</th>
            <th>Language(s)</th>
            <th>Repository(ies)</th>
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
                <a href= {reportPDF} className="rounded-button">Investigation Project Report</a>
                <a href= {presentationPDF} className="rounded-button">Investigation Project Presentation</a>
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
            <th>Language(s)</th>
            <th>Repository(ies)</th>
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
      </details>
      <div style={{ marginBottom: '100px' }}></div>
    </div>
  );
};

export default AcademicProjects;
