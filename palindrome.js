'use strict';
const Stack = require('./stack');

function isPalindrome(str) {
  // madam
  const stack = new Stack();
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  // add each char to stack
  for (let i=0; i<str.length; i++) {
    stack.push(str[i]);
  }

  // check each char value to the popped stack value
  for (let i=0; i<str.length; i++) {
    let stackValue = stack.pop();
    let charValue = str[i];
    if (stackValue !== charValue) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('my name is michael'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
