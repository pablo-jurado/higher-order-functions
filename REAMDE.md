# Higher Order Functions
I am a front end engineering student at the Iron Yard. This is our homework about JavaScript Higher Order Functions.

#### Part I
Write your own forEach() function. Your function should take an array and a callback as input. It should run the callback on each element in the array.

---

#### Part II
Write your own map() function. Your function should take an array and a callback as input. It should return a new array, where every element in the original has been transformed by the callback.

---

#### Part III
Write your own filter() function. Your function should take an array and a callback as input. It should return a new array, where elements have been kept or excluded according to the callback.

---

#### Part IV
Write your own reduce() function. This one's new. it should take an array, a callback and a starting value as input.

Calling .reduce() should combine all the elements of the array into a single value. the starting value tells what to start with.

The callback should take as input a "running total" and an array element, in that order. it should return an update to the running total.
(look at the tests for clarification).

---

#### HARD MODE
Using the built-in array.sort(), sort the following array of people by name
```
var people = [
  {name: 'Matt', alma_mater: 'Univ of Texas - Austin'},
  {name: 'Brian', alma_mater: 'Texas A&M'},
  {name: 'Jesse', alma_mater: 'Univ of Texas - Austin'},
  {name: 'Justin', alma_mater: 'Univ of Florida'}
]
```

Using array.map(), array.filter(), and array.sort() on the array below:
  * filter for customers whose first-names start with 'J',
  * map to their fullnames,
  * and then sort the items alphabetically by fullname

Store the resulting mapped, filtered, and sorted array under the variable name `newCustomers`. i'll look for that name in my tests.
