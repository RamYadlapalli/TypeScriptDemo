TypeScript Features:

1. Superset of JavaScript
2. Types add safety - As name indicates - Compile time type checking - Enables faster development 
3. Compiles to plain JavaScript
4. Cross-platform and Open source 

Declaring Variables
1. var: 
    a. Globally available in the function in which it is declared
    b. "Hoisted" to the top of the function  
    c. can define same variable again
2. let and const: 
    a. Only available in the block which it is decared
    b. Not "Hoisted" to top of the block
    c. Not possible declare the same variable again 

Basic DataTypes:
1. Boolean
2. Number
3. String
4. Array 
5. Enum
6. Any  
7. Void - Not a tyoe, specifies absence of a type

Enums:  
enum Category {Biography, Poetry, Fiction};//0,1,2

Arrays:
1. Arrays work the same way as JS with some notable exceptions 
2. Accessed and used much like JS Arrays
3. Declare as an array of "any" to store any type in the same array 

Tuples:
1. Kind of Arrays where we can specify the type for first few elements 
2. Additional elements can be any type from those previously specified 

Functions in TS Vs JS
1. Types in TS, not supported in JavaScript
2. Arrow functions in TS, introduced in ES2015
3. Required and Optional parameters in TS, In JS all parameters are Optional
4. Specify default parameters in TS, introduced in ES2015
5. Rest parameters, introduced in ES 2015
6. Overloading Support in TS, not supported in JS 


Arrow Functions 
1. Consice syntax for anonymous functions 
2. On it lefts takes paramters and right sode contians the body of the function 
   Ex: let arr = strArray.filter(emp => emp.Name ==="Test1");

Function Types -- Like Delegates
1. Combination of parameter types and return type

Optional and Defautl Parameters:
1. In JS all parameters are optional, in TS we need to explicitly mention the param as optional 
2. We can mark the parameter as Optional just by adding "?" -> Same as C#
3. Default parameters can be set to a literal value or an expression 


Rest Parameters:
1. Collects a group of parameters into a single array 
2. Denoted with an ellipsis prefix on last parameter

Function Overloading: 
1. Can have different types, but type definition can be Same

Interfaces:
