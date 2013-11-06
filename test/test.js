"use strict"

var ndarray = require("ndarray")
var createTrie = require("../trie")

require("tape")(function(t) {

  var trie = createTrie()

  trie.set([1,2,3], 1)
  trie.set([2,4,6], 2)
  trie.set([1,2], 3)
  trie.set(ndarray([1,2,3,4]), 4)

  t.ok(!trie.get([-1]))
  t.ok(!trie.get([6,1]))
  t.ok(!trie.get([1]))
  t.ok(!trie.get([1,2,3,4,5]))

  t.equals(trie.get([1,2,3,4]), 4)
  t.equals(trie.get([2,4,6]), 2)
  t.equals(trie.get([1,2]), 3)
  t.equals(trie.get(ndarray([1,2,3])), 1)

  t.end()
})