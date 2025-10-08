import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Main = () => {
    const [nasa,setNasa]=useState()
    const fecthDataNasa = async() =>{
    try {
        const res = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        if(res.status === 200){
            setNasa(res.data)
        }
    } catch (err) {
        console.error(err)
    }
    }
    useEffect(()=>{
        fecthDataNasa();
    },[])
  return (
    <div className='main-section'>
        <div className="container">
            <div className="main-h">
                <h2>{nasa.title}</h2>
            </div>
            <div className="main-content">
                <img src={nasa.url} alt="" />
                <div className="main-content-items">
                    <h2>Witch's Broom Nebula</h2>
                    <p>Image Created : {nasa.copyright}</p>
                    <p>{nasa.explanation}</p>
                </div>
            </div>
            <div className="main-cards"></div>
        </div>
    </div>
  )
}

export default Main