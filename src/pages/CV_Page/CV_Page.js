import React, { useRef, useState, useEffect } from 'react';
import { FiDownload, FiGlobe } from 'react-icons/fi'; // Importar ícones do React Icons
import { FaCalendar, FaGithub, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

import html2pdf from 'html2pdf.js';
import './CV_Page.css';

const CV_Page = () => {
    const cvRef = useRef();
    const [language, setLanguage] = useState('english');
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        // Função para carregar a imagem como base64
        const fetchProfileImage = async () => {
            try {
                const response = await fetch('https://simaocunha71.github.io/static/media/profile_image.d1cf9e7832fa3d1128e1.jpeg');
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onloadend = () => {
                    setProfileImage(reader.result);
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.error('Failed to fetch profile image:', error);
            }
        };

        // Chama a função para carregar a imagem
        fetchProfileImage();
    }, []);

    const handleDownloadPDF = () => {
        const element = cvRef.current;
        const opt = {
            margin: 0,
            filename: `CV_Simao_Pedro_Sa_Cunha_${language === 'english' ? 'EN' : 'PT'}.pdf`, // Adicionar idioma ao nome do arquivo
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        html2pdf().from(element).set(opt).save();
    };

    const toggleLanguage = () => {
        setLanguage(language === 'english' ? 'portuguese' : 'english');
    };

    return (
        <>
            <div style={{ marginBottom: '75px' }}></div>
            <div className="cv-buttons">
                <button onClick={toggleLanguage}><FiGlobe /> {language === 'english' ? 'Portuguese' : 'English'}</button>
                <button onClick={handleDownloadPDF}><FiDownload /> Download PDF</button>
            </div>
            <div className="cv-wrapper">
                <div className="cv-container" ref={cvRef}>
                    <div className="cv-personal-info">
                        <div className="cv-photo">
                            {profileImage && <img src={profileImage} alt="Simão Pedro Sá Cunha" />}
                            <h1>Simão Pedro Sá Cunha</h1>
                        </div>
                        <div className="cv-details">
                            <p><FaCalendar /> <span className="icon-text">07/01/2001</span></p>
                            <p><FaEnvelope /> <span className="icon-text"><a href="mailto:simaopscunha@outlook.pt">simaopscunha@outlook.pt</a></span></p>
                            <p><FaGithub /> <span className="icon-text"><a href="https://github.com/simaocunha71">github.com/simaocunha71</a></span></p>
                            <p><FaLinkedin /> <span className="icon-text"><a href="https://www.linkedin.com/in/simão-cunha-379785202/">linkedin.com/in/simão-cunha-379785202/</a></span></p>
                            <p><FaGlobe /> <span className="icon-text"><a href="https://simaocunha71.github.io">simaocunha71.github.io</a></span></p>
                            <p><FaMapMarkerAlt /> <span className="icon-text">Vila Nova de Famalicão - Braga, Portugal</span></p>
                        </div>
                    </div>

                    <section className="cv-section">
                        <h2>Work Experience</h2>
                        <div className="cv-job">
                            <h3>Summer Internship at Accenture</h3>
                            <p>11/07/2022 – 05/08/2022, Braga, Portugal</p>
                            <ul>
                                <li>Introduction to Google Cloud Platform</li>
                                <li>Data Fusion instance creation and JSON file upload with a customized pipeline configuration in a Cloud Build file written in YAML</li>
                                <li>Agile Scrum Methodology applied in the entire internship</li>
                            </ul>
                        </div>
                        <div className="cv-job">
                            <h3>Summer Internship at Bosch Portugal</h3>
                            <p>17/07/2023 – 15/09/2023, Braga, Portugal</p>
                            <ul>
                                <li>Applied machine learning and deep learning techniques to develop a system for detecting delaminations.</li>
                                <li>Implemented Machine learning models using Python libraries such as Scikit-learn (Sklearn) and Deep Learning models using Deep Learning Halcon by MVTEC to build robust detection algorithms.</li>
                                <li>Conducted image processing tasks using Halcon from MVTEC to enhance data preprocessing.</li>
                                <li>Contributed to internal software development projects.</li>
                                <li>Gained foundational knowledge in computer vision.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="cv-section">
                        <h2>Education and Training</h2>
                        <div className="cv-education">
                            <h3>Secondary Education</h3>
                            <p>09/2012 – 07/2019, Escola Cooperativa Vale S. Cosme - Didáxis</p>
                        </div>
                        <div className="cv-education">
                            <h3>Integrated Masters in Software Engineering (Bachelor + Master)</h3>
                            <p>09/2019 – Present, University of Minho</p>
                        </div>
                    </section>

                    <section className="cv-section">
                        <h2>Language Skills</h2>
                        <p>Portuguese (Native), English (C1 - Proficient)</p>
                    </section>

                    <section className="cv-section">
                        <h2>Digital Skills</h2>
                        <div className="cv-digital-skills">
                            <div className="cv-skill-button">Haskell</div>
                            <div className="cv-skill-button">C</div>
                            <div className="cv-skill-button">Java</div>
                            <div className="cv-skill-button">LaTex</div>
                            <div className="cv-skill-button">Prolog</div>
                            <div className="cv-skill-button">Python</div>
                            <div className="cv-skill-button">React Native</div>
                            <div className="cv-skill-button">Machine Learning</div>
                            <div className="cv-skill-button">Data Science</div>


                        </div>
                    </section>


                    <section className="cv-section">
                        <h2>Additional Information</h2>
                        <ul>
                            <li>Chess Member of Associação Académica Didáxis (A2D) - from 2012 to 2019</li>
                            <li>Table Tennis Member of Associação Académica Didáxis (A2D) - from 2017 to 2019</li>
                            <li>Certificate English C1 Obtained from BabeliUM organization - from October 2021 until now</li>
                            <li>Agile for Software Development Obtained from SkillSoft - from August 2022 until now</li>
                            <li>Google Cloud Computing Foundation Obtained from Alison - Empower Yourself - from August 2022 until now</li>
                            <li>Sustainable Summer School 2023 - Students Workshop and Poster Session Certificate Obtained from University of Coimbra - July 2023</li>
                        </ul>
                    </section>
                </div>
            </div>
            <div style={{ marginBottom: '75px' }}></div>
        </>
    );
}

export default CV_Page;
