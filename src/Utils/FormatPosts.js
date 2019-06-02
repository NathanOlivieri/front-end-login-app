import DateGenerator from 'random-date-generator'

let startDate = new Date(2019, 1, 1);
let endDate = new Date(2019, 6, 3);

//create a class for posts objects to be used in map function below
export class Post {
    constructor(uId, postId, title, body, imageUrl){
        this.userId = uId
        this.userName = formatName( uId )
        this.id = postId
        this.title = title.toUpperCase()
        this.body = body
        this.imageUrl = imageUrl
        this.date = DateGenerator.getRandomDateInRange(startDate, endDate)
    }
}

//function generates a name for every userId.
const formatName = ( userId ) => {
    let newName = 'Jon Snow'
    switch (userId) {
        case 1:
            newName = 'Kyle Lowry'
            break;
        case 2:
            newName = 'Marc Gasol'
            break;
        case 3:
            newName = 'Steph Curry'
            break;
        case 4:
            newName = 'Serge Ibaka'
            break;
        case 5:
            newName = 'Kawhi Leonard'
            break;
        case 6:
            newName = 'Jeremy lin'
            break;            
        case 7:
            newName = 'Jordan loyd'
            break;            
        case 8:
            newName = 'Jodie Meeks'
            break;
        case 9:
            newName = 'Malcolm Miller'
            break;
        case 10:
            newName = 'Eric Moreland'
            break;
        default:
            return newName
    }
    return newName
}

//function inserts required phrase randomply within passed string used on every post body
const randomRaptors = (string) => {
    let cappedRandomizer = Math.floor(Math.random() * Math.floor(string.split(' ').length))
    let res = string.split(' ')
    res.splice(cappedRandomizer, 0, 'The Toronto Raptors are going to win the finals')
    let str = res.join(' ')
    return str
}

//create a new object for every post
export const formatPosts = ( array ) => {
    let formattedPosts = array.map(post => ( 
        new Post(post.userId, post.id, post.title, randomRaptors(post.body), 'https://source.unsplash.com/500x500?raptors,toronto,basketball')
    ))
    //slit up array into ten smaller arrays of per user posts
    return splitArray(formattedPosts)
}

//function to split array into multiple user specific arrays
const splitArray = (array) => {
    let amountOfUsers = array.map((each) => (each.userId)) //make array of all user ids
    let returnArray = new Set(amountOfUsers) //remove duplicates by making ES6 new Set 
    let totalUsers = Array.from(returnArray) //turn Set back into array which now contains of all unique userIds existing in posts.
    let newArray = totalUsers.map(i => array.filter(post => post.userId === i)) //for every userid search posts and make array of associated posts
    return newArray
}

//function to sort arrays by userName 
//args: array(array you want to sort) alphabetical(BOOL if true sorts alphabatically if false sorts reverse-alphabetical)
export const sortArrayByUser = (array, alphabetical) => {
    let newArray = []
    alphabetical ? newArray = array.sort(( a, b ) => ( a[0].userName.toUpperCase() > b[0].userName.toUpperCase() ) ? 1
        : (( b[0].userName.toUpperCase() > a[0].userName.toUpperCase()) ? -1: 0))
        : newArray = array.sort(( a, b ) => ( a[0].userName.toUpperCase() > b[0].userName.toUpperCase() ) ? -1
        : (( b[0].userName.toUpperCase() > a[0].userName.toUpperCase()) ? 1: 0))
    return newArray
}

//function filters array of arrays passed and return new array only containing values that meet the condition.
//condition is a string value that will be checked against the first userName value in the first object of each array 
export const filterArray = (array, condition) => {
    let newArray = array.filter(item => item[0].userName.toUpperCase().includes(condition.toUpperCase()))
    return newArray
}
