import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withCookies, Cookies } from 'react-cookie'
import { compose } from 'recompose'
import axios from 'axios'

class PostsPage extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        const { cookies } = this.props
        let userCookie = cookies.get('user')
        if(!userCookie){
            this.props.history.push("/");
        }
        this.getPosts()
    }

    getPosts = async () => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        let data = await res.data
        this.setState({
            posts: data
        })
    }
     
    render() {
        return (
            <div>
               <h1>THIS is the POST PAGE</h1> 
            </div>
        )
    }
}

export default compose(withRouter, withCookies)(PostsPage) 