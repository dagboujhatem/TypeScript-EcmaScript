// The Object.hasOwn() method with the same behavior as calling Object.hasOwnProperty, takes our Object as the first argument and the property we want to check as the second:

const object = { name: "Mark" };
Object.hasOwn(object, "name"); // true

const object2 = Object.create({ name: "Roman" });
Object.hasOwn(object2, "name"); // false
Object.hasOwn(object2.__proto__, "name"); // true

const object3 = Object.create(null);
Object.hasOwn(object3, "name"); // false