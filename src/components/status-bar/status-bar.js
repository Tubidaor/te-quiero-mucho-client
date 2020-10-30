import React, { Component } from 'react'
import './status-bar.css'

export default class StatusBar extends Component {

  render() {
    return (
      <section className="statusBarSection">
          <div className="yourStateofMind">
            <p>State of Mind</p>
            <p className="stateofMindScore">{this.props.stateofMind}</p>
          </div>
          <div className="rState">
            <p>Relationship State</p>
            <p className="stateofRScore">{this.props.rQuality}</p>
          </div>
      </section>
    )
  }
}