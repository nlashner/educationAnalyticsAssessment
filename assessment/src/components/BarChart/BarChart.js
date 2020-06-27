import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
import './barChart.css'
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
        text: 'Race/Ethnicity Most Recent Year vs 2010',
        fontFamily: 'Arial',
        fontSize: 20,
      },
      height: 260,
      theme: "light2",
      axisX: {
        title: 'Race/Ethnicity',
        fontFamily: 'Arial'
      },
      axisY: {
        title: 'Percent (%)',
        fontFamily: 'Arial'
      },
      legend: {
        fontSize: 10,
      },
      data: [{
          type: 'column',
          name: '2010',
          dataPoints: olderData,
          showInLegend: true
        },
        {
        type: 'column',
        name: 'Most Recent',
        dataPoints: latestData,
        showInLegend: true
      }]

    }


    return (
      <div className='bar-chart'>
        <CanvasJSChart options={options} />
      </div>
    )
}



export default BarChart
