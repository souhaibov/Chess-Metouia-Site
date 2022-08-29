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
          <div><img src={el.tof} alt={el.place}/></div>
          <br/>
          <div className='st-description'>
            <h2 style={{color: 'green4'}}>Work Space: {el.place}</h2>
            <br/>
            <h2 style={{color: 'ForestGreen'}}>Number Of Students: {el.NumberOfStudents}</h2>
        </div>
    </div>
      ))}
    </div>
      
      
      <h1>
        Open Days 
      </h1>
    </div>
  )
}

export default Activities