import React, {Component} from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DonutChart extends Component {



  render(){

    const filteredData = []
    let obj = this.props.percentages
    for(let key in obj){
      if(obj[key] !== null){
        filteredData.push({
          label: key, y: obj[key]*100,
        })
      }
    }

    const options = {
      title: {
        text: this.props.title,
        fontFamily: 'Arial'
      },
      // legend: {
      //   horizontalAlign: "left",
      //   verticalAlign: "center",
      // },
      data: [{
        type: 'doughnut',
        // indexLabel: "#percent%",
        // percentFormatString: "#0.##",
        indexLabelPlacement: "outside",
        // showInLegend: true,
        radius: '70%',
        startAngle: 50,
        dataPoints: filteredData
      }]
    }
    return(
      <div>
        <CanvasJSChart options={options} />
      </div>
    )
  }
}

export default DonutChart
