import React, { Component } from 'react'
import axios from 'axios'

export default class CodingChallengeOne extends Component {
  constructor(props){
    super(props);
     this.state = {
      peopleData: []
     }
    }
  
  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    axios.get('/api/base')
    .then((data) => {
      this.setState({peopleData:data.data.data})
    })
  }

  render() {

    const people = this.state.peopleData.map((person, i) => {
      return(
        <div key={i}>
          <ul>
            <li>{person.first_name} {person.last_name}</li> 
            <div>email: {person.email_address}</div>
            <div>title: {person.title}</div>
          </ul>  
        </div>
      )
    })

    return (
      <div>
        {people}
      </div>
    )
  }
}
