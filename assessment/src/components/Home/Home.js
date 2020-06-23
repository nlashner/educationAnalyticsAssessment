import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      schoolName: '',
      schoolWebsite: '',
      schoolCity: '',
      schoolState: '',
      schoolZip: '',
      totalNumStudents: 0,
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
    })
  }


  render(){

    if(!this.state.schoolName.length) return <h1>loading...</h1>

    console.log(this.state)

    return (
      <div>
        <div>{this.state.schoolName}</div>
        <div>{this.state.schoolWebsite}</div>
        <div>{this.state.schoolCity}, {this.state.schoolState}, {this.state.schoolZip}</div>
      </div>
    )
  }

}


export default Home
