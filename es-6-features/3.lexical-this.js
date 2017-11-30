function Car (type) {
    this.func = function() {
        return this;
    }    

    this.arrowFunc = () => {
        return this;
    };
}

var car = new Car();

console.log('Func: ', car.func());

console.log('arrowFunc: ', car.arrowFunc());