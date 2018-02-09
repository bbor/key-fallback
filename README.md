# key-fallback

This is a small `node.js` module that retrieves a keyed value from the first object that has it. It's useful if you want to retrieve a configuration value from an object, falling back on a default object if that key is not present.

It's an alternative to using `Object.assign()` or `_.extend()` to build an object that cascades multiple different objects together, if you only need one or two values from whichever object has it first and you don't need to keep the combined object around for later use.

## Features

-	Pass in any number of objects.
-	You can use arrays too. Provide an index instead of a key name, and you'll get the value from the first array that has that index.
-	You don't have to type check the objects you pass, they'll just be ignored if they're undefined or not objects/arrays.

## Usage

```js
var get_value = require('key-fallback');

var defaults = {
	foo:true,
	bar:75,
	whatever:'a string'
};

var user_config = {
	foo:false,
	another:'useless parameter'
}

var value1 = get_value('foo', user_config, defaults);        // returns false
var value2 = get_value('bar', user_config, defaults);        // returns 75
var value3 = get_value('nothing', user_config, defaults);    // returns undefined

```
