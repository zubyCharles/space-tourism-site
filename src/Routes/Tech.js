import React, { useState } from 'react';
import '../sass/_tech.scss';
import Navbar from '../components/Navbar';
import techData from '../data/tech.json';

const { technology } = techData;

const Tech = () => {
  const [currentTab, setTab] = useState('vehicle');

  const changeCurrentTab = (newTab) =>
    newTab === currentTab ? 'active' : null;

  return (
    <section className="tech-page">
      <Navbar />
      <div className="header">
        <h1>03 &nbsp; SPACE LAUNCH 101</h1>
      </div>
      <div className="tabs">
        <button
          className={changeCurrentTab('vehicle')}
          onClick={() => setTab('vehicle')}
        >
          1
        </button>
        <button
          className={changeCurrentTab('port')}
          onClick={() => setTab('port')}
        >
          2
        </button>
        <button
          className={changeCurrentTab('capsule')}
          onClick={() => setTab('capsule')}
        >
          3
        </button>
      </div>
      <div className={`tech ${currentTab}`}>
        {technology.map((tech) => (
          <div key={tech.id} className="tech-piece">
            <div className="tech-image">
              <img src={tech.images.landscape} alt={tech.name} />
            </div>
            <div className="text">
              <div className="tech-name">
                <p>THE TERMINOLOGY...</p>
                <h1>{tech.name}</h1>
              </div>
              <div className="tech-description">
                <p>{tech.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
