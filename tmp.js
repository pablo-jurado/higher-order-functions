/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////      _____              __               __                 ////
////     / ___/__  ___  ___ / /_______ ______/ /____  _______    ////
////    / /__/ _ \/ _ \(_-</ __/ __/ // / __/ __/ _ \/ __(_-<    ////
////    \___/\___/_//_/___/\__/_/  \_,_/\__/\__/\___/_/ /___/    ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////

// 1. ------------------------------------------------------------ //

// Create a simple constructor function called `Foo` and create a new
// instance from it called `foo`. Don't overthink it. The `Foo` function 
// doesn't even need to contain any code. 

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

var Foo = function(){

}

var foo = new Foo

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //
// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 2. ------------------------------------------------------------ //

// Create a constructor function called `Dog`. This constructor should 
// set at least one property on instances created from it. The property 
// should be called `philosophy` and the value should be `life is ruff`.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

var Dog = function(){
	this.philosophy = 'life is ruff'
}

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 3. ------------------------------------------------------------ //

// Create a constructor function called `Cat`. `Cat` instances should 
// contain a method called `greet` that returns the string `meow`.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

var Cat = function(){
	this.greet = function(){
		return 'meow'
	}
}

var cat = new Cat

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //


// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 4. ------------------------------------------------------------ //

// Create a constructor called `Student`. The constructor should take one 
// argument, which will fill that student's `expertise` attribute. The
// student should also have a `knowledge` attribute, which has a beginning
// value of zero. Yet another property of a student object should be the 
// `learn` method, which will take one input: the amount of knowledge the
// student will gain. 

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

var Student = function(studyInput){
	this.expertise = studyInput
	this.knowledge = 0
	this.learn = function(input){
		this.knowledge = this.knowledge + input
		return this.knowledge
	}
}

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //




	 //  _   _   ___  ____________  ___  ______________ _____ 
	 // | | | | / _ \ | ___ \  _  \ |  \/  |  _  |  _  \  ___|
	 // | |_| |/ /_\ \| |_/ / | | | | .  . | | | | | | | |__  
	 // |  _  ||  _  ||    /| | | | | |\/| | | | | | | |  __| 
	 // | | | || | | || |\ \| |/ /  | |  | \ \_/ / |/ /| |___ 
	 // \_| |_/\_| |_/\_| \_|___/   \_|  |_/\___/|___/ \____/ 
	 //                                                  
	 //		             (
	 //		        .            )        )
	 //		                 (  (|              .
	 //		             )   )\/ ( ( (
	 //		     *  (   ((  /     ))\))  (  )    )
	 //		   (     \   )\(          |  ))( )  (|
	 //		   >)     ))/   |          )/  \((  ) \
	 //		   (     (      .        -.     V )/   )(    (
	 //		    \   /     .   \            .       \))   ))
	 //		      )(      (  | |   )            .    (  /
	 //		     )(    ,'))     \ /          \( `.    )
	 //		     (\>  ,'/__      ))            __`.  /
	 //		    ( \   | /  ___   ( \/     ___   \ | ( (
	 //		     \.)  |/  /   \__      __/   \   \|  ))
	 //		    .  \. |>  \ HARD | __ | MODE /   <|  /
	 //		         )/    \____/ :..: \____/     \ <
	 //		  )   \ (|__  .      / ;: \          __| )  (
	 //		 ((    )\)  ~--_     --  --      _--~    /  ))
	 //		  \    (    |  ||               ||  |   (  /
	 //		        \.  |  ||_             _||  |  /
	 //		          > :  |  ~V+-I_I_I-+V~  |  : (.
	 //		         (  \:  T\   _     _   /T  : ./
	 //		          \  :    T^T T-+-T T^T    ;<
	 //		           \..`_       -+-       _'  )
	 //		 )            . `--=.._____..=--'. ./        



// 5. The `greet` function should live on the `Student` prototype, 
// not on the object instance. 



// --------------------------------------------------------------- //
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 6. ------------------------------------------------------------ //

// Create a constructor called `Key`. Create another constructor
// called `Safe`. Make the Safe constructor take 2 arguments. The
// first argument can be any piece of secret data. Keep it 
// private to the constructor (i.e., don't use something like
// this.secret to transfer it into object instances made 
// from the constructor.)
// The 2nd param to the `Safe` constructor needs to be an instance
// of `Key`. Keep that private as well. Add a function
// to the Safe prototype called `unlock` that accepts a Key instance. 
// If the key matches the key that was used to create the Safe; then
// return the secret value.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

var Key = function(){

}

var Safe = function(arg1,arg2){
	var secret = arg1
	var key = arg2
	this.unlock = function(input){
		if(key === input){
			return secret
		}
	}
}


// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //


// 7. ------------------------------------------------------------ //

// Create a constructor called `Validator`. Give it a method on its
// prototype called `isEmail` that takes a string and returns true if
// the string is a valid email address and false if it is not.

// For this exercise, you must use regular expressions.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //




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
