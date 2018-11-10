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
    return (
      <div>
        Hello
      </div>
    )
  }
}
