import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './Talks.css';

const Talks = () => {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);

  const togglePdfPopup = () => {
    setShowPdfPopup((prevState) => !prevState);
  };

  const toggleImageGallery = () => {
    setShowImageGallery((prevState) => !prevState);
  };

  const pdfItems = [
    { id: 1, name: 'PDF File 1', url: 'https://example.com/pdf1.pdf' },
    { id: 2, name: 'PDF File 2', url: 'https://example.com/pdf2.pdf' },
    // Add more PDF items as needed
  ];

  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    // Add more image URLs as needed
  ];

  const handlePdfItemClick = (url) => {
    window.open(url, '_blank');
  };

  const handleNextImage = () => {
    // Implement the logic to navigate to the next image
  };

  const handlePrevImage = () => {
    // Implement the logic to navigate to the previous image
  };

  return (
    <>
      <div style={{ marginBottom: '100px' }}></div>
      <div className="talk-item">
        <div className="talk-title">Title 1</div>
        <div className="talk-description">Description 1</div>
        <div className="talk-buttons">
          <button className="rounded-button" onClick={togglePdfPopup}>Select PDF</button>
          <button className="rounded-button" onClick={toggleImageGallery}>Open Gallery</button>
        </div>
      </div>

      <div className="talk-item">
        <div className="talk-title">Title 2</div>
        <div className="talk-description">Description 2</div>
        <div className="talk-buttons">
          <button className="rounded-button" onClick={togglePdfPopup}>Select PDF</button>
          <button className="rounded-button" onClick={toggleImageGallery}>Open Gallery</button>
        </div>
      </div>

      {/* Add more items as needed */}

      {showPdfPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close-btn" onClick={togglePdfPopup}>X</button>
            <ul className="pdf-list">
              {pdfItems.map((item) => (
                <li
                  key={item.id}
                  className="pdf-list-item"
                  onClick={() => handlePdfItemClick(item.url)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {showImageGallery && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close-btn" onClick={toggleImageGallery}>X</button>
            <div className="image-gallery">
              {/* Display the current image */}
              <img src={images[0]} alt="Gallery" />

              {/* Add navigation buttons */}
              <button className="nav-btn prev-btn" onClick={handlePrevImage}>
                Previous
              </button>
              <button className="nav-btn next-btn" onClick={handleNextImage}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Talks;
