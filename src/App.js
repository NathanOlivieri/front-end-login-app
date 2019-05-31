import PostsPage from './components/PostsPage/PostsPage'
import LogInPage from './components/HomePage/LogInPage'
import { withRouter, BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import React, { Component } from 'react'
import { withCookies, Cookies } from 'react-cookie'
import { instanceOf } from 'prop-types'
import jwt from 'jsonwebtoken'
import { compose } from 'recompose'

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props){
    super(props);
    const { cookies } = this.props
    this.state = {
      isLoggedIn: cookies.get('isLoggedIn')
    }
  }

  createToken = (user) => {
    const token = jwt.sign(user, 'testShhhh')
    return token
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { cookies } = this.props
    const newUser = {
      email: e.target.emailInput.value,
      pw: e.target.pwInput.value
    }
    cookies.set('user', this.createToken( newUser ), { path: '/' })
    cookies.set('isLoggedIn', true, { path:'/' } )
    this.props.history.push('/posts')
    window.location.reload()
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route path='/' exact render={() => (
            <LogInPage onSubmit={ this.onSubmit }/>
          )}/>
          <Route exact path="/posts" render={() => (
            this.state.isLoggedIn 
            ? ( <PostsPage isLoggedIn={ this.state.isLoggedIn }/> )
            : ( <Redirect to="/" /> ) 
            )
          }/>
        </Switch>
      </div>
    </Router>
    )
  }
}

//need to put form info in cookies not state dummy
export default compose(
  withCookies,
  withRouter
)(App)