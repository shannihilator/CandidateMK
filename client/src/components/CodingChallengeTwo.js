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
    var hello = peopleDataEmail.join("").split('')
      .reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total
      }, {})
    console.log(hello)
    this.setState({ letterCount: hello })
  }

  render() {

    var plzWork = Object.entries(this.state.letterCount).map(([key, value]) => {
      return (
        <div>
          {key} : {value}
        </div>
      )
    })
    return (
      <div>
        Character
        Count
        {plzWork}
        <div>
          <button onClick={() => this.onClick()}> hello </button>
        </div>
      </div>
    )
  }
}
