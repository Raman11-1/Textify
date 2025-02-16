// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// let name = "Raman";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>(
      setAlert(null)
    ),2000);
  }
  
  
  const BluetoggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(9 9 55)';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
  }
}

  const GreentoggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='rgb(2, 34, 19)';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
  }
}

  const RedtoggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#39070c';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
  }
}
  return (
  <>
  <Router>
    <Navbar title= "Textify" mode={mode} abouttext = "AboutTextify" toggleMode2={GreentoggleMode} toggleMode1={RedtoggleMode} toggleMode={BluetoggleMode}/>
    <Alert alert={alert}/> 
    <div className="container my-2" >
    <Routes>
    
          <Route exact path="/about" element={<About/>}/>
          {/* It is always Good Idea to use Exact keyword in Route */}
          <Route exact path="/" element={<TextForm showAlert={showAlert}heading="Enter the text to analyze" mode={mode} />}/>

    </Routes> 
    </div>
    </Router>
  </>
  );
}

export default App;
