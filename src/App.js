import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/sidebar'
import Introduction from './Components/intro'
import About from './Components/about'
import AboutCards from './Components/aboutcards'
import Projects from './Components/projects'
import Activities from './Components/activities';
import Contact from './Components/contact';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				  <div id="colorlib-main">
				  	<Introduction></Introduction>
            {/* Section Kedua */}
            <section className="colorlib-about" data-section="about">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <About></About>
                  <AboutCards></AboutCards>
                </div>
              </div>
            </section>
            {/* End of Section Kedua */}
            <Activities></Activities>
            <Projects></Projects>
            <Contact></Contact>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
