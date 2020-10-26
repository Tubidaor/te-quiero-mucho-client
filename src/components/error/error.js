import React, { Component } from 'react'
import './error.css'
import TeQuieroContext from '../../context'

export default class Error extends Component {

  static contextType = TeQuieroContext

  render() {
    const { error } = this.context
    return (
      <div className="errorCon" id="errorMessage">
          <p className="errorMessage">{error}</p>
      </div>
    )
  }
}