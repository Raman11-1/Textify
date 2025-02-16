import React, {useState} from 'react'
    
export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick = ()=>{
      // console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    // text = "new text"; Wrong way to sext Text
    // setText("new text");

    function countWords(sentence) {
      // Step 1: Trim leading and trailing whitespace
      sentence = sentence.trim();
  
      // Step 2: Split the sentence into words based on spaces
      let wordsArray = sentence.split(/\s+/);
  
      // Step 3: Filter out any empty strings (in case of multiple spaces)
      wordsArray = wordsArray.filter(word => word.length > 0);
  
      // Step 4: Return the length of the array, which is the word count
      return wordsArray.length;
  }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'rgb(9,9,55)'}} >
        <h3>{props.heading} </h3>
      <div className="mb-3">
        {/* <label for="mybox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor:props.mode==='dark'? '#8b8585':'white', color:props.mode==='dark'?'white':'rgb(9,9,55)'}}id="mybox" rows="8"></textarea>
      </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'rgb(9,9,55)'}} > 
        <h3>Your text Summary</h3> 
        <p>{countWords(text)} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"Enter something to preview it here"}</p>
      </div>
      </>
  )
}
