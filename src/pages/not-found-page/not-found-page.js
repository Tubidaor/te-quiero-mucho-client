import React,  { Component } from 'react'
import './not-found-page.css'

export default class NotFoundPage extends Component {
  render() {
    return (
      <section className='notFoundPage'>
        <div className="pageNotFoundCon">
          <h2>Page Not Found</h2>
          <p>This page doesn't exist, try going back or using the navigation menu</p>
        </div>
      </section>
    )
  }
}