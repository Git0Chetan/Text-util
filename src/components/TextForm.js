import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const[text, setText]=useState('');

    const handleupclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    
    const handleloclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleclearclick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handlechange=(event)=>{
        setText(event.target.value);
    }

    const handlecopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied","success");
    }
    

  return (
    <>
    <div className='container'>
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'gray'}} value={text} placeholder='Enter your text here.' onChange={handlechange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear the field</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy the text</button>
    </div>

    <div style={{color:props.mode==='light'?'black':'white'}} className='container my-3'>
      <h1>Here is the text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} time required to read</p>
    </div>
  </>   
  )
}
