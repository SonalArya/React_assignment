import React, { Component, useState } from 'react';
//import { ReactDOM } from 'react';
import {Link} from 'react-router-dom';

import BloodGroupDropDown from './Bloodgroup';
//import MyBioedit from './MyBioEdit';

const Aboutmedisplay=()=>{
    const [displayText,setDisplayText] = useState('')



const handleButtonclick =()=>{
    setDisplayText("this is a healthcheck up app");
}

   
         return (
            <div style={StyleSheet.container}>
                <header>
                <h1>My Bio</h1>
                
                <button
                onClick={handleButtonclick}>About me</button>
                <p>{displayText}</p>
                
                <BloodGroupDropDown/>
                </header>
            </div>
        );
         }

         const style={
            container:{
                display: 'flex',
                alignItems:'center'
            }
        }
export default Aboutmedisplay;
