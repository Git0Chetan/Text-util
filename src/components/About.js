import React,{useState} from 'react'

export default function About() {

    const[text,settext]=useState('Enable to Light mode');
    const[myStyle,setmystyle]=useState(
    {
        color:'white',
        backgroundColor:'black',
    }
    )

    const togglestyle=()=>{
        if(myStyle.color === 'white'){
            setmystyle({
                color:'black',
                backgroundColor:'white',
            })
            settext('Enable to Dark mode')
        }
        else{
            setmystyle({
                color:'white',
                backgroundColor:'black'
            })
            settext('Enable to Light mode')
        }
    }
  return (
    <div className='container my-3' style={myStyle}>
        <h1>About us</h1>
        <div className="accordion my-3" id="accordionExample" >
        <div className="accordion-item " >
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Convert to Uppercase
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Try uppercase feature</strong> This text-to-uppercase feature provides users with a convenient way to change the case of text, ensuring consistent and uniform styling. It can be particularly useful when dealing with titles, headings, or any text that requires uppercase formatting.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Convert to lowercase
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Try lowercase feature .</strong> The "Convert to Lowercase" feature enables users to transform text entered into the app into lowercase letters. This functionality is particularly useful when users want to standardize the case of their text or when dealing with case-insensitive operations.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Count
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Count words and letters</strong> The "Counting Words and Letters" feature provides a valuable tool for users to understand the composition of their text. As users input their text, whether it's a paragraph, an essay, or even just a sentence, the app dynamically calculates and displays the number of words and letters in real-time.
            </div>
            </div>
        </div>
        </div>
        <div className="container">
        <button type="button" className='btn btn-primary my-3' onClick={togglestyle}>{text}</button>
        </div>
    </div>
  )
}
