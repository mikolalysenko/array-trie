array-trie
==========
A [trie](http://en.wikipedia.org/wiki/Trie) data structure for arrays instead of strings.  There are already many of these on npm, but this is the first one that operates on arrays instead of strings.  Inputs can also be specified as 1D [ndarrays](https://github.com/mikolalysenko/ndarray).

# Example

```javascript
var createTrie = require("array-trie")

var trie = createTrie()

trie.set([1,2,3], 1)
trie.set([1,2], 2)
trie.set([2,5,6], 3)

console.log(trie.get([1,2,3]))
console.log(trie.get([2,5,6]))
console.log(trie.get([1,1,1]))

//Also works if inputs are 1D ndarrays
var ndarray = require("ndarray")
trie.set(ndarray([1,2,3,4]), 5)

console.log(trie.get(ndarray([1,2])))
```

# Install

    npm install array-trie

# API

```javascript
var createTrie = require("array-trie")
```

## Constructor

### `var trie = createTrie()`

Creates an empty trie data structure

**Returns** A new `trie`

## Methods

### `trie.set(string, value)`
Inserts `string` into `trie` with value of `value`, or updates the value of string if already set.

* `string` is the string to insert
* `value` is the value to assign to the string

**Returns** `value`

### `trie.get(string)`
Retrieves the value of `string` in the trie

* `string` is an array of primitive types to search

**Returns** The value of the string in the trie

### `trie.symbols`

An array of all labels for the children of the trie in sorted order

### `trie.children`

An array of all children for the trie node

### `trie.value`

The value associated with this node in the trie

# Credits
(c) 2013 Mikola Lysenko. MIT License