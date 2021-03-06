# javascript-exercises

General Hints

For all exercises, please prefer readability/expressiveness over maximum algorithmic 
efficiency.
Use the DRY method, and good code practices improve your final test score.
 - You must use explanatory names for your variables.
 - Use ES6 syntax.
It is preferable that you use javascript's standard built-in objects.
Example:
Array, Map, Math.

You may add any other code such as functions, data structures, etc. that you may want
in order to better complete an exercise, beyond what is explicitly asked for. Feel free to
reuse code for multiple exercises as well.


Exercises

1 - Create a function that takes an array of integers as its lone argument and returns 
an array containing the square of each value in the input.

```
For example, an input of `[2, 4, 6, 8, 10]` should result in an output of `[4, 16, 36, 
64, 100]`.

For Testing:
console.log(calculateSquare([2, 4, 6, 8, 10]));
```

2 - Create a function that takes an array of counter objects (see example) as its lone 
argument and returns the sum of all of the counters' `count` properties.
```
For example, an input of `[{count: 1}, {count: 2}, {count: 3}]` should result in an 
output of `6`.

For Testing:
console.log(sumCounters([{count: 1}, {count: 2}, {count: 3}]));
```

3 - Create a function that takes an object in the general shape of `movies` (see below)
as the first argument,and the name of an actor as the second argument. The function 
should return an object that is equivalent to
the input, only with the given actor's name included in each movie's `actors` array. If 
the name is already present, it should not be added again. The function should not 
mutate the input object, or any of its sub-structures.

Note: `movies` is just an example, the function should not assume that the movies in 
the object will be hard-coded.
```
For Testing:
console.log(actorInMovies(movies, "Tom Cruise"));
```

4 - Create a procedure that takes an object in the general shape of `movies` as its lone
argument and appends an unordered list of every actor's name to the DOM's `body` 
element.
The names in the list should be unique (no actor's name should appear in the list more 
than once).
If the list element already exists in the DOM, the procedure should replace the existing 
list with a new one.
Bonus points if the names are alphabetically sorted :)
```
For Testing:
listActors(movies)
```

5 - Create a procedure that retrieves the data from the REST API endpoint hosted here:
https://jsonplaceholder.typicode.com/posts.
The procedure should then log the id of the first post with a userId of 7 and a title that 
begins with the letter "e" or undefined if it does not exist. It should also log any 
potential retrieval errors using `console.error`.


Data Structure


General Hints

You may add any other code such as functions, data structures, etc. that you may want
in order to better complete an exercise, beyond what is explicitly asked for. Feel free to
reuse code for multiple exercises as well.

If you would like to test your solutions, you may call the "testSolutions" function 
defined at the bottom of this document. It is not meant to be comprehensive, but if the 
function completes without throwing any errors then your code passes all of the simple 
test cases.


Exercises

1 - Given an array of integers, return a new array with each number squared.

```
Example 1:
    Input: nums = [2, 4, 6, 8, 10]
    Output: [4, 16, 36, 64, 100]

Example 2:
    Input: nums = [17, 9, 186]
    Output: [289, 81, 34596]

const squares = nums => {}
```

2 - Given an array of counter objects, return the sum of all objects' "count" property.
```
Example 1:
    Input: counters = [{count: 1}, {count: 2}, {count: 3}]
    Output = 6

Example 2:
    Input: counters = [{count: 95}, {count: 8}, {count: 23}, {count: 51}]
    Output: 177

const sum = counters => {}
```
3 - Given a dictionary of movie objects keyed by the movie's title, and a string of an 
actor's name, return a new dictionary with the actor's name included in the array 
referred to by each movie's "actors" property. If the name is already included in 
"actors", it should not be included again. Order does not matter. Your function should 
not modify the input dictionary or any of its sub-structures.

```
Example 1: 
    Input:
        movies = {
            'big': {
                actors: ['Elizabeth Perkins', 'Robert Loggia'],
            },
            'forrest gump': {
                actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
            },
            'cast away': {
                actors: ['Helen Hunt', 'Paul Sanchez'],
            },
        }
        
        actor = 'Tom Hanks'

    Output: {
        'big': {
            actors: ['Elizabeth Perkins', 'Robert Loggia', 'Tom Hanks'],
        },
        'forrest gump': {
            actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
        },
        'cast away': {
            actors: ['Helen Hunt', 'Paul Sanchez', 'Tom Hanks'],
        },
    }

Example 2:
    Input:
        movies = {
            'good will hunting': {
                actors: ['Robin Williams', 'Ben Affleck'],
            },'the departed': {
                actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
            },
        }

        actor = 'Matt Damon'
    
    Output: {
        'good will hunting': {
            actors: ['Robin Williams', 'Ben Affleck', 'Matt Damon'],
        },
        'the departed': {
            actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
        },
    }

const moviesWithActor = (movies, actor) => {}
```

