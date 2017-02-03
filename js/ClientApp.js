import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

//NO JSX

// var div = React.DOM.div
//
// var MyTitleFactory = React.createFactory(MyTitle)
//
// var MyFirstComponent = React.createClass({
//   render: function () {
//     return (
//       div(null,
//         MyTitleFactory({title: 'props are the best', color: 'peru'}),
//         MyTitleFactory({title: 'semicolons are the worst', color: 'rebeccapurple'}),
//         MyTitleFactory({title: 'jklol its ok if you like colon.....s', color: 'blanchedalmond'})
//       )
//     )
//   }
// })

//JSX

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

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
