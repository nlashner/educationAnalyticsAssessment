import React, {Component} from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ProgramPercentages extends Component {

  render(){
    const options = {
      title: {
        text: 'Program Percentaeges'
      },
      data: [{
        type: 'doughnut',
        startAngle: 60,
        dataPoints: [
          {label: 'help', y: 50},
          {label: 'me', y: 50}
        ]
      }]
    }
    console.log('in program')
    return(
      <div>
        <CanvasJSChart options={options} />
      </div>
    )
  }
}

export default ProgramPercentages