4 - Given two input objects that both represent the root node of a binary tree, return a 
boolean indicating whether or not the two trees are structurally identical. Assume that 
each tree may contain up to 100 nodes.
```
Example 1:
    Input:
        a = {
            value: 1,
            left: {value: 2},
            right: {value: 3},
        }
        b = {
            value: 1,
            left: {value: 2},
            right: {value: 3},
        }
    
    Output: true

Example 2:
    Input:
        a = {
            value: 1,
            left: {value: 2},
        }
        b = {
            value: 1,
            right: {value: 2},
        }

    Output: false

Example 3:
    Input:
        a = {
            value: 1,
            left: {value: 2},
            right: {value: 3},
        }
        b = {
            value: 1,
            left: {value: 2},
            right: {
                value: 3,
                left: {value: 4},
            },
        }
    Output: false

const treesAreEqual = (a, b) => {}
```

5 - Given a string containing alphanumeric characters and dashes `str`, and an integer 
representing group size `n`, return a newly formatted version of `str` in which the 
alphanumeric characters are grouped according to `n`, and separated by dashes. Each 
group should contain exactly `n` characters except for the first one, which may contain
less than `n` characters to account for any remainder.
```
Example 1:
    Input:
        str = "3h5n-8v-7-m"
        n = 4
    Output: "3h5n-8v7m"

Example 2:
    Input:
        str = "4-3t-0-u"
        n = 2
    Output: "4-3t-0u"

Example 3:
    Input:
        str = "j-45i9ut5-34f-x10"
        n = 5
    Output: "j45i-9ut53-4fx10"

const formatted = (str, n) => {}
```
TEST CASES
```
const testSolutions = () => {
    const assert = cond => {
        if (!cond) throw new Error('assertion failure')
    }
    const arrEq = (a, b) => a.every((x, i) => x === b[i])
    const occurences = (xs, x) => xs.reduce((acc, y) => acc + (x === y ? 1 : 0), 0)
    const moviesAreValid = (movies, actor) => {
        for (const key in movies) {
            if (occurences(movies[key].actors, actor) !== 1) return false
        }
        return true
    }
    const deepFreeze = x => {
        if (Array.isArray(x)) {
            Object.freeze(x)
            x.forEach(deepFreeze)
        }
        else if (typeof x === 'object') {
            Object.freeze(x)
            for (const key in x) deepFreeze(x[key])
        }
    }
    const movies1 = {
        'big': {
            actors: ['Elizabeth Perkins', 'Robert Loggia'],
        },
        'forrest gump': {
            actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
        },
        'cast away': {
            actors: ['Helen Hunt', 'Paul Sanchez'],
        },
    }
    const movies2 = {
        'good will hunting': {
            actors: ['Robin Williams', 'Ben Affleck'],
        },
        'the departed': {
            actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
        },
    }
    deepFreeze(movies1)
    deepFreeze(movies2)
    const trees1 = [
        { value: 1, left: { value: 2 }, right: { value: 3 } },
        { value: 1, left: { value: 2 }, right: { value: 3 } },
    ]
    const trees2 = [
        { value: 1, left: { value: 2 } },
        { value: 1, right: { value: 2 } },
    ]
    const trees3 = [
        { value: 1, left: { value: 2 }, right: { value: 3 } },
        { value: 1, left: { value: 2 }, right: { value: 3, left: { value: 4 } } },
    ]
    const trees4 = [
        { value: 1, left: { value: 2 } },
        { value: 1, right: { value: 2 } },
    ]
    const trees5 = [
        { value: 1, left: { value: 2 }, right: { value: 3, right: { value: 4, left: { value: 5 } } } },
        { value: 1, left: { value: 2 }, right: { value: 3, right: { value: 4, left: { value: 5 } } } },
    ]
    assert(arrEq(squares([2, 4, 6, 8, 10]), [4, 16, 36, 64, 100]))
    assert(arrEq(squares([17, 9, 186]), [289, 81, 34596]))
    assert(sum([{ count: 1 }, { count: 2 }, { count: 3 }]) === 6)
    assert(sum([{ count: 95 }, { count: 8 }, { count: 23 }, { count: 51 }]) === 177)
    assert(moviesAreValid(moviesWithActor(movies1, 'Tom Hanks'), 'Tom Hanks'))
    assert(moviesAreValid(moviesWithActor(movies2, 'Matt Damon'), 'Matt Damon'))
    assert(treesAreEqual(trees1[0], trees1[1]) === true)
    assert(treesAreEqual(trees2[0], trees2[1]) === false)
    assert(treesAreEqual(trees3[0], trees3[1]) === false)
    assert(treesAreEqual(trees4[0], trees4[1]) === false)
    assert(treesAreEqual(trees5[0], trees5[1]) === true)
    assert(formatted("3h5n-8v-7-m", 4) === "3h5n-8v7m")
    assert(formatted("4-3t-0-u", 2) === "4-3t-0u")
    assert(formatted("j-45i9ut5-34f-x10", 5) === "j45i-9ut53-4fx10")
    console.log('passed')
}
```
