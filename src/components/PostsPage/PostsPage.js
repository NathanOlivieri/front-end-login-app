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

    insertBestTeam = (string) => {
        let cappedRandomizer = Math.floor(Math.random() * Math.floor(string.split(' ').length))
        let res = string.split(' ')
        res.splice(cappedRandomizer, 0, 'The Toronto Raptors are going to win the finals')
        let str = res.join(' ')
        return str
    }

    render() {
        return (
            <div>
               <h1>THIS is the POST PAGE</h1> 
               {this.state.posts.map((item, index) => (
                   <div key={ index }>
                       <h2>{ item.title.toUpperCase() }</h2>
                       <p>{ this.insertBestTeam( item.body ) }</p>
                   </div>
               ))}
            </div>
        )
    }
}

export default compose(withRouter, withCookies)(PostsPage) 