import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
// import script from './js/Confetti';

function Home() {
  return (
    <>
    <div className="box_stage">
      <div id="intro_wrapper">
        <div className="title">JEI 경제 샐러드</div>
          <div id="intro_button">
            <Link to="/app">시작</Link>
          </div>
      </div>
      <script src="./js/confetti.js"></script>
      <script>confetti.start(2100, 50, 100)</script>
    </div>
    </>
  );
};

export default Home;