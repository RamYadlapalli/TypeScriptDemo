TypeScript Features:

1. Superset of JavaScript
2. Types add safety - As name indicates - Compile time type checking - Enables faster development 
3. Compiles to plain JavaScript
4. Cross-platform and Open source 

Declaring Variables:

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
7. Void - Not a type, specifies absence of a type

Enums:  
enum Category {Biography, Poetry, Fiction};//0,1,2

Arrays:

1. Arrays work the same way as JS with some notable exceptions
2. Accessed and used much like JS Arrays
3. Declare as an array of "any" to store any type in the same array 

Tuples:

1. Kind of Arrays where we can specify the type for first few elements 
2. Additional elements can be any type from those previously specified 

Functions in TS Vs JS:

1. Types in TS, not supported in JavaScript
2. Arrow functions in TS, introduced in ES2015
3. Required and Optional parameters in TS, In JS all parameters are Optional
4. Specify default parameters in TS, introduced in ES2015
5. Rest parameters, introduced in ES 2015
6. Overloading Support in TS, not supported in JS 


Arrow Functions:

1. Consice syntax for anonymous functions 
2. On it lefts takes paramters and right sode contians the body of the function 
   Ex: let arr = strArray.filter(emp => emp.Name ==="Test1");

Function Types -- Like Delegates in C#:

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

 One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

Interfaces for funtion types:

Interfaces are capable of describing the wide range of shapes that JavaScript objects can take. In addition to describing an object with properties, interfaces are also capable of describing function types.

Extending Interfaces:

Interfaces can be extended from other interfaces 

Classes:

1. Template for creating objects
2. Provides state storage and behavior 
3. Encapsulates resusable functionality 
4. Through Classes Typescript adds Object Oreiented features to JS

    Constructors:

    1. Method named "constructor" - maximum of one per class 
    2. We can use optional parameters to call different ways  
    3. Executed by using a new keyword 
    
    Properties and Methods:

    1. Public properties 
    2. Static Properties  - Store data specofoc to the class not to the instances of the class 

    Access Modifiers:

    1. By default "Public" will be applied in TS 
    2. Private - Only in the class 
    3. Protected
    
    Extending classes with Inheritence

    Abstract classes

    Class Expressions: 

    Another ES2015 featyre that TypeScript supports. Using class expressions we can omit the class name while creating the classes.




