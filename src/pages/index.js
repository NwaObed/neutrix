import React from 'react';

import BookButton, {FeedbackButton} from '../components/Button';
import VideoComponent from '../components/Videos';
import Tutors from '../components/Tutors';

import '../styles/custom-style.css';

const Home = () => {
  const butt = <BookButton action="Book a session now" />
  return (
    <div>
      <section className="intro">
        <div className="intro-text">
          <h2>Learn from home at your own pace</h2>
          <p>Super charge your child learning with tailored one-to-one online learning.</p>
          {butt}
        </div>
        <img className="intro-img" src={`${process.env.PUBLIC_URL}/img/intro-image.png`} alt="College student"/>
      </section>

      <section id="howitworks" className="how-it-works">
        <h1>Easy in 2 steps</h1>
        <div className="steps">
          <div>
            <h2>Book free trial session</h2>
            <p>Take a snippet of our teaching and learning culture.</p>
            {butt}
          </div>
          <div>
            <h2>Learn at your pace</h2>
            <p>We adapt our curriculum based on your child need</p>
          </div>
        </div>
      </section>

      <section className="learn">
        <h1>Start learning today</h1>
        <div className="courses">
          <div className="subject">
            <h2>Maths</h2>
            <img className="circle-img" src={`${process.env.PUBLIC_URL}/img/maths.jpeg`} alt="Learn maths"/>
            <p>Take charge of your maths skills from GCSE to A-level.</p>
            {butt}
          </div>
          <div className="subject">
            <h2>Python</h2>
            <img className="circle-img" src={`${process.env.PUBLIC_URL}/img/python.jpeg`} alt="Learn python"/>
            <p>Master python programming from basics to advanced.</p>
            {butt}
          </div>
          <div className="subject">
            <h2>R</h2>
            <img className="circle-img" src={`${process.env.PUBLIC_URL}/img/R.jpeg`} alt="Learn R programming language"/>
            <p>A popular programming language for data analysis.</p>
            {butt}
          </div>
          <div className="subject">
            <h2>SQL</h2>
            <img className="circle-img" src={`${process.env.PUBLIC_URL}/img/sql.png`} alt="Learn SQL"/>
            <p>A programming language for accessing the database.</p>
            {butt}
          </div>
        </div>
      </section>

      <section className="video-playlists">
        {/* <VideoComponent /> */}
      </section>

      <section className="tutor">
        <h1>Meet our tutor</h1>
        <Tutors />
      </section>
      
    </div>
  );
};

export default Home;