function operate(x) {
    return x.side * x.side;
}
var calc = console.log(operate({ shape: 'square', side: 5 }));
var createPlayer = function () {
    return {
        run: function () { },
        addLives: function (n) { },
        score: function () { return -1; }
    };
};
var player = createPlayer();
var personObj = { name: 'zan', SSN: 786 };
personObj.name = 'Username';
// Classes - Examples
var website = /** @class */ (function () {
    function website(url, fbLikes) {
        this.url = url;
        this.facebookLikes = fbLikes;
    }
    website.prototype.likesInK = function () {
        return (this.facebookLikes / 1000) + 'K';
    };
    return website;
}());
var google = new website('http://google.com', 123456);
// google.url = 'http://google.com';
// google.facebookLikes = 123456;
console.log(google.likesInK());
// Getter - Example
// class rectangle {
//     l1: number;
//     l2: number;
//     constructor(l1: number, l2: number) {
//         this.l1 = l1;
//         this.l2 = l2;
//     }
//     get area():number {
//         return this.l1 * this.l2;
//     }
// }
// let myRect = new rectangle(10,20);
// console.log(myRect.area);
// Setter - Example 
var rectangle = /** @class */ (function () {
    function rectangle() {
        console.log('Hello Rectangle');
    }
    Object.defineProperty(rectangle.prototype, "perimeter", {
        set: function (length) {
            this._perimeter = length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rectangle.prototype, "oneside", {
        set: function (side) {
            this.side1 = side;
            this.side2 = (this._perimeter - 2 * this.side1) / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rectangle.prototype, "area", {
        get: function () {
            return this.side1 * this.side2;
        },
        enumerable: true,
        configurable: true
    });
    rectangle.prototype.printAllInfo = function () {
        console.log("Perimeter: " + this._perimeter + ", Side One: " + this.side1 + ", Side Two: " + this.side2);
    };
    return rectangle;
}());
var myRect = new rectangle();
myRect.perimeter = 10;
myRect.oneside = 2.5;
console.log(myRect.area);
myRect.printAllInfo();
// Fat Arrow Functions - Examples 
var car = /** @class */ (function () {
    function car() {
        this.gasAmount = 0;
        this.carObj = document.querySelector('#playerCar');
    }
    car.prototype.run = function () {
        var _this = this;
        setInterval(function () {
            _this.gasAmount++;
            _this.carObj.innerText = _this.gasAmount.toString();
        }, 500);
    };
    return car;
}());
var myCar = new car();
myCar.run();
