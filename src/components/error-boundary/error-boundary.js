import React, { Component } from 'react'

export default class Boundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>Oops, something went wrong. We're sorry</h2>
      )
    }
    return this.props.children
  }
}