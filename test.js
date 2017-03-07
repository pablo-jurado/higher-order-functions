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
	it("should run your callback function on each element of your array", function() {
		var total = 1
		forEach([1, 2, 3, 4], function(a){ total *= a; })
		expect(total).to.equal(24)
	})
})

describe('map()', function(){
	it("should be a function that takes an array and a function", function(){
		checkFuncBasics('map')
	})
	it("should run your callback function over your input array and return new results", function(){
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
	it("should run your callback function over each element of your array and remove any elements that do not fit the parameters of your callback", function(){
		var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
		expect(evens[0]).to.equal(2)
		expect(evens[1]).to.equal(4)
	})
})

describe('reduce()', function(){
	it("should be a function that takes an array and a function", function(){
		checkFuncBasics('reduce')
	})
	it("should concatenate all elements of your array and return a new value based on the parameters of your callback function.", function(){
		assert.equal(10, reduce([1, 2, 3, 4], function(accumulator, element){ return accumulator + element }))
	})
	it("should concatenate all elements of your array and return a new value based on the parameters of your callback function.", function(){
		assert.equal(24, reduce([1, 2, 3, 4], function(accumulator, element){ return accumulator * element }))
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
