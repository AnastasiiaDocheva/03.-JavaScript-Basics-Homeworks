Array.prototype.removeItem = function(value) {	// The prototype constructor allows you to add new properties and methods to the Array() object.
    while (this.indexOf(value) >= 0) {			// When constructing a property, ALL arrays will be given the property, and it's value, as default.
        this.splice(this.indexOf(value), 1);	// When constructing a method, ALL arrays will have this method available.
    }	// At position 2, remove 2 items:
    console.log(this);
    return this;
};
var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);

var arr1 = ['hi', 'bye', 'hello' ];
arr1.removeItem('bye');