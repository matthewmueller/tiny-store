
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

## Implementation Notes

This uses a recursive `Object.freeze` under the hood. It's turned off in production (`process.env.NODE_ENV === 'production'`).

If you `use strict` at top of your JS, the script will throw at runtime if you try and make changes like this: `apple().fruit = "pear"`.

## License

MIT
