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

describe('Foo', function() {
	it("should be a function", function() {
		checkFuncBasics('Foo')
	})
})

describe('foo', function(){
	it("should be an instance of a constructor called Foo", function() {
		expect(foo).to.be.an.instanceOf(Foo)
	})
})

describe('Dog)', function() {
	it("should be a function", function() {
		checkFuncBasics('Dog')
	})
	it("should assign a property called 'philosophy', with the value, 'life is ruff', to objects created from it using the `new` keyword.", function() {
		var dogFriend = new Dog()
		expect(dogFriend).to.have.property('philosophy')
		expect(dogFriend.philosophy).to.equal('life is ruff')
	})
})

describe('Cat', function(){
	it('should be a function', function() {
		checkFuncBasics('Cat')
	})
	it("should assign a method called `greet()` to objects that are created from it using the `new` keyword.", function() {
		var catFriend = new Cat()
		expect(catFriend).to.have.property('greet')
		expect(catFriend.greet).to.be.a('function')
		expect(catFriend.greet()).to.equal('meow')
	})
})

describe('Student', function() {
	it("should be a function that takes one input, a string defining a student's field of study.", function() {
		checkFuncBasics('Student',1)
	})
	it("should assign an `expertise` property to objects created from it. the value of that property should come from an input passed into the constructor.", function() {
		var starchild = new Student('physics')
		expect(starchild).to.have.property('expertise')
		expect(starchild.expertise).to.equal('physics')
	})

	it("should assign a `knowledge` property to objects created from it. that property should have a starting value of 0.", function() {
		var joeDirt = new Student('agriculture')
		expect(joeDirt).to.have.property('knowledge')
		expect(joeDirt.knowledge).to.equal(0)
	})

	it("should assign a method called `learn` to objects created from it.", function() {
		var joeDirt = new Student('agriculture')
		expect(joeDirt).to.have.property('learn')
		assert.equal(joeDirt.learn.length, 1, 'joeDirt.learn() should take one input, the amount that the student\'s knowledge will grow by.')
	})

	describe('.learn', function() {
		it("should take one input, the amount that the student\'s knowledge will grow by.", function() {
			var joeDirt = new Student('agriculture')
			expect(joeDirt.learn).to.have.length(1)
		})

		it("should increment the knowledge of the student it was called on, according to the amount passed in as input.", function() {
			var joeDirt = new Student('agriculture')
			joeDirt.learn(10)
			joeDirt.learn(20)
			expect(joeDirt.knowledge).to.equal(30)
		})

		it(", for hard mode, should live on the Student prototype. This will save memory, as multiple copies of the same function won't be assigned to every individual Student instance.", function() {
			var joeDirt = new Student('agriculture')
			expect(joeDirt.hasOwnProperty('learn')).to.equal(false)
		})
	})
})

describe('Key', function() {
	it('should be a function. it doesn\'t actually need to do anything.', function() {
		checkFuncBasics('Key')
	})
})

describe('Safe', function () {
	it('should take two inputs, a secret value and a `Key` instance', function() {
		checkFuncBasics('Safe', 2)
	})

	it('should assign a method called `.unlock` to its instances', function() {
		expect(new Safe().unlock).to.be.a('function')
	})

	describe('.unlock', function() {
		it('should take one input, a `Key` instance', function() {
			checkFuncBasics('Safe.unlock')
		})

		it('should check whether the input `Key` is the same as the one received when the safe was originally created. if so, it should return the secret value. otherwise, it should return null.', function() {
			var sensitive = "shhhhh!";
			var rightKey  = new Key();
			var safe      = new Safe(sensitive, rightKey);
			var wrongKey  = new Key();

			expect(safe.unlock(wrongKey)).to.equal(null)
			expect(safe.unlock(rightKey)).to.equal(sensitive)

		})
	})

});

describe('Validator', function() {
	it('should be a function', function() {
		checkFuncBasics('Validator')
	})
	it('should assign an instance method called `isEmail`' ,function() {
		expect(new Validator().isEmail).to.be.a('function')
	})
	describe('.isEmail', function() {
		it('should take as input a string and return true if that string is a valid email address, otherwise false.', function() {
			var theValidator = new Validator()
			expect(theValidator.isEmail("name@theironyard.com")).to.equal(true)
			expect(theValidator.isEmail("name-at-theironyard.com")).to.equal(false)	
		})
	})
})
