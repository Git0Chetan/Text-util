import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React ,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState({type:'',msg:''});
  //const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert({type:'',msg:''})
    },2000)
  }

  const toggleMod=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="rgb(4,4,56)";
      showAlert("Dark mode has been enable","success");
      document.title= 'TextUtils-DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success")
      document.title= 'TextUtils-LightMode';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About_T" mode={mode} toggleMode={toggleMod}/>
      <Alert alert={alert}/>
      <div className="container my.4">
        {/* <About/> */}
        <TextForm showAlert={showAlert} heading="Enter the text Below to Analyze " mode={mode}/>
      </div>
    </>
  );
}

export default App;
