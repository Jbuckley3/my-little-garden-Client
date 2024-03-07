import React, { useState } from 'react';
export default function PlantQuiz({ user }){
      const [indoorOutdoor, setIndoorOutdoor] = useState('');
      const [sunlight, setSunlight] = useState('');
      const [wateringFrequency, setWateringFrequency] = useState('');
      const [careTime, setCareTime] = useState('');
      const [aesthetic, setAesthetic] = useState('');
      const [petsChildren, setPetsChildren] = useState('');
      const [decorStyle, setDecorStyle] = useState('');
      const [advancedTechniques, setAdvancedTechniques] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      return (
        <div><h1>Find your plant mate Quiz </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Will your “plant mate” live indoors or outdoors?</label>
            <select value={indoorOutdoor} onChange={(e) => setIndoorOutdoor(e.target.value)}>
              <option value="">Select one</option>
              <option value="indoors">Indoors</option>
              <option value="outdoors">Outdoors</option>
            </select>
          </div>
          <div>
            <label>How much sunlight can your living space provide to a plant?</label>
            <select value={sunlight} onChange={(e) => setSunlight(e.target.value)}>
              <option value="">Select one</option>
              <option value="lots">Lots of bright, direct sunlight</option>
              <option value="some">Some indirect sunlight</option>
              <option value="low">Low light conditions</option>
            </select>
          </div>
          <div>
            <label>How often are you willing to water your plant?</label>
            <select value={wateringFrequency} onChange={(e) => setWateringFrequency(e.target.value)}>
              <option value="">Select one</option>
              <option value="regularly">Regularly</option>
              <option value="moderate">Moderate</option>
              <option value="occasionally">Occasionally</option>
            </select>
          </div>
          <div>
            <label>How much time are you willing to spend on plant care?</label>
            <select value={careTime} onChange={(e) => setCareTime(e.target.value)}>
              <option value="">Select one</option>
              <option value="maximum">Maximum</option>
              <option value="regular">Regular</option>
              <option value="low">Low - Maintenance</option>
            </select>
          </div>
          <div>
            <label>What's your preferred plant aesthetic?</label>
            <select value={aesthetic} onChange={(e) => setAesthetic(e.target.value)}>
              <option value="">Select one</option>
              <option value="tropical">Tropical and lush</option>
              <option value="modern">Modern and sleek</option>
              <option value="wild">Wild and natural</option>
            </select>
          </div>
          <div>
            <label>Do you have pets or small children?</label>
            <select value={petsChildren} onChange={(e) => setPetsChildren(e.target.value)}>
              <option value="">Select one</option>
              <option value="none">No pets or children</option>
              <option value="both">Yes, both don't bother plants</option>
              <option value="interact">Yes, and they might interact with the plant</option>
            </select>
          </div>
          <div>
            <label>What's your interior decor style?</label>
            <select value={decorStyle} onChange={(e) => setDecorStyle(e.target.value)}>
              <option value="">Select one</option>
              <option value="minimalistic">Minimalistic</option>
              <option value="varied">Varied</option>
              <option value="cozy">Cozy and traditional</option>
            </select>
          </div>
          <div>
            <label>Are you open to trying advanced plant care techniques?</label>
            <select value={advancedTechniques} onChange={(e) => setAdvancedTechniques(e.target.value)}>
              <option value="">Select one</option>
              <option value="absolutely">Absolutely</option>
              <option value="maybe">Maybe</option>
              <option value="no">No, I prefer easy care</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        </div>
      );
    }
    
