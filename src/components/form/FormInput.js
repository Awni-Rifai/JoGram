import React from "react";
import styles from "./FormInput.module.scss";
import { useState } from "react";

export default function FormInput(props) {
    const [input,setInput]=useState('');
    const [error,setError]=useState('')
    


  const inputHandler = (e) => {
    try{
        setInput(e.target.value);
        if(e.target.name==='confirmPassword'){
            
            props.validate(props.inputData.password,e.target.value);
        }
        else{
            props.validate(e.target.value);
        }
      
        setError('')

      }
      catch(err){
          setError(err.message)
         
      }
           
};
const blurHandler=(e)=>{
    const check=error===""?true:false
    props.saveInputs(e.target.name,e.target.value,check)

}
  

  return (
   <>
      <label htmlFor={props.htmlFor} className={styles.label}>
        {props.labelName}
      </label>
        <input
          value={input}
          onChange={inputHandler}
          onBlur={blurHandler}
          onKeyUp={blurHandler}
          placeholder={props.placeHolder}
          type={props.type}
          id={props.id}
          className={styles.input}
          placeholder={props.placeholder}
          style={{borderColor:error===""? 'rgba(0,0,0,0.5)':'red'}}
          name={props.name}
        />
         <small
          key={Math.random()}
          id="nameErr"
          style={{
            display: "block",
            color: "red",
            fontWeight: "bold",
            fontSize: "0.7rem",
            opacity:error !== "" ? "1" : "0",
          }}
        >
          { error||'error' }
        </small>
        </>
   
  );
}
