import React, { Component } from 'react';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Portfolio from './Components/Portfolio/portfolio';
import Resume from './Components/Resume/resume';
import Recommendations from './Components/Recommendations/recommendations';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <Portfolio />
        <Recommendations />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
