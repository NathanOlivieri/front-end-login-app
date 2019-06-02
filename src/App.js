import PostsPage from './components/PostsPage/PostsPage'
import LogInPage from './components/HomePage/LogInPage'
import { withRouter, BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import React, { Component } from 'react'
import { withCookies, Cookies } from 'react-cookie'
import { instanceOf } from 'prop-types'
import jwt from 'jsonwebtoken'
import { compose } from 'recompose'
import 'typeface-roboto'


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props){
    super(props);
    const { cookies } = this.props
    this.state = {
      isLoggedIn: cookies.get('isLoggedIn'),
      shouldRemember: false,
      attemptedLogin: false
    }
  }

  createToken = (user) => {
    const token = jwt.sign(user, 'testShhhh')
    return token
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.setState({
      shouldRemember: e.target.checkbox.checked
    })
    const { cookies } = this.props
    const newUser = {
      email: e.target.emailInput.value,
      pw: e.target.pwInput.value
    }
    if(this.state.shouldRemember){
      cookies.set('user', this.createToken( newUser ), { path: '/' })
      cookies.set('isLoggedIn', this.state.shouldRemember, { path:'/' } )
      this.props.history.push('/posts')
      window.location.reload()
    }else if (!this.state.shouldRemember) {
      this.setState({
        attemptedLogin: true
      })
    }
  }

  clearAttempts = (e) => {
    console.log(e.target.checked)
    this.setState({
      attemptedLogin: !e.target.checked,
      shouldRemember: e.target.checked
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route path='/' exact render={() => (
            <LogInPage shouldRemember={ this.state.shouldRemember } attemptedLogin={ this.state.attemptedLogin } onSubmit={ this.onSubmit } clearAttempts={ this.clearAttempts }/>
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