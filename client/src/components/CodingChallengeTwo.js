import React, { Component } from 'react'
import axios from 'axios'

export default class CodingChallengeTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleDataEmail: [],
      letterCount: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    axios.get('/api/base')
    .then((data) => {
      var peopleDataEmail = [...this.state.peopleDataEmail]
      for (let i = 0; i < data.data.data.length; i++) {
        peopleDataEmail.push(data.data.data[i].email_address)
      }
      this.setState({ peopleDataEmail })
      }
    )
  }

  onClick() {
    var peopleDataEmail = [...this.state.peopleDataEmail]
    var emailInOneString = peopleDataEmail.join("").split('')
    var letterCount = emailInOneString.reduce((count, character) => {
        count[character] ? count[character]++ : count[character] = 1;
        return count
      }, {})
    this.setState({ letterCount })
  }



  render() {

    var characterCountDisplay = Object.entries(this.state.letterCount).map(([key, value], i) => {
      return (
        <div key={i}>
          {key} : {value}
        </div>
      )
    })
    return (
      <div>
        
          <div>Character Count For Emails</div>
          <div>{characterCountDisplay}</div>
          <button onClick={() => this.onClick()}> Show Character Count </button>
        
      </div>
    )
  }
}
