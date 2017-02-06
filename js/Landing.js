// Landing.js
import React from 'react'
import { Link } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>React Videos</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

export default Landing
