//imported dependencies
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withCookies, Cookies } from 'react-cookie'
import { compose } from 'recompose'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
//created dependencies
import Logo from '../Molecules/Logo'
import Input from '../Molecules/Input'
import { formatPosts, sortArrayByUser, filterArray } from '../../Utils/FormatPosts'
import '../../styles/postsPage.scss'
import PostsContainer from './PostsContainer';
import LoginBanner from '../Molecules/LoginBanner'

class PostsPage extends Component {
//set Initial State
    constructor(){
        super();
        this.state = {
            originalPosts: [],
            posts: [],
            filteredPosts: [],
            userInput: '',
            sortAZ: true,
            loggedInAs: ''
        }
    }

//Lifecycle hook looks at cookies onload to make sure there is a logged in user. If no user is found, page is redirected to login page.
//if a user is found, then dont redirect and call the function that gets the posts from api.
    componentDidMount(){
        const { cookies } = this.props
        let userCookie = cookies.get('user')
        if(!userCookie){
            this.props.history.push("/");
        }
        let decodedCookie = jwtDecode(userCookie)
        this.setState({
            loggedInAs: decodedCookie.email
        })
        this.getPosts()
    }

//function makes http req to api and passes the response to the formatter function explained below before putting it in state
    getPosts = async () => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        let data = await res.data
        this.setState({
            posts: formatPosts(data), 
            originalPosts: formatPosts(data)
            //formatter function imported from Utils folder adds imageUrl, date and userName to every user object in data array.
            //the function then splits the array of post objects into an array of arrays each containing each post associated with each user
        })
    }

//runs when user types in search bar
//functions filter the array of arrays in stat by userName using userInput from form event and sets result to new state var
    handleChange = (e) => {
        let filteredPosts = filterArray(this.state.posts, e.target.value)
            this.setState({
            userInput: e.target.value,
            filteredPosts: filteredPosts
        })
        if(e.target.value === ""){
            this.setState({
                filteredPosts: this.state.originalPosts
            })
        }
    }
//function gets called when sortAZ check box is clicked
//sorts the array using a utility function imported from FormatPosts
    toggleSort = (e) => {
        let sortedPosts = sortArrayByUser(
            this.state.filteredPosts.length > 0 
            ? this.state.filteredPosts 
            : this.state.posts, e.target.checked
            )
        this.setState({
            sortAZ: e.target.checked,  
            posts: sortedPosts
        })
    } 

    render() {
        return (
            <div className='postsPage'>
                <LoginBanner msg={ this.state.loggedInAs } />
                <Logo msg='Runner News' width="14em"/>
                <Input search onChange={ this.handleChange } type='text' placeholder='Search Players' label='Search' />
                <Input sort toggleSort={ this.toggleSort } type="checkbox" label='Sort by User A-Z' />
                <PostsContainer posts={ this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts }/>
            </div>
        )
    }
}

export default compose(withRouter, withCookies)(PostsPage) 