import React, {Component} from 'react'
import DonutChart from '../DonutChart/DonutChart'
import BarChart from '../BarChart/BarChart'
import SchoolInfo from '../SchoolInfo/SchoolInfo'
import axios from 'axios'
import './home.css'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      schoolName: 'University of Wisconsin-Madison',
      schoolWebsite: 'www.wisc.edu',
      schoolCity: 'Madison',
      schoolState: 'WI',
      schoolZip: '53706',
      numUndergradute: 32962,
      numGraduate: 13058,
      programPercentageObj: {
        "education": 0.0204,
      "mathematics": null,
      "business_marketing": 0.1163,
      "communications_technology": 0.0,
      "language": 0.0411,
      "visual_performing": 0.0311
    },
      raceEthnicityLatest: {
      "nhpi": 0.0013,
      "non_resident_alien": 0.0684,
      "black_2000": null,
      "aian_2000": null,
      "hispanic_prior_2009": null,
      "asian": 0.0546,
      "black": 0.021,
      "api_2000": null,
    },
      raceEthnicity2010: {
        "nhpi": 0.0013,
        "non_resident_alien": 0.0484,
        "black_2000": null,
        "aian_2000": null,
        "hispanic_prior_2009": null,
        "asian": 0.0746,
        "black": 0.030,
        "api_2000": null,
      },
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

    if(!this.state.schoolName.length) return <h1>loading...</h1>

    console.log(this.state)

    return (
      <div>
        <SchoolInfo
          name={this.state.schoolName}
          website={this.state.schoolWebsite}
          city={this.state.schoolCity}
          state={this.state.schoolState}
          zip={this.state.schoolZip}
          numGradStudents={this.state.numGraduate}
          numUndergrad={this.state.numUndergradute}
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
        <div className='chart'>
        <BarChart
          latest={this.state.raceEthnicityLatest}
          older={this.state.raceEthnicity2010}
          />
        </div>
        </div>

      </div>
    )
  }

}


export default Home
