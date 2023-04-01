import React from 'react'
import axios from 'axios';

const Axios = () => {
    const URL = '/'

    const axiosPrivate = axios.create({
        baseURL: URL,
        headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true,
        credentials:'include'
    })
  return (
    <div>Axios</div>
  )
}

export default Axios