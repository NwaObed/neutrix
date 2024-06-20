import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Resources from './pages/resources';
import HowItWorks from './pages/howitworks';
import Blog from './pages/blog';
import About from './pages/about';
import MyNavbar from './components/Navbar';
import BookButton, { FeedbackButton } from './components/Button';
import Footer from '../src/components/Footer'

//Resources
import Mathematics from './pages/mathematics';

function App() {
  return (
    <Router>
      <MyNavbar 
          homeLink="/" logo="Neutrix Hub"
          resLink="/resources" res="Resources"
          // worksLink="/howitworks" works="How it works"
          blogLink="/blog" blog="Blog"
          aboutLink="/about" about="About Us"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/resources' element={<Resources />} />
        <Route path='/resources/:id' element={<Resources />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/mathematics' element={<Mathematics />} />
      </Routes>
      <FeedbackButton />
      <Footer />
  </Router>
  );
}

export default App;