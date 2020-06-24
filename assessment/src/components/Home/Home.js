import React, {Component} from 'react'
import DonutChart from '../DonutChart/DonutChart'
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
      raceEthnicity: {
      "nhpi": 0.0013,
      "non_resident_alien": 0.0684,
      "black_2000": null,
      "aian_2000": null,
      "hispanic_prior_2009": null,
      "asian": 0.0546,
      "black": 0.021,
      "api_2000": null,
    }
    }
  }

  async componentDidMount(){
    // let queryString = 'https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key='
    // let apiKey = 'wx5ciB6nDQx9zNRBxYgsr44yww3Jp5IZgP6tLMZC'
    // let { data } = await axios.get(queryString + apiKey)
    // this.setState({
    //   schoolName: data.results[0].school.name,
    //   schoolWebsite: data.results[0].school.school_url,
    //   schoolCity: data.results[0].school.city,
    //   schoolState: data.results[0].school.state,
    //   schoolZip: data.results[0].school.zip.slice(0,5),
    //   numUndergraduate: data.results[0]['2012'].student.enrollment.undergrad_12_month,
    //   numGraduate: data.results[0]['2012'].student.enrollment.grad_12_month,
    //   programPercentageObj: data.results[0]['2012'].academics.program_percentage,
    //   raceEthnicity: data.results[0]['2012'].student.demographics.race_ethnicity
    // })

  }

  render(){

    if(!this.state.schoolName.length) return <h1>loading...</h1>

    return (
      <div>

        <div className='schoolName'>{this.state.schoolName}</div>
        <div className='school-info-container'>
        <div>{this.state.schoolWebsite}</div>
        <div>{this.state.schoolCity}, {this.state.schoolState}, {this.state.schoolZip}</div>
        </div>

        <div className='students-container'>
        <div>Total Students: {this.state.numUndergradute + this.state.numGraduate}</div>
        <div className='student-info'>
        <div>Total Undergrad: {this.state.numUndergradute}</div>
        <div>Total Graduate{this.state.numGraduate}</div>
        </div>
        </div>

        <div className='donut-charts'>
        <div className='chart'>
        <DonutChart percentages={this.state.programPercentageObj} title={'Program Percentages'}/>
        </div>
        <div className='chart'>
        <DonutChart
          percentages={this.state.raceEthnicity}
          title={'Race/Ethnicity'}/>
        </div>
        </div>

      </div>
    )
  }

}


export default Home
