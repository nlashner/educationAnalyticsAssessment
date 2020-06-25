import React from 'react'
import { CSVLink, CSVDownload } from "react-csv";

const Download = (props) => {
  const { data } = props
  const headers = []
  for(let key in data){
    let headerObj = {
      label: key,
      key: key
    }
    headers.push(headerObj)
  }

  const csvData = []
  let dataObj = {}
  for(let key in data){
    dataObj[key] = data[key]
  }
  csvData.push(dataObj)


  console.log(csvData)


  return (
    <CSVLink data={csvData}>Download me</CSVLink>
  )
}

export default Download
