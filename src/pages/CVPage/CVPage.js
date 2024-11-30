import React, { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Flag from "react-world-flags";

import "./CVPage.css";

const CVPage = () => {
    const [language, setLanguage] = useState("english");
    const [pdfUrl, setPdfUrl] = useState("");
    const location = useLocation();

    console.log("Current path:", location.pathname);

    useEffect(() => {
        const pdfPaths = {
            english: "Curriculum_Vitae_EN.pdf",
            portuguese: "Curriculum_Vitae_PT.pdf",
        };
        setPdfUrl(pdfPaths[language]);
    }, [language]);

    const handleDownloadPDF = () => {
        if (pdfUrl) {
            window.open(pdfUrl, "_blank");
        }
    };

    return (
        <div className="cv-wrapper">
            <div className="cv-buttons">
                <div className="language-buttons">
                    <button
                        onClick={() => setLanguage("portuguese")}
                        className={`lang-button ${language === "portuguese" ? "active" : ""}`}
                    >
                        <Flag code="PT" className="flag" />
                        Português
                    </button>
                    <button
                        onClick={() => setLanguage("english")}
                        className={`lang-button ${language === "english" ? "active" : ""}`}
                    >
                        <Flag code="GB" className="flag" />
                        English
                    </button>
                </div>
                <button onClick={handleDownloadPDF} className="download-button">
                    <FiDownload />
                    Download PDF
                </button>
            </div>
            <div className="cv-container">
                <iframe
                    src={pdfUrl}
                    title="CV"
                    style={{ width: "100%", height: "150vh", border: "none" }}
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default CVPage;
