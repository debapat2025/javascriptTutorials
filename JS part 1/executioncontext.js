// ============================================
// EXECUTION CONTEXT - Comprehensive Examples
// ============================================

// CONCEPT: Execution Context is the environment where code executes
// It contains: variable environment, lexical environment, and 'this' binding

// ============================================
// 1. GLOBAL EXECUTION CONTEXT
// ============================================
console.log('=== 1. GLOBAL EXECUTION CONTEXT ===');

var globalVar = 'Global Variable';
let globalLet = 'Global Let';
const globalConst = 'Global Const';

function checkGlobalContext() {
  // Inside function, can still access global variables
  console.log('globalVar:', globalVar); // 'Global Variable'
  console.log('this:', this); // Window (in browser) or global (in Node.js)
}

checkGlobalContext();


// ============================================
// 2. FUNCTION EXECUTION CONTEXT - Basic
// ============================================
console.log('\n=== 2. FUNCTION EXECUTION CONTEXT ===');

function myFunction() {
  // New Execution Context created when function is called
  var localVar = 'Local Variable';
  let localLet = 'Local Let';
  
  console.log('Inside function:');
  console.log('localVar:', localVar); // Accessible here
  console.log('globalVar:', globalVar); // Accessible from outer scope
}

myFunction();
// localVar is NOT accessible here - it existed only in function's EC


// ============================================
// 3. NESTED FUNCTIONS & CALL STACK
// ============================================
console.log('\n=== 3. NESTED FUNCTIONS & CALL STACK ===');

function outer() {
  console.log('Outer function - Execution Context created');
  const outerVar = 'I am in outer';
  
  function inner() {
    console.log('Inner function - Execution Context created');
    const innerVar = 'I am in inner';
    console.log('innerVar:', innerVar); // Accessible
    console.log('outerVar:', outerVar); // Accessible via scope chain
  }
  
  inner(); // Inner EC is pushed onto stack, then popped when done
  console.log('Back in outer');
  // Inner EC is destroyed here
}

outer();
// Call Stack order was: [Global] → [Outer] → [Inner] → pop Inner → pop Outer
// Only Global EC remains


// ============================================
// 4. LEXICAL SCOPE & SCOPE CHAIN
// ============================================
console.log('\n=== 4. LEXICAL SCOPE & SCOPE CHAIN ===');

const globalLevel = 'Global';

function level1() {
  const level1Var = 'Level 1';
  
  function level2() {
    const level2Var = 'Level 2';
    
    function level3() {
      const level3Var = 'Level 3';
      
      // Scope chain: can access all parent scopes
      console.log('Level 3 can access:');
      console.log('level3Var:', level3Var);
      console.log('level2Var:', level2Var);
      console.log('level1Var:', level1Var);
      console.log('globalLevel:', globalLevel);
    }
    
    level3();
  }
  
  level2();
}

level1();


// ============================================
// 5. VARIABLE HOISTING IN EXECUTION CONTEXT
// ============================================
console.log('\n=== 5. VARIABLE HOISTING ===');

function hoistingExample() {
  console.log('x before declaration:', x); // undefined (hoisted but not initialized)
  
  var x = 5;
  
  console.log('x after declaration:', x); // 5
}

hoistingExample();

// With let/const (Temporal Dead Zone)
function hoistingWithLet() {
  // console.log(y); // ReferenceError: Cannot access 'y' before initialization
  
  let y = 10;
  console.log('y:', y); // 10
}

hoistingWithLet();


// ============================================
// 6. 'THIS' BINDING IN EXECUTION CONTEXT
// ============================================
console.log('\n=== 6. THIS BINDING ===');

const obj = {
  name: 'Object',
  greet: function() {
    console.log('this.name:', this.name); // 'Object' - this is obj
  },
  nested: {
    name: 'Nested',
    greet: function() {
      console.log('this.name (nested):', this.name); // 'Nested' - this is nested object
    }
  }
};

obj.greet();
obj.nested.greet();

// Arrow function (lexical 'this')
const arrowObj = {
  name: 'Arrow Object',
  greet: () => {
    console.log('arrow this:', this); // 'this' from outer scope (global/module)
  }
};

arrowObj.greet();

// Function called without context
function standaloneFunction() {
  console.log('standalone this:', this); // Global object or undefined (strict mode)
}

standaloneFunction();


// ============================================
// 7. CLOSURE - EC PERSISTENCE
// ============================================
console.log('\n=== 7. CLOSURE ===');

function createCounter() {
  let count = 0; // This variable persists in the closure
  
  return function() {
    count++;
    console.log('Count:', count);
  };
}

const counter = createCounter();
// Outer EC is not destroyed - it's kept alive by the closure
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
// The variable 'count' still exists in the lexical environment


// ============================================
// 8. EXECUTION CONTEXT PHASES
// ============================================
console.log('\n=== 8. EXECUTION CONTEXT PHASES ===');

function phaseExample() {
  // CREATION PHASE (before code execution):
  // - All variable declarations are hoisted
  // - Functions are fully hoisted
  // - 'this' is determined
  
  console.log('Before x is assigned:', x); // undefined (creation phase set it to undefined)
  var x = 10;
  
  console.log('After x is assigned:', x); // 10
  
  // EXECUTION PHASE:
  // - Code runs line by line
  // - Variables are assigned values
}

phaseExample();


// ============================================
// 9. PRACTICAL EXAMPLE: Module Pattern
// ============================================
console.log('\n=== 9. MODULE PATTERN (Using EC) ===');

const Calculator = (function() {
  // Private variables - exist only in this EC
  let result = 0;
  
  return {
    add: function(x) {
      result += x;
      return this;
    },
    subtract: function(x) {
      result -= x;
      return this;
    },
    getResult: function() {
      return result;
    }
  };
})();

Calculator.add(5).subtract(2).add(10);
console.log('Calculator result:', Calculator.getResult()); // 13


// ============================================
// 10. GARBAGE COLLECTION & EC CLEANUP
// ============================================
console.log('\n=== 10. GARBAGE COLLECTION ===');

function tempFunction() {
  let tempVar = 'Temporary';
  console.log('Temp function EC created');
  return tempVar;
}

const result = tempFunction();
// Function EC is destroyed after execution
// tempVar is garbage collected (no longer referenced)
console.log('Temp function EC destroyed, memory freed');


// ============================================
// SUMMARY
// ============================================
/*
EXECUTION CONTEXT SUMMARY:

1. Global EC - Created once when script starts
2. Function EC - Created each time function is called, destroyed when it returns
3. Eval EC - Created when eval() is called (not recommended)

COMPONENTS:
- Variable Environment: var declarations, function declarations
- Lexical Environment: let/const declarations, scope chain
- this Binding: Determined at function invocation

CALL STACK:
- Contexts stack up as functions call each other
- Last in, first out (LIFO)
- Only top context is executing

SCOPE CHAIN:
- Inner functions can access outer scope variables
- JavaScript looks up scope chain if variable not found locally

CLOSURE:
- Function retains reference to its lexical environment
- Outer EC persists even after function returns

GARBAGE COLLECTION:
- EC destroyed when function execution completes
- Variables freed if no longer referenced (except in closures)
*/
