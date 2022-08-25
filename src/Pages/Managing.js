import React from 'react'
import DataManage from '../Components/DataManaging'
import '../Style/managing.css'

const Managing = () => {
  return (
    <div className='card-manager'>
        {DataManage?.map((el) => (
        <div className='manager'>
          <div><img src={el.photo} alt={el.name}/></div>
          <br/>
          <div className='mn-description'>
            <h2 style={{color: 'green4'}}>Name: {el.name}</h2>
            <h2 style={{color: 'ForestGreen'}}>job: {el.job}</h2>
        </div>
    </div>
      ))}
    </div>
  )
}

export default Managing