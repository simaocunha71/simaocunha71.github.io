import React, { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import Flag from 'react-world-flags';

import './CV_Page.css';

const CV_Page = () => {
    const [language, setLanguage] = useState('english');
    const [pdfUrl, setPdfUrl] = useState('');
    const location = useLocation();

    console.log('Current path:', location.pathname);  // Isso vai printar no console do navegador, não no terminal.

    useEffect(() => {
        // Definindo os caminhos corretos para os PDFs
        const pdfPaths = {
            english: 'Curriculum_Vitae_EN.pdf',  // Caminho simplificado se o PDF estiver na pasta public
            portuguese: 'Curriculum_Vitae_PT.pdf'
        };

        // Define a URL do PDF com base na linguagem selecionada
        setPdfUrl(pdfPaths[language]);
    }, [language]);

    const handleDownloadPDF = () => {
        if (pdfUrl) {
            window.open(pdfUrl, '_blank');
        }
    };

    return (
        <>
            <div style={{ marginBottom: '45px' }}></div>
            <div className="cv-wrapper">
                <div className="cv-buttons">
                    <div className="language-buttons">
                        <button 
                            onClick={() => setLanguage('portuguese')} 
                            className={`lang-button ${language === 'portuguese' ? 'active' : 'inactive'}`}
                        >
                            <Flag code="PT" className="flag" />
                        </button>
                        <button 
                            onClick={() => setLanguage('english')} 
                            className={`lang-button ${language === 'english' ? 'active' : 'inactive'}`}
                        >
                            <Flag code="GB" className="flag" />
                        </button>
                    </div>
                    <button onClick={handleDownloadPDF}>
                        <FiDownload /> Download PDF
                    </button>
                </div>
                <div className="cv-container">
                    <iframe 
                        src={pdfUrl} 
                        title="CV" 
                        style={{ width: '100%', height: '85vh', border: 'none' }}
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
            <div style={{ marginBottom: '0px' }}></div>
        </>
    );
};

export default CV_Page;
