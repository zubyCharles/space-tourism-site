import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/_home.scss';
import Navbar from '../components/Navbar';
import intro from '../data/intro.json';

const Home = () => {
  return (
    <section className="home-page">
      <Navbar />
      <div className="home">
        <div className="intro-text">
          <div className="headers">
            <h1>SO YOU WANT TO TRAVEL TO</h1>
            <h2>SPACE</h2>
          </div>
          <div className="intro">
            <p>{intro.intro}</p>
          </div>
        </div>
        <div className="explore-btn">
          <Link to="/destinations">
            <button>EXPLORE</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
