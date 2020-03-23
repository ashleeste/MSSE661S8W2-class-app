var array = [1, 2, 3, 4, 5].sort(function(a, b) {});

function sort(a, b) {
    if (a > b) {
        return 1;
    } else if ( a < b ) {
        return -1;
    }
    return 0;
}

function compare(a, b) {
    // if (a < b) {
    //     return true;
    // }
    // return false;
    return a >= b;
}

var b = false
var a = b | undefined;
console.log(a); 

//instantiating class as objects

var objects = {
    name: 'bob',
    age: 50
};

class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new Person('Bob, 50'));


getLegal() {
    return this.age > 18;
}


