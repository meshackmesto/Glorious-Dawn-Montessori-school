import React from 'react';
import '../style/ArtPage.css';

const ArtPage = () => {
  const artPieces = [
    {
      title: "Sunset Over the Hills",
      description: "A beautiful depiction of a sunset over rolling hills, showcasing the use of warm colors and soft brush strokes.",
      imageUrl: "path-to-art1.jpg",
      artist: "Jane Doe",
      grade: "Grade 3",
    },
    {
      title: "Ocean Waves",
      description: "An energetic and vibrant painting capturing the movement of ocean waves, using cool tones and dynamic lines.",
      imageUrl: "path-to-art2.jpg",
      artist: "John Smith",
      grade: "Grade 5",
    },
    {
      title: "Spring Blossoms",
      description: "A delicate portrayal of spring flowers in bloom, with attention to detail and a bright color palette.",
      imageUrl: "path-to-art3.jpg",
      artist: "Alice Johnson",
      grade: "Grade 4",
    },
    // Add more art pieces here
  ];

  return (
    <div className="art-page">
      <h1>Children's Art Gallery</h1>
      <div className="art-gallery">
        {artPieces.map((art, index) => (
          <div className="art-card" key={index}>
            <img src={art.imageUrl} alt={art.title} />
            <h2>{art.title}</h2>
            <p>{art.description}</p>
            <p><strong>Artist:</strong> {art.artist}</p>
            <p><strong>Grade:</strong> {art.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtPage;
