import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const[text, setText]=useState('Enter text here');
    // text="wrong way to set text"
    // setText("new text");

    const handleclick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handlechange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handlechange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleclick}>Convert to Uppercase</button>
    </div>
  )
}
