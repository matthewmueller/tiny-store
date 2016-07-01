
# tiny-store

  Tiny immutable store for any value

## Install

```
npm install tiny-store
```

## Use

```js
let store = require('tiny-store')

// create a fruit
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
```

## License

MIT
