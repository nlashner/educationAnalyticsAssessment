import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = (props) => {
    const { latest, older } = props

    const latestData = []
    for(let key in latest){
      if(latest[key] !== null){
        latestData.push({
          y: latest[key]*100, label: key
        })
      }
    }

    const olderData = []
    for(let key in older){
      if(older[key] !== null){
        olderData.push({
          y: older[key]*100, label: key
        })
      }
    }

    const options = {
      title: {
        text: 'Race/Ethnicity Latest vs 2000'
      },
      axisX: {
        title: 'Race/Ethnicity'
      },
      data: [{
        type: 'column',
        name: 'Most Recent',
        dataPoints: latestData
      },
      {
        type: 'column',
        name: '2010',
        dataPoints: olderData
      }]
    }


    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    )
}



export default BarChart
