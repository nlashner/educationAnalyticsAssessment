import React from 'react'
import { CSVLink } from "react-csv";
import './download.css'

const Download = (props) => {
  const { data } = props
  const headers = []
  for(let key in data){
    if(typeof data[key] === 'object'){
      let innerObj = data[key]
      for (let innerKey in innerObj){
        let headerObj ={
          label: innerKey,
          key: innerKey
        }
        headers.push(headerObj)
      }
    } else {
    let headerObj = {
      label: key,
      key: key
    }
    headers.push(headerObj)
  }
  }

  const csvData = []
  let dataObj = {}
  for(let key in data){
    if(typeof data[key] === 'object'){
      let innerObj = data[key]
      for(let innerKey in innerObj){
        dataObj[innerKey] = innerObj[innerKey]
      }
    } else {
      dataObj[key] = data[key]
    }
  }
  csvData.push(dataObj)

  return (
    <CSVLink data={csvData} className='download-button' filename={"education_data.csv"}>Export Data As CSV</CSVLink>
  )
}

export default Download
