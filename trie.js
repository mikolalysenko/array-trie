"use strict"

var bounds = require("binary-search-bounds")

module.exports = createTrie

function Trie(symbols, children, value) {
  this.symbols = symbols
  this.children = children
  this.value = value
}

var proto = Trie.prototype

proto.set = function(s, value) {
  var v = this
  var n = s.length
  for(var i=0; i<n; ++i) {
    var c = s[i]
    var j = bounds.ge(v.symbols, c)
    if(j < v.symbols.length && v.symbols[j] === c) {
      v = v.children[j]
    } else {
      var l = new Trie([], [], value)
      for(var k=n-1; k>i; --k) {
        l = new Trie([s[k]], [l])
      }
      console.log(j)
      v.symbols.splice(j, 0, c)
      v.children.splice(j, 0, l)
      return value
    }
  }
  return v.value = value
}

proto.get = function(s) {
  var v = this
  var n = s.length
  for(var i=0; i<n; ++i) {
    var c = s[i]
    var j = bounds.le(v.symbols, c)
    if(j < 0 || v.symbols[j] !== c) {
      return
    }
    v = v.children[j]
  }
  return v.value
}

function createTrie() {
  return new Trie([],[])
}