import React, { useRef, useState, useEffect } from 'react';
import { FiDownload, FiPaperclip } from 'react-icons/fi'; // Importar ícones do React Icons
import { FaCalendar, FaGithub, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGlobe, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import Flag from 'react-world-flags';

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
    
    const setPortuguese = () => {
        setLanguage('portuguese');
    };

    const setEnglish = () => {
        setLanguage('english');
    };

    const languageSkillLevels = {
        "Portuguese": 5,
        "Português": 5,
        "Inglês": 4,
        "English": 4
    };

    const maxSkillLevel = 5;

    // Dicionário com os dados do CV
    const cvData_EN = {
        personal_info: {
            name: "Simão Pedro Sá Cunha",
            date_of_birth: "07/01/2001",
            email: "simaopscunha@outlook.pt",
            github: "https://github.com/simaocunha71",
            linkedin: "https://www.linkedin.com/in/simão-cunha-379785202/",
            website: "https://simaocunha71.github.io",
            location: "Vila Nova de Famalicão - Braga, Portugal"
        },
        work_experience: [
            {
                position: "Summer Internship at Accenture",
                dates: "11/07/2022 - 05/08/2022",
                location: "Braga, Portugal",
                responsibilities: [
                    "Introduction to Google Cloud Platform.",
                    "Data Fusion instance creation and JSON file upload with a customized pipeline configuration in a Cloud Build file written in YAML.",
                    "Agile Scrum Methodology applied in the entire internship."
                ]
            },
            {
                position: "Summer Internship at Bosch Portugal",
                dates: "17/07/2023 - 15/09/2023",
                location: "Braga, Portugal",
                responsibilities: [
                    "Applied machine learning and deep learning techniques to develop a system for detecting delaminations.",
                    "Implemented Machine learning models using Python libraries such as Scikit-learn (Sklearn) and Deep Learning models using Deep Learning Halcon by MVTEC to build robust detection algorithms.",
                    "Conducted image processing tasks using Halcon from MVTEC to enhance data preprocessing.",
                    "Contributed to internal software development projects.",
                    "Gained foundational knowledge in computer vision."
                ]
            }
        ],
        education: [
            {
                degree: "Basic and Secondary Education",
                dates: "September 2012 - July 2019",
                institution: "Escola Cooperativa Vale S. Cosme - Didáxis, Vila Nova de Famalicão, Portugal"
            },
            {
                degree: "Integrated Master in Informatics Engineering",
                dates: "September 2019 - Present",
                institution: "University of Minho, Braga, Portugal"
            }
        ],
        language_skills: [
            {
                language: "Portuguese",
                level: "Native"
            },
            {
                language: "English",
                level: "C1 - Advanced"
            }
        ],
        digital_skills: [
            "Haskell",
            "C",
            "Java",
            "LaTex",
            "Prolog",
            "Python",
            "React Native",
            "Machine Learning",
            "Deep Learning",
            "Image Processing",
            "Computer Vision",
            "Data Science",
            "Microsoft PowerBI",
            "Agile Scrum",
            "Google Cloud Platform",
            "Git/Github"
        ],

        certificates_and_prizes: [
            {
                certificate_name: "English C1",
                institution: "BabeliUM",
                dates: "October 2021 until now",
                urls: [
                    { name: "English C1", url: "https://simaocunha71.github.io/static/media/English_C1_Simao_Cunha.59fc0c2dd5d779c7be28.pdf" }
                ]
            },
            {
                certificate_name: "Sustainable Summer School 2023 - Students Workshop and Poster Session",
                institution: "University of Coimbra",
                dates: "July 2023",
                urls: [
                    { name: 'Attendance', url: "https://simaocunha71.github.io/static/media/Sustrainable_Attendence_certificate.530b9eb7f0322a9e97d2.pdf" },
                    { name: 'Students Workshop and Poster Session', url: "https://simaocunha71.github.io/static/media/Sustrainable_Students_Workshop_certificate.13450a3020bf0fb0d3eb.pdf" }
                ]      
            },
            {
                certificate_name: "1st UMinho Research & Innovation Open Days 2024 - Pitch and Poster Session",
                institution: "University of Minho",
                dates: "January 2024",
                urls: [
                    {name: 'Pitch Session', url: "https://simaocunha71.github.io/static/media/UMinhoOpenDays_Pitch.1d518159200dd7c5cd10.pdf"},
                    {name: 'Poster Session', url: "https://simaocunha71.github.io/static/media/UMinhoOpenDays_Poster.80402e33f5cae743c6c6.pdf"}
                ]
            }
        ]

    };

    /// Dicionário com os dados do CV em Português
    const cvData_PT = {
        personal_info: {
            name: "Simão Pedro Sá Cunha",
            date_of_birth: "07/01/2001",
            email: "simaopscunha@outlook.pt",
            github: "https://github.com/simaocunha71",
            linkedin: "https://www.linkedin.com/in/simão-cunha-379785202/",
            website: "https://simaocunha71.github.io",
            location: "Vila Nova de Famalicão - Braga, Portugal"
        },
        work_experience: [
            {
                position: "Estágio de Verão na Accenture",
                dates: "11/07/2022 - 05/08/2022",
                location: "Braga, Portugal",
                responsibilities: [
                    "Introdução ap Google Cloud Platform.",
                    "Criação de uma instância Data Fusion e upload de um ficheiro JSON com uma configuração de uma pipeline personalizada através de um ficheiro Cloud Build escrito em YAML.",
                    "Metodologia Agile Scrum aplicada durante todo o estágio."
                ]
            },
            {
                position: "Estágio de Verão na Bosch Portugal",
                dates: "17/07/2023 - 15/09/2023",
                location: "Braga, Portugal",
                responsibilities: [
                    "Aplicação de técnicas de Machine Learning e de Deep Learning para desenvolver um sistema capaz de detetar delaminações.",
                    "Implementação de modelos de Machine Learning usando bibliotecas do Python tais como Scikit - learn (Sklearn) e modelos de Deep Learning usando o software Deep Learning Halcon da empresa MVTEC.",
                    "Condução de tarefas de processamento de imagem usando o software Halcon da empresa MVTEC para o pré - processamento dos dados.",
                    "Contribuição para o desenvolvimento de software interno.",
                    "Conhecimentos básicos sobre visão por computador."
                ]
            }
        ],
        education: [
            {
                degree: "Ensino Básico e Secundário",
                dates: "Setembro 2012 - Julho 2019",
                institution: "Escola Cooperativa Vale S. Cosme - Didáxis, Vila Nova de Famalicão, Portugal"
            },
            {
                degree: "Mestrado Integrado em Engenharia Informática",
                dates: "Setembro 2019 - Presente",
                institution: "Universidade do Minho, Braga, Portugal"
            }
        ],
        language_skills: [
            {
                language: "Português",
                level: "Nativo"
            },
            {
                language: "Inglês",
                level: "C1 - Avançado"
            }
        ],
        digital_skills: [
            "Haskell",
            "C",
            "Java",
            "LaTex",
            "Prolog",
            "Python",
            "React Native",
            "Aprendizagem Automática",
            "Aprendizagem Profunda",
            "Processamento de Imagem",
            "Visão por Computador",
            "Ciência de dados",
            "Microsoft PowerBI",
            "Agile Scrum",
            "Google Cloud Platform",
            "Git/Github"
        ],

        certificates_and_prizes: [
            {
                certificate_name : "Inglês C1",
                institution : "BabeliUM",
                dates : "outubro de 2021 até agora",
                urls: [
                    {name: "Inglês C1", url: "https://simaocunha71.github.io/static/media/English_C1_Simao_Cunha.59fc0c2dd5d779c7be28.pdf"}
                ]
            },
            {
                certificate_name: "Sustainable Summer School 2023 - Students Workshop and Poster Session",
                institution: "Universidade de Coimbra",
                dates: "julho de 2023",
                urls: [
                    { name: 'Participação', url: "https://simaocunha71.github.io/static/media/Sustrainable_Attendence_certificate.530b9eb7f0322a9e97d2.pdf" },
                    { name: 'Sessão de Posters e Workshop de Alunos', url: "https://simaocunha71.github.io/static/media/Sustrainable_Students_Workshop_certificate.13450a3020bf0fb0d3eb.pdf" }
                ]              
            },
            {
                certificate_name: "1st UMinho Research & Innovation Open Days 2024 - Pitch and Poster Session",
                institution: "Universidade do Minho",
                dates: "janeiro de 2024",
                urls: [
                    { name: 'Sessão de Pitchs', url: "https://simaocunha71.github.io/static/media/UMinhoOpenDays_Pitch.1d518159200dd7c5cd10.pdf" },
                    { name: 'Sessão de Posters', url: "https://simaocunha71.github.io/static/media/UMinhoOpenDays_Poster.80402e33f5cae743c6c6.pdf" }
                ]
            }
        ]
    };

    // Seleciona os dados do CV baseado no idioma selecionado
    const cvData = language === 'portuguese' ? cvData_PT : cvData_EN;

    const experienceTitle = language === 'portuguese' ? 'Experiência Profissional' : 'Professional Experience';
    const educationTitle = language === 'portuguese' ? 'Educação e Formação' : 'Education and Training';
    const langsTitle = language === 'portuguese' ? 'Competências Linguísticas' : 'Language Skills';
    const digitalTitle = language === 'portuguese' ? 'Competências Digitais' : 'Digital Skills';
    const cert_and_prz = language === 'portuguese' ? 'Certificados' : 'Certificates';

    return (
        <>
            <div style={{ marginBottom: '75px' }}></div>
            <div className={`cv-wrapper ${process.env.IS_PDF_GENERATION ? 'pdf-generation' : ''}`}>

            <div className="cv-buttons">
                <div className="language-buttons">
                    <button onClick={setPortuguese} className={`lang-button ${language === 'portuguese' ? 'active' : 'inactive'}`}>
                        <Flag code="PT" className="flag" />
                    </button>
                    <button onClick={setEnglish} className={`lang-button ${language === 'english' ? 'active' : 'inactive'}`}>
                        <Flag code="GB" className="flag" />
                    </button>
                </div>
                <button onClick={handleDownloadPDF}><FiDownload /> Download PDF</button>
            </div>
            <div className="cv-wrapper">
                <div className="cv-container" ref={cvRef}>
                    <div className="cv-personal-info">
                        <div className="cv-photo">
                            {profileImage && <img src={profileImage} alt="Simão Pedro Sá Cunha" />}
                            <h2>{cvData.personal_info.name}</h2>
                        </div>
                        <div className="cv-details">
                            <button><FaCalendar /><span className="icon-text">{cvData.personal_info.date_of_birth}</span></button>
                            <button><FaGlobe /><span className="icon-text"><a href={cvData.personal_info.website}>simaocunha71.github.io</a></span></button>
                            <button><FaGithub /><span className="icon-text"><a href={cvData.personal_info.github}>github.com/simaocunha71</a></span></button>
                            <button><FaEnvelope /><span className="icon-text"><a href={`mailto:${cvData.personal_info.email}`}>{cvData.personal_info.email}</a></span></button>
                            <button><FaLinkedin /><span className="icon-text"><a href={cvData.personal_info.linkedin}>linkedin.com/in/simão-cunha-379785202/</a></span></button>
                            <button><FaMapMarkerAlt /><span className="icon-text">{cvData.personal_info.location}</span></button>
                        </div>
                    </div>

                        <section className="cv-section">
                            <h2>{experienceTitle}</h2>
                            {cvData.work_experience.map((experience, index) => (
                                <div key={index} className="cv-job">
                                    <h3>{experience.position}</h3>
                                    <div className="job-info">
                                        <div><FaCalendarAlt /> {experience.dates}</div>
                                        <div><FaMapMarkerAlt /> {experience.location}</div>
                                    </div>
                                    <ul className="responsibilities-list">
                                        {experience.responsibilities.map((responsibility, i) => (
                                            <li key={i}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        <section className="cv-section">
                            <h2>{educationTitle}</h2>
                            {cvData.education.map((edu, index) => (
                                <div key={index} className="cv-education">
                                    <h3 style={{ marginBottom: '10px' }}>{edu.degree}</h3>
                                    <div className="education-info">
                                        <div><FaMapMarkerAlt /><span>{edu.institution}</span></div>
                                        <div><FaCalendarAlt /><span>{edu.dates}</span></div>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <section className="cv-section">
                            <h2>{langsTitle}</h2>
                            <div className="cv-lang-buttons">
                                {cvData.language_skills.map((lang, index) => {
                                    const filledBalls = languageSkillLevels[lang.language];
                                    const emptyBalls = maxSkillLevel - filledBalls;
                                    return (
                                        <div key={index} className="cv-lang-button">
                                            <div className="cv-lang-text">
                                                <p>{lang.language}</p>
                                                <small className="cv-lang-level">{lang.level}</small>
                                            </div>
                                            <div className="cv-skill-level">
                                                {[...Array(filledBalls)].map((_, i) => (
                                                    <span key={i} className="cv-skill-ball filled"></span>
                                                ))}
                                                {[...Array(emptyBalls)].map((_, i) => (
                                                    <span key={i} className="cv-skill-ball empty"></span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                    <section className="cv-section">
                        <h2>{digitalTitle}</h2>
                        <div className="cv-digital-skills">
                            {cvData.digital_skills.map((skill, index) => (
                                <div key={index} className="cv-skill-button">{skill}</div>
                            ))}
                        </div>
                    </section>

                        <section className="cv-section">
                            <h2>{cert_and_prz}</h2>
                            {cvData.certificates_and_prizes.map((cp, index) => (
                                <div key={index} className="cv-education">
                                    <h3 style={{ marginBottom: '10px' }}>{cp.certificate_name}</h3>
                                    <div className="education-info">
                                        <div><FaUniversity /><span>{cp.institution}</span></div>
                                        <div><FaCalendarAlt /><span>{cp.dates}</span></div>
                                        <div className="url-info">
                                            {<FiPaperclip />} {/* Mostra o clipe apenas se houver mais de um URL */}
                                            <div className="button-container">
                                                {cp.urls.map((urlObj, i) => (
                                                    <a key={i} href={urlObj.url} target="_blank" rel="noopener noreferrer">
                                                        <button className="cv-cert-button">
                                                            {urlObj.name || urlObj.url} {/* Mostra o nome personalizado se fornecido, senão o URL */}
                                                        </button>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>




                </div>
            </div>
            </div>
            <div style={{ marginBottom: '75px' }}></div>
        </>
    );
}

export default CV_Page;
