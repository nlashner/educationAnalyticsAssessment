import React, {Component} from 'react'
import DonutChart from '../DonutChart/DonutChart'
import Download from '../Download/Download'
import BarChart from '../BarChart/BarChart'
import SchoolInfo from '../SchoolInfo/SchoolInfo'
import axios from 'axios'
import './home.css'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      schoolName: '',
      schoolWebsite: '',
      schoolCity: '',
      schoolState: '',
      schoolZip: '',
      numUndergraduate: 0,
      numGraduate: 0,
      programPercentageObj: {},
      raceEthnicityLatest: {},
      raceEthnicity2010: {}
    }
  }

  async componentDidMount(){
    let queryString = 'https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key='
    let apiKey = 'wx5ciB6nDQx9zNRBxYgsr44yww3Jp5IZgP6tLMZC'
    let { data } = await axios.get(queryString + apiKey)
    this.setState({
      schoolName: data.results[0].school.name,
      schoolWebsite: data.results[0].school.school_url,
      schoolCity: data.results[0].school.city,
      schoolState: data.results[0].school.state,
      schoolZip: data.results[0].school.zip.slice(0,5),
      numUndergraduate: data.results[0]['latest'].student.enrollment.undergrad_12_month,
      numGraduate: data.results[0]['latest'].student.enrollment.grad_12_month,
      programPercentageObj: data.results[0]['latest'].academics.program_percentage,
      raceEthnicityLatest: data.results[0]['latest'].student.demographics.race_ethnicity,
      raceEthnicity2010: data.results[0]['2010'].student.demographics.race_ethnicity
    })
  }

  render(){

    if(!this.state.schoolName.length) return <h1>Page is Loading!</h1>

    return (
      <div>
        <Download data={this.state}/>
        <SchoolInfo
          name={this.state.schoolName}
          website={this.state.schoolWebsite}
          city={this.state.schoolCity}
          state={this.state.schoolState}
          zip={this.state.schoolZip}
          numGradStudents={this.state.numGraduate}
          numUndergrad={this.state.numUndergraduate}
          />
        <div className='donut-charts'>
        <div className='chart'>
        <DonutChart
          percentages={this.state.programPercentageObj}
          title={'Program Percentages'}/>
        </div>
        <div className='chart'>
        <DonutChart
          percentages={this.state.raceEthnicityLatest}
          title={'Race/Ethnicity'}/>
        </div>
        </div>
        <div className='bar-chart-home'>
        <BarChart
          latest={this.state.raceEthnicityLatest}
          older={this.state.raceEthnicity2010}
          />
         </div>
      </div>
    )
  }
}


export default Home
