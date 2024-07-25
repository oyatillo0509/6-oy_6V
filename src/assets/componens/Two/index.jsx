import React, { useState, useEffect } from "react";
import "./index.css";

const PhotoCards = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [startId, setStartId] = useState("");
  const [endId, setEndId] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  const handleFilter = () => {
    const start = parseInt(startId, 10);
    const end = parseInt(endId, 10);
    const filtered = photos.filter(
      (photo) => photo.id >= start && photo.id <= end
    );
    setFilteredPhotos(filtered);
  };

  return (
    <div className="photo-container">
      <div className="filter-container">
        <input
          type="number"
          placeholder="Start ID"
          value={startId}
          onChange={(e) => setStartId(e.target.value)}
        />
        <input
          type="number"
          placeholder="End ID"
          value={endId}
          onChange={(e) => setEndId(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="cards-container">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="card">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <div className="card-content">
              <h3>Title: <br />{photo.title}</h3> 
              <h4>Url: <br /> { photo.url}</h4>
              <p>ID: {photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCards;
