import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages';
import Resources from './pages/resources';
// import HowItWorks from './pages/howitworks';
import Blog from './pages/blog';
import About from './pages/about';
import MyNavbar from './components/Navbar';
import Construction from './pages/construction';
import BookButton, { FeedbackButton } from './components/Button';
import Footer from '../src/components/Footer'

//Resources
import Mathematics from './pages/mathematics';

//Styles
import './styles/custom-style.css'

function BackgroundWrapper({ children }) {
  const location = useLocation();
  console.log(location.pathname);
  let backgroundClass = '';

  switch (location.pathname) {
    case '/construction':
      backgroundClass = 'construction-background';
      break;
    default:
      backgroundClass = backgroundClass;
  }

  return <div className={`app-container ${backgroundClass}`}>{children}</div>;
}

function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <MyNavbar 
            homeLink="/" logo="Neutrix Hub"
            resLink="/resources" res="Resources"
            worksLink="/#howitworks" works="How it works"
            blogLink="/blog" blog="Blog"
            aboutLink="/about" about="About Us"/>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/resources' element={<Resources />} />
            <Route path='/resources/:id' element={<Resources />} />
            {/* <Route path='/howitworks' element={<HowItWorks />} /> */}
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/mathematics' element={<Mathematics />} />
            <Route path='/construction' element={<Construction />} />
          </Routes>
        </div>
        {/* <FeedbackButton /> */}
        <Footer />
      </BackgroundWrapper>
  </Router>
  );
}

export default App;