import React from 'react';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;