Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.

A mutable object is an object whose state can be modified after it is created.

Immutables are the objects whose state cannot be changed once the object is created.

let immutableString = "Hello";

// In the above code, a new object with string value is created.

immutableString = `${immutableString} World`;

// We are now appending "World" to the existing value.
On appending the "immutableString" with a string value, following events occur:

Existing value of "immutableString" is retrieved
"World" is appended to the existing value of "immutableString"
The resultant value is then allocated to a new block of memory
"immutableString" object now points to the newly created memory space
Previously created memory space is now available for garbage collection.

When i update and object or array, the object/array gets updated and continues to point to the 
old memory space. New block of memory is not getting created.

But to acheive change detection, we need to make the updated object/array to point to a new memory
location.

------------------------------------------------------------------------------------------

Points to Note:

1. If @Input() property is an array or object ,any changes in them will be detected only if
the updated object/array points to a new memory location.
For primitive types, there is no such rule. Any changes will be reflected directly.

2. DOM events will trigger change detection.

3. Change detection will not trigger inside async actions even if its inside a method called via a
dom event. This is applicable only for objects and arrays.
Primitive types can trigger change detection even inside async actions.
