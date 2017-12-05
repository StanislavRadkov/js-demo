'use strict'; // function or global scope
 a = 5; // 'a' is not declared

var x = 3; 
delete x;

// Duplicate parameters
function test(p1, p1) { 
    console.log(`${p1} ${p1}`);
}

// With statement not allowed
with (Math){x = cos(2)};