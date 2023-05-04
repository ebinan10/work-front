import React from 'react'
import axios from 'axios'

export default 
    axios.create({
  baseURL:'https://workoutbyudehnanakumo.onrender.com/',
  headers:{
    'Content-Type':'application/json'
},
withCredentials:true, credentials:'include'
 })


