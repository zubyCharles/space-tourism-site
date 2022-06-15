import React, { useState } from 'react';
import '../sass/_destinations.scss';
import Navbar from '../components/Navbar';
import destinationsData from '../data/destinations.json';

const { destinations } = destinationsData;

const Destinations = () => {
  const [currentTab, setTab] = useState('moon');

  const changeCurrentTab = (newTab) =>
    newTab === currentTab ? 'active' : null;

  return (
    <section className="destinations-page">
      <Navbar />
      <div className="header">
        <h1>01 &nbsp; PICK YOUR DESTINATION</h1>
      </div>
      <div className="tabs">
        <button
          className={changeCurrentTab('moon')}
          onClick={() => setTab('moon')}
        >
          MOON
        </button>
        <button
          className={changeCurrentTab('mars')}
          onClick={() => setTab('mars')}
        >
          MARS
        </button>
        <button
          className={changeCurrentTab('europa')}
          onClick={() => setTab('europa')}
        >
          EUROPA
        </button>
        <button
          className={changeCurrentTab('titan')}
          onClick={() => setTab('titan')}
        >
          TITAN
        </button>
      </div>
      <div className={`destinations ${currentTab}`}>
        {destinations.map((destination) => (
          <div key={destination.id} className="location">
            <div className="location-image">
              <img src={destination.images.png} alt={destination.name} />
            </div>
            <div className="text">
              <div className="location-name">
                <h1>{destination.name}</h1>
              </div>
              <div className="location-description">
                <p>{destination.description}</p>
              </div>
              <hr
                style={
                  {
                    /*
                  width: '90%',
                  margin: '0 auto',
                  background: '#333',
                  filter: 'opacity(0.3)',*/
                  }
                }
              />
              <div className="flex">
                <div className="location-distance">
                  <p>AVG. DISTANCE</p>
                  <h1>{destination.distance}</h1>
                </div>
                <div className="travel-time">
                  <p>EST. TRAVEL TIME</p>
                  <h1>{destination.travel}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
