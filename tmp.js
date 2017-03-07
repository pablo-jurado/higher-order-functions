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




console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
	expect = chai.expect,
	should = chai.should,
	assert = chai.assert

function checkFuncBasics(name,argNum,msg) {
	try {
		var func = eval(name)
	}
	catch(e) {
		assert.equal(undefined,name,msg ? msg : 'Make sure your function is called ' + name + ', case-sensitive.')
	}
	if (argNum) assert.equal(func.length,argNum,'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('forEach()', function(){
	it("should be a function that takes an array and a function", function() {
		checkFuncBasics('forEach')
	})
	it("should multiply all numbers of an input array together", function() {
		var total = 1
		forEach([1, 2, 3, 4], function(a){ total *= a; })
		expect(total).to.equal(24)
	})
})

describe('reduce()', function(){
	it("should be a function that takes an array and a function", function(){
		checkFuncBasics('reduce')
	})
	it("should return the sum of all elements of array", function(){
		assert.equal(10, reduce([1, 2, 3, 4], function(accumulator, element){ return accumulator + element }))
	})
	it("should multiply all elements of the array together", function(){
		assert.equal(24, reduce([1, 2, 3, 4], function(accumulator, element){ return accumulator * element }))
	})
})

describe('map()', function(){
	it("should be a function that takes an array and a function", function(){
		checkFuncBasics('map')
	})
	it("When passing a callback function that returns the square of a number, and storing the results in a variable called 'squares', you should be able to state an iteration of the array and return that number's square", function(){
		var squares = map([1, 2, 3, 4], function(v){ return v*v })
			expect(squares[0]).to.equal(1)
			expect(squares[1]).to.equal(4)
			expect(squares[2]).to.equal(9)
			expect(squares[3]).to.equal(16)

	})
})

describe('filter()', function(){
	it("should be a function that takes an array and a function", function(){
		checkFuncBasics('filter')
	})
	it("Your function should filter out the odd numbers of the array and only contain even numbers", function(){
		var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
		expect(evens[0]).to.equal(2)
		expect(evens[1]).to.equal(4)
	})
})

describe('array.sort()', function(){
	it("should take two inputs", function(){
		checkFuncBasics('people.sort')
	})
	it("Your function should have sorted the array called 'people' into alphabetical order", function(){
		expect(people[0].name).to.equal("Brian")
		expect(people[1].name).to.equal("Jesse")
		expect(people[2].name).to.equal("Justin")
	})
})

describe('array.sort()', function(){
	it("should ", function(){
		checkFuncBasics('people.sort')
	})
	it("Your function should have filtered customers whose first names start with J, map to their full names and then sort the customers alphabetically", function(){
		expect(results[0].fullname).to.equal("Jack White")
		expect(results[1].fullname).to.equal("Joe Blogs")
	})
})
