import React, {useState} from 'react';
import './App.css';
import Navbar from './components/pure/navbar';
import Agenda from './components/tabs/agenda';


function App() {
  const [navBarMenu, setNavBarMenu] = useState(false);
    function openNavBarMenu(){
      console.log(navBarMenu);
       console.log("navBarMenu is Open");
        setNavBarMenu(prevState=>!prevState);  
        console.log(navBarMenu);
    }
 
  return (
    <div className="App container">
      <header >
        <Navbar
          navBarMenu={navBarMenu}
          openNavBarMenu={openNavBarMenu}
        ></Navbar>
      </header>
      <section>
        <Agenda></Agenda>
      </section>
    </div>
  );
}

export default App;
