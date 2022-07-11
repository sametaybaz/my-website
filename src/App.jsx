
import './app.scss';

import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import { useState} from 'react';
//import { Menu } from '@material-ui/core';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>

      <div className='sections'>

        <Header></Header>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>

      </div>

    </div>
  );
}

export default App;
