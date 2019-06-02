import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { formatPosts, sortArrayByUser, Post } from '../src/Utils/FormatPosts'
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <App />    
  </Router>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

//define testable array (managable length but stll has unique values)
let testArray = [
  {
    userId: 1,
    id: 1,
    title: "TEST_title_1",
    body: "TEST_BODY_1"
  },
  {
    userId: 2,
    id: 2,
    title: "TEST_title_2",
    body: "TEST_BODY_2"
  },
  {
    userId: 3,
    id: 23,
    title: "TEST_title_3",
    body: "TEST_BODY_3"
  },
]

//test formatPosts function used in PostPage.js
test('formats posts correctly', () => {
  let originArray = formatPosts(testArray)
  //define individual user arrays from funtion return
  let userArr1 = originArray[0]
  let userArr2 = originArray[1]
  let userArr3 = originArray[2]
  //define individual post
  let post = userArr1[0]
  //define individual userNames from functions returned
  let userName1 = userArr1[0].userName
  let userName2 = userArr2[0].userName
  let userName3 = userArr3[0].userName
  //define indiidual titles returned
  let title1 = userArr1[0].title
  let title2 = userArr2[0].title
  let title3 = userArr3[0].title
  //define post body
  let body1 = userArr1[0].body
  let body2 = userArr2[0].body
  let body3 = userArr3[0].body
  //define new array length 
  let arrLength = originArray.length
  expect(arrLength).toBe(3)               //make sure array is split up into the correct amount of smaller arrays
  expect(post).toBeInstanceOf(Post)       //make sure first post is an instance of the Class Post (if the first one is,they all are)
  expect(userName1).toBe('Kyle Lowry')    
  expect(userName2).toBe('Marc Gasol')    
  expect(userName3).toBe('Steph Curry')   
  expect(title1).toBe('TEST_TITLE_1')     
  expect(title2).toBe('TEST_TITLE_2')     
  expect(title3).toBe('TEST_TITLE_3')
  expect(body1).toEqual(expect.stringContaining('The Toronto Raptors are going to win the finals'))
  expect(body2).toEqual(expect.stringContaining('The Toronto Raptors are going to win the finals'))
  expect(body3).toEqual(expect.stringContaining('The Toronto Raptors are going to win the finals'))
})

//test sort array function used in PostsPage.js
test('Sorts Array by User reverse-Alphabetically', () => {
  let originArray = formatPosts(testArray)
  let sortedArray = sortArrayByUser(originArray, false)
  //define expected output Array userName Values
  let userArr1 = sortedArray[0]
  let userArr2 = sortedArray[1]
  let userArr3 = sortedArray[2]
  let userName1 = userArr1[0].userName
  let userName2 = userArr2[0].userName
  let userName3 = userArr3[0].userName
  // inputed order was alphabetical so if reverse function worked
  expect(userName1).toBe('Steph Curry')
  expect(userName2).toBe('Marc Gasol')
  expect(userName3).toBe('Kyle Lowry')
})

