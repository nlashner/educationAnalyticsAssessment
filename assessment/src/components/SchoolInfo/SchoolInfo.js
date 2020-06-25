import React from 'react'
import './schoolInfo.css'

const SchoolInfo = (props) => {
  const { name, website, city, state, zip, numGradStudents, numUndergrad} = props

  return (
    <div className='info'>

      <div className='school-name'>{name}</div>

      <div className='info-container'>
      <a href={'https://' + website} lassName='website' target='_blank'>{website}</a>
      <div classname='school-address'>{city}, {state}, {zip}</div>
      </div>

      <div className='enrollment'>Total Enrollment: {(numUndergrad + numGradStudents).toLocaleString()}</div>
      <div>Undergrad Students: {numUndergrad.toLocaleString()}</div>
      <div>Grad Students: {numGradStudents.toLocaleString()}</div>


    </div>
  )
}

export default SchoolInfo
