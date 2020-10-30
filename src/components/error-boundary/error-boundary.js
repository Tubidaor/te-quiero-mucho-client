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
          <p>Oops, something went wrong. We're sorry</p>
      )
    }
    return this.props.children
  }
}