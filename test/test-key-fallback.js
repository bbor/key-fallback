
var assert = require('assert');
var get_value = require('../lib/key-fallback.js');

console.log('running tests...')

var defaults = {
  'value1':'something',
  'value2':'somethingelse',
  'value3':false,
  'value4':85,
  'value5':{
    'subobject':true
  }
}

var config1 = {
  'value1':'another thing',
  // leave out value2
  'value3':true,
  'value4':107,
}

var config2 = {
  'value1':'a third string thing'
}

var testix = 1;
var value;

function report_fail(str) {
  return "Test " + testix++ + " failed! Value returned was " + str;
}

// test getting a value that is present in the first object
value = get_value('value1', config1, defaults);
assert( value === 'another thing', report_fail(value));

// test falling back to the second object
value = get_value('value2', config1, defaults);
assert( value === 'somethingelse', report_fail(value));

// test falling back to a third object
value = get_value('value5', config1, config2, defaults);
assert( typeof value === 'object' && value.subobject === true, report_fail(typeof value));

// test that if it's not anywhere it results in undefined
value = get_value('value6', config1, config2, defaults);
assert( typeof value === 'undefined', report_fail(typeof value));

// test passing an empty object
value = get_value('value1', {}, defaults);
assert( value === 'something', report_fail(value));

// test passing undefined objects
var dsadsa, ewrewr, qwerty;
value = get_value('value1', dsadsa, ewrewr, qwerty, defaults);
assert( value === 'something', report_fail(value));

// test passing non-objects
var dsadsa = 'a string';
var ewrewr = 200;
var qwerty = new RegExp(/^whee$/);
value = get_value('value1', dsadsa, ewrewr, qwerty, defaults);
assert( value === 'something', report_fail(value));

// test arrays
var array1 = ['cat', 'sheep', 'goat'];
var array2 = ['Batman', 'Moon Knight', 'Daredevil', 'Aquaman'];
value = get_value(2, array1, array2);
assert( value === 'goat', report_fail(value));

value = get_value(3, array1, array2);
assert( value === 'Aquaman', report_fail(value));

value = get_value(4, array1, array2);
assert( typeof value === 'undefined', report_fail(typeof value));

console.log('passed!')