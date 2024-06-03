import React, { useRef, useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi'; // Importar ícones do React Icons
import { FaCalendar, FaGithub, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
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
                    "Introduction to Google Cloud Platform",
                    "Data Fusion instance creation and JSON file upload with a customized pipeline configuration in a Cloud Build file written in YAML",
                    "Agile Scrum Methodology applied in the entire internship"
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
                degree: "Secondary Education",
                dates: "09/2012 - 07/2019",
                institution: "Escola Cooperativa Vale S. Cosme - Didáxis"
            },
            {
                degree: "Integrated Masters in Software Engineering (Bachelor + Master)",
                dates: "09/2019 - Present",
                institution: "University of Minho"
            }
        ],
        language_skills: [
            {
                language: "Portuguese",
                level: "Native"
            },
            {
                language: "English",
                level: "C1 - Proficient"
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
            "Data Science"
        ],
        additional_information: [
            "Chess Member of Associação Académica Didáxis (A2D) - from 2012 to 2019",
            "Table Tennis Member of Associação Académica Didáxis (A2D) - from 2017 to 2019",
            "Certificate English C1 Obtained from BabeliUM organization - from October 2021 until now",
            "Agile for Software Development Obtained from SkillSoft - from August 2022 until now",
            "Google Cloud Computing Foundation Obtained from Alison - Empower Yourself - from August 2022 until now",
            "Sustainable Summer School 2023 - Students Workshop and Poster Session Certificate Obtained from University of Coimbra - July 2023"
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
                    "Introdução à Google Cloud Platform",
                    "Criação de instâncias de Data Fusion e upload de arquivo JSON com uma configuração de pipeline personalizada em um arquivo Cloud Build escrito em YAML",
                    "Metodologia Agile Scrum aplicada durante todo o estágio"
                ]
            },
            {
                position: "Estágio de Verão na Bosch Portugal",
                dates: "17/07/2023 - 15/09/2023",
                location: "Braga, Portugal",
                responsibilities: [
                    "Aplicação de técnicas de aprendizado de máquina e deep learning para desenvolver um sistema de detecção de delaminações.",
                    "Implementação de modelos de aprendizado de máquina usando bibliotecas Python como Scikit-learn (Sklearn) e modelos de Deep Learning usando Deep Learning Halcon da MVTEC para construir algoritmos de detecção robustos.",
                    "Realização de tarefas de processamento de imagem usando o Halcon da MVTEC para melhorar a pré-processamento de dados.",
                    "Contribuição para projetos internos de desenvolvimento de software.",
                    "Aquisição de conhecimentos fundamentais em visão computacional."
                ]
            }
        ],
        education: [
            {
                degree: "Educação Secundária",
                dates: "09/2012 - 07/2019",
                institution: "Escola Cooperativa Vale S. Cosme - Didáxis"
            },
            {
                degree: "Mestrado Integrado em Engenharia de Software (Licenciatura + Mestrado)",
                dates: "09/2019 - Presente",
                institution: "Universidade do Minho"
            }
        ],
        language_skills: [
            {
                language: "Português",
                level: "Nativo"
            },
            {
                language: "Inglês",
                level: "C1 - Proficiente"
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
            "Aprendizado de Máquina",
            "Ciência de Dados"
        ],
        additional_information: [
            "Membro de Xadrez da Associação Académica Didáxis (A2D) - de 2012 a 2019",
            "Membro de Tênis de Mesa da Associação Académica Didáxis (A2D) - de 2017 a 2019",
            "Certificado de Inglês C1 Obtido da organização BabeliUM - de outubro de 2021 até agora",
            "Ágil para Desenvolvimento de Software Obtido pela SkillSoft - de agosto de 2022 até agora",
            "Fundação Google Cloud Computing Obtida pela Alison - Empower Yourself - de agosto de 2022 até agora",
            "Escola de Verão Sustentável 2023 - Certificado de Oficina de Estudantes e Sessão de Pôsteres Obtido pela Universidade de Coimbra - julho de 2023"
        ]
    };

    // Seleciona os dados do CV baseado no idioma selecionado
    const cvData = language === 'portuguese' ? cvData_PT : cvData_EN;

    const experienceTitle = language === 'portuguese' ? 'Experiência Profissional' : 'Professional Experience';
    const educationTitle = language === 'portuguese' ? 'Educação e Formação' : 'Education and Training';
    const langsTitle = language === 'portuguese' ? 'Competências Linguísticas' : 'Language Skills';
    const digitalTitle = language === 'portuguese' ? 'Competências Digitais' : 'Digital Skills';
    const infoaddTitle = language === 'portuguese' ? 'Outras informações' : 'Other informations';

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
                            <h1>{cvData.personal_info.name}</h1>
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
                                <p>{experience.dates}, {experience.location}</p>
                                <ul>
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
                                <h3>{edu.degree}</h3>
                                <p>{edu.dates}, {edu.institution}</p>
                            </div>
                        ))}
                    </section>

                    <section className="cv-section">
                        <h2>{langsTitle}</h2>
                        <div className="cv-lang-buttons">
                            {cvData.language_skills.map((lang, index) => (
                                <div key={index} className="cv-lang-button">
                                    <Flag className="flag" code={lang.language === "Portuguese" || lang.language === "Português" ? "PT" : "GB"} />
                                    <p>{lang.language} ({lang.level})</p>
                                </div>
                            ))}
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
                        <h2>{infoaddTitle}</h2>
                        <ul>
                            {cvData.additional_information.map((info, index) => (
                                <li key={index}>{info}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            </div>
            <div style={{ marginBottom: '75px' }}></div>
        </>
    );
}

export default CV_Page;
