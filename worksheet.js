//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

// function forEach(array, callback){
//     for ( var i = 0; i < array.length; i++ ) {
//         var result = (callback(array[i]))
//     }
//     return result
// }

var html = ''

var lets = ['a','b','c']

lets.forEach(el=>html += `<p>${el}</p>`)

// ----------------------------
// write your own map()
// that takes an array and a function
// ----------------------------


// ----------------------------
// write your own filter()
// that takes an array and a function
// ----------------------------


// ----------------------------
// write your own reduce()
// that takes an array and a function
// ----------------------------

//  HARD MODE
// ----------------------------
// using array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
    {name:"Justin", alma_mater:"Univ of Florida"}
]

// ----------------------------
// Using array.map(), array.filter(), and array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]


