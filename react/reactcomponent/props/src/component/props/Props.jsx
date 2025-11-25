import React, { Component } from 'react'
import './Props.css'

  class Props extends Component {
  render() {
    return (
      <div className="card">
        <h1>Hello {this.props.name}</h1>
        <p>Sex: {this.props.sex}</p>
        <p>Age: {this.props.age}</p>
      </div>
    )
  }
}
export default Props;