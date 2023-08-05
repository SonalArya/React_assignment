
import React ,{ useState} from 'react';




const MyBioedit=()=>{
    const [inputvalue, setInputValue]=useState('');

    const handleChange =(event)=>{
        setInputValue(event.target.value)
    }
    const handleSubmit=()=>{
    console.log("submited");
    }
    
return(
    <div>
        <h2>my bio edit screen</h2>
        <h3>Write something about yourself</h3>
        <input type="text" value={inputvalue} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Submit</button>
    </div>
)
}

export default MyBioedit;