import React from 'react'
import { render } from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' />
          <a>or Browse All</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))

/* NO JSX

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are the best', color: 'peru'}),
        MyTitleFactory({title: 'semicolons are the worst', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'jklol its ok if you like colon.....s', color: 'blanchedalmond'})
      )
    )
  }
})

JSX

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are the best' color='peru' />
        <MyTitle title='semicolons are the worst' color='rebeccapurple' />
        <MyTitle title='jklol its ok if you like colon.....s' color='blanchedalmond' />
      </div>
    )
  }
})

render(<App />, document.getElementById('app')) */
