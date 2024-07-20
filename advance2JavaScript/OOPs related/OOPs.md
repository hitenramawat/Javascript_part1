# JavaScript and Classes
JavaScript has a nuanced relationship with classes. Here's a breakdown:

Technically not classes: At its core, JavaScript is a prototype-based language. It doesn't have classes in the same way as Java or C++.

Class-like syntax: Despite that, JavaScript introduced class syntax in 2015. This syntax provides a familiar way to define objects and simulate classes.

Syntactic sugar:  These classes are essentially syntactic sugar over the existing prototype-based inheritance model. They make writing code that uses object-oriented principles more readable and manageable.

Benefits of classes:  The class syntax offers several advantages. It promotes better code organization, improves readability, and makes JavaScript more approachable for developers familiar with class-based languages.

In summary, JavaScript doesn't have classes in the strictest sense, but it provides a class-like syntax that makes it easier to work with objects in an object-oriented way.


## OOPs
1.Object - collection of properties and methods

## why use OOP

## parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
1.Abstraction
2.Encapsulation
3.Inheritance
4.Polymorphism

You've got it exactly right! Those are the four pillars of object-oriented programming (OOP):

## Abstraction:-
 This focuses on hiding unnecessary details and showing only essential information. Imagine a light switch - you just flip it, but the complex electrical workings are hidden. In OOP, you can create abstractions like classes that represent real-world entities and define how to interact with them without revealing all the underlying code.

## Encapsulation:-
 This is about bundling data (properties) and methods (functions) together within a class and controlling access to them. It promotes data security and makes code more maintainable. Think of a capsule containing medicine - the capsule itself might have information about the dosage, but you need to open it to access the medicine.

## Inheritance:-
 This allows creating new classes (subclasses) that inherit properties and behaviors from existing ones (superclasses). It promotes code reusability and creates hierarchical relationships between objects. Imagine animals - a cat class can inherit from a mammal class, inheriting general mammal traits and adding specific cat-like behaviors.

## Polymorphism:-
 This refers to the ability of objects to respond differently to the same message. Subclasses can override inherited methods to provide their own implementation. For example, a "makeSound" method might produce a meow for a cat and a bark for a dog, even though it's called the same way.


## All about 'new':-
Steps When Using the new Keyword:

Object Creation: The new keyword triggers the creation of a brand new, empty JavaScript object. This object will hold the properties and methods specific to the instance being created.

Prototype Linking: The newly created object gets linked to the prototype property of the constructor function. This linkage establishes an inheritance chain, where the object can access properties and methods defined on the constructor's prototype (and potentially further up the prototype chain).

Constructor Execution: The constructor function is invoked with the arguments provided when calling new. Inside the constructor, the this keyword refers to the newly created object. This allows the constructor to assign properties and methods to the object being constructed.

Implicit Return: If the constructor function doesn't explicitly return a value, JavaScript implicitly returns the newly created object (this). This is why it's common practice for constructors to not have a return statement.

Key Takeaways:

The new keyword is essential for creating object instances using constructor functions.
Prototype linking establishes inheritance and allows objects to inherit properties and methods from their prototypes.
The this keyword inside a constructor function references the object being





## what is the difference between properties and methods 


Properties:

Data Storage: Properties are essentially named variables that hold data values within an object. They represent the object's state or attributes.
Types of Values: Properties can store various data types, including strings, numbers, booleans, arrays, objects, and functions.
Access: Properties can be accessed using dot notation (object.propertyName) or bracket notation (object["propertyName"]).




Methods:

Functionality: Methods are functions defined within an object. They provide actions or behaviors that the object can perform.
Function Calls: Methods are invoked using dot notation followed by parentheses (object.methodName()).
this Keyword: Inside methods, the this keyword refers to the object itself, allowing methods to access and modify the object's properties.