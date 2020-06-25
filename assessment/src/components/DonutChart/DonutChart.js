import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
import './donutChart.css'
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const DonutChart = (props) => {

    const filteredData = []
    let obj = props.percentages
    for(let key in obj){
      if(obj[key] !== null){
        filteredData.push({
          y: obj[key]*100, label: key
        })
      }
    }

    const options = {
      title: {
        text: props.title,
        fontFamily: 'Arial',
        fontSize: 20,
      },
      data: [{
        type: 'doughnut',
        indexLabelFontSize: 8,
        indexLabel: "{label}",
        toolTipContent: "<b>{label}:</b> (#percent%)",
        radius: '70%',
        startAngle: 50,
        dataPoints: filteredData
      }]
    }

    return(
      <div className="donut-chart">
        <CanvasJSChart options={options} />
      </div>
    )
}

export default DonutChart
