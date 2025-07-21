import React from 'react';
import { pdfjs } from 'react-pdf';
import './Certificates.css';

// Ensure pdfjs worker is set correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function extractYear(str) {
  const match = str.match(/\b(20\d{2}|19\d{2})\b/);
  return match ? match[0] : '';
}

const certificates = [
  {
    title: "English C1 Certificate",
    description: "Obtained from BabeliUM organization - from October 2021 to February 2022",
    year: "2022",
    files: [
      { label: "Open PDF Certificate", url: "assets/docs/English_C1_Simao_Cunha.pdf" }
    ]
  },
  {
    title: "Sustrainable Summer School 2023 - Attendance and Students Workshop and Poster Session Certificates",
    description: "Obtained from University of Coimbra - from July 11, 2023 to July 14, 2023",
    year: "2023",
    files: [
      { label: "Attendance Certificate", url: "assets/docs/sustrainable-summer-school-2023/attendance_certificate.pdf" },
      { label: "Students Workshop and Poster Session Certificate", url: "assets/docs/sustrainable-summer-school-2023/students_workshop_certificate.pdf" }
    ]
  },
  {
    title: "1st UMinho Research & Innovation Open Days 2024 - Pitch and Poster Session Certificates",
    description: "Obtained from University of Minho - January 2024",
    year: "2024",
    files: [
      { label: "Pitch Certificate", url: "assets/docs/uminho-open-days-2024/pitch_certificate.pdf" },
      { label: "Poster Certificate", url: "assets/docs/uminho-open-days-2024/poster_certificate.pdf" }
    ]
  },
  {
    title: "Cerciras Training School 2024 - Attendance Certificate",
    description: "Obtained from University of Klagenfurt - August 2024",
    year: "2024",
    files: [
      { label: "Attendance Certificate", url: "assets/docs/cerciras-training-school-2024/certificate.pdf" }
    ]
  },
  {
    title: "Greening AI with Software Engineering 2025 - Attendance Certificate",
    description: "Obtained from CECAM & Lorentz Center - February 2025",
    year: "2025",
    files: [
      { label: "Attendance Certificate", url: "assets/docs/cecam-lorentz-greening-ai-2025/certificate.pdf" }
    ]
  }
];

// Ordena os certificados do mais recente para o mais antigo
const sortedCertificates = [...certificates].sort((a, b) => {
  const yearA = parseInt(a.year || extractYear(a.description) || extractYear(a.title)) || 0;
  const yearB = parseInt(b.year || extractYear(b.description) || extractYear(b.title)) || 0;
  return yearB - yearA;
});

const Certificates = () => {
  const handlePdfButtonClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="certificates-container">
      <div className="certificate-list">
        {sortedCertificates.map((cert, idx) => (
          <div className="certificate-item" key={idx}>
            <div className="certificate-content">
              <div className="certificate-title">
                {cert.title}
                <span className="certificate-year">{cert.year || extractYear(cert.description) || extractYear(cert.title)}</span>
              </div>
              <div className="certificate-description">{cert.description}</div>
              <div className="certificate-buttons">
                {cert.files.map((file, i) => (
                  <button
                    className="rounded-button"
                    key={i}
                    onClick={() => handlePdfButtonClick(file.url)}
                  >
                    {file.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;