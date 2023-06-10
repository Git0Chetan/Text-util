import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const[text, setText]=useState('');
    // text="wrong way to set text"
    // setText("new text"); right way
    // const[count, setcount]=useState(0);

    const handleupclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    
    const handleloclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleclearclick=()=>{
        let newText="";
        setText(newText);
    }
  //   const handlecountclick=()=>{
  //     let newText=text.length;
  //     setText(newText);
  //  }
    const handlechange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
        // setcount(event.target.value.length);
    }

    const handlecopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    

  return (
    <>
    <div className='container'>
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'gray'}} value={text} placeholder='Enter your text here.' onChange={handlechange} id="myBox" rows="10"></textarea>
        {/* <p>The number of letters including space are:{count}</p> */}
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear the field</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy the text</button>
        {/* <button className="btn btn-primary" onClick={handlecountclick}>Count the letters</button> */}
    </div>

    <div style={{color:props.mode==='light'?'black':'white'}} className='container my-3'>
      <h1>Here is the text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} time required to read</p>
    </div>
  </>   
  )
}
