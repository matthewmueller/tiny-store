'use strict'

/**
 * Module Dependencies
 */

let clone = require('component-clone')
let freeze = require('./freeze')

/**
 * Export `store`
 */

module.exports = store

/**
 * store
 *
 * @param {Mixed} state
 * @return {Function} store
 */

function store (state) {
  state = freeze(clone(state))
  return function update (up) {
    return arguments.length
      ? store(up)
      : state
  }
}
