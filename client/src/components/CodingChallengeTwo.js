import React, { Component } from 'react'
import axios from 'axios'

export default class CodingChallengeTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleDataEmail: [],
      characters: []
    }
  }

  componentDidMount() {
    axios.get('/api/base')
      .then((data) => {
        var peopleDataEmail = [...this.state.peopleDataEmail]
        for (let i = 0; i < data.data.data.length; i++) {
          peopleDataEmail.push(data.data.data[i].email_address)
        }
        this.setState({peopleDataEmail})
      }
    )
  }

 


  render() {

    return (
      <div>
        <button onClick={() => this.onClick()}> hello </button>
      </div>
    )
  }
}
