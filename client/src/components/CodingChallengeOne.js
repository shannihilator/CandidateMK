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
   axios.get('/api/base')
    .then((data) => {
      this.setState({peopleData:data.data.data})
    })
  }

  render() {

    const people = this.state.peopleData.map((person) => {
      return(
        <div>
          first name:{person.first_name} last name:{person.last_name} email:{person.email_address} title: {person.title}
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
