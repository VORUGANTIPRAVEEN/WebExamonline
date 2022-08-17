import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
export default function UserData() {
    function myfunction(){
        var ele=document.querySelectorAll();
        ele.requestFullscreen("exam");
    }
  return (
    <div className='user_data'>
        <label>User Name</label>
        <input type="text" id="name" />
        <label>Email Id</label>
        <input type='email' id='email'/>
        <Link to='/Exam' ><button onClick={myfunction}>Start Exam</button></Link>
    </div>
  )
}
