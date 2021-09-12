import './app.scss';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/header.js';
import Projects from '../Projects/projects.js';
import About from '../About/about.js';
import Resume from '../Resume/resume.js';
import Contact from '../Contact/contact.js';
import Footer from '../Footer/footer.js';

const Routing = () => (
  <main>
      <Route path="/resume" exact>
          <Resume/>
      </Route>
      <Route path="/projects" exact>
          <Projects/>
      </Route>
      <Route path="/contact" exact>
          <Contact/>
      </Route>
      <Route path="/" exact>
          <About/>
      </Route>
  </main>   
)

function App() {

  return (
    <div className="App">
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
