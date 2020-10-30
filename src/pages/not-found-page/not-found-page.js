import React,  { Component } from 'react'
import './not-found-page.css'

export default class NotFoundPage extends Component {
  render() {
    return (
      <section className='notFoundPage'>
        <div className="pageNotFoundCon">
          <header>
            <h1>Page Not Found</h1>
          </header>
          <p>This page doesn't exist, try going back or using the navigation menu</p>
        </div>
      </section>
    )
  }
}