import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React ,{useState} from 'react';

function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="rgb(4,4,56)";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About_T" mode={mode} toggleMode={toggleMode}/>
      <div className="container my.4">
        {/* <About/> */}
        <TextForm heading="Enter the text Below to Analyze " mode={mode}/>
      </div>
    </>
  );
}

export default App;
