import React, {useState} from 'react'


export default function Textform(props) {
    const uppercase = ()=>{
        console.log("uppercase was clicked" + text);
        let newtext= text.toLocaleUpperCase();
        setText(newtext);
    }
    const handelchange = (event)=>{
        console.log("on changed");
        setText(event.target.value);
    }

    const lowercase= ()=>{
       console.log("lowercase button was pressed");
       let newtext = text.toLocaleLowerCase();
       setText(newtext);
    }

    const [text, setText] = useState('Enter your text here');
    //setText("new updated text");

  return (
    <div>
      <>
<div className="container">
    <h1>{props.heading}</h1>
  <textarea className="form-control"   value={text}  onChange={handelchange} id="mybox" rows="8"/>
</div>

<button className="firstbutton my-3 btn  btn-primary mx-2" onClick={uppercase}>convert it into uppercase</button>
<button className="firstbutton mx-4 btn  btn-primary mx-2" onClick={lowercase}>convert it into lower case</button>


<div className="cointainer my-2">
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length}minutes to read </p>
</div>
</>
    </div>
  )
}
