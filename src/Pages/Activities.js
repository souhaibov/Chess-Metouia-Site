import React from 'react'
import DataActivities from '../Components/DataActivities'
import "../Style/activities.css"
const Activities = () => {
  return (
    <div>
      <br/>
      <h1>
        Training sessions 
      </h1>
      <br/>
            <div className='card-Activities'>
        {DataActivities?.map((el) => (
        <div className='Activities'>
          <br/>
           <h2 style={{fontSize:"32px",color: 'green'}}>【﻿Work Space】: {el.place}</h2>
           <br/>
           <h2 style={{color: 'darkgreen'}}>Number Of Students : {el.NumberOfStudents}</h2>
           <br/>
           <div className='list-image'>
          {el.tof.map(image=><div><img src={image} alt={el.place}/></div>)}
          
          
          </div>
          {/* <a href={el.video} target="_blank" rel="noreferrer"></a> */}
          <br/>
          <div className='st-description'>
           
            
            
        </div>
    </div>
      ))}
    </div>
      
      
      
    </div>
  )
}

export default Activities