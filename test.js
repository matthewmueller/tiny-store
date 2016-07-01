let store = require('./')


let data = { fruit: 'apple' }
apple = store(data)

// try & change FAIL
console.log(apple()) // { fruit: 'apple' }
apple().fruit = 'pear'
console.log(apple()) // { fruit: 'apple' }
data.fruit = 'orange'
console.log(apple()) // { fruit: 'apple' }

// update
let grape = apple({ fruit: 'grape' })
console.log(grape()) // { fruit: 'grape' }
console.log(apple()) // { fruit: 'apple' }
