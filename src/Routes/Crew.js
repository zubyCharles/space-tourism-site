import React, { useState } from 'react';
import '../sass/_crew.scss';
import Navbar from '../components/Navbar';
import crewData from '../data/crew.json';

const { crew } = crewData;

const Crew = () => {
  const [currentTab, setTab] = useState('commander');

  const changeCurrentTab = (newTab) =>
    newTab === currentTab ? 'active' : null;

  return (
    <section className="crew-page">
      <Navbar />
      <div className="header">
        <h1>02 &nbsp; MEET YOUR CREW</h1>
      </div>
      <div className="tabs">
        <div
          className={changeCurrentTab('commander')}
          onClick={() => setTab('commander')}
        ></div>
        <div
          className={changeCurrentTab('specialist')}
          onClick={() => setTab('specialist')}
        ></div>
        <div
          className={changeCurrentTab('pilot')}
          onClick={() => setTab('pilot')}
        ></div>
        <div
          className={changeCurrentTab('engineer')}
          onClick={() => setTab('engineer')}
        ></div>
      </div>
      <div className={`crew ${currentTab}`}>
        {crew.map((crew) => (
          <div className="personnel" key={crew.id}>
            <div className="personnel-image">
              <img src={crew.images.png} alt={crew.name} />
            </div>
            <div className="text">
              <div className="role">
                <p>{crew.role}</p>
              </div>
              <div className="name">
                <h1>{crew.name}</h1>
              </div>
              <div className="bio">
                <p>{crew.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crew;
