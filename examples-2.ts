// Interfaces
// Reference from tutorialsteacher.com
// Example-1
interface operateInterface {
    shape: string;
    side: number;
}

function operate(x: operateInterface) {
    return x.side * x.side;
}

let calc = console.log(operate({ shape: 'square', side: 5 }));


// Example 2 - Interfaces
interface player {
    run(): void;
    addLives(n: number): void;
    score(): number;
}

let createPlayer = (): player => {
    return {
        run: () => { },
        addLives: (n: number) => { },
        score: () => -1
    }
}

let player = createPlayer();

// Example 3 - Interfaces (Read Only Property)
interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen = { name: 'zan', SSN: 786 };
personObj.name = 'Username';



// Classes - Examples
class website {
    url: string;
    facebookLikes: number;

    constructor(url: string, fbLikes: number) {
        this.url = url;
        this.facebookLikes = fbLikes;
    }

    likesInK(): string {
        return (this.facebookLikes / 1000) + 'K';
    }
}

let google = new website('http://google.com', 123456);
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
class rectangle {

    _perimeter: number;
    side1: number;
    side2: number;

    constructor() {
        console.log('Hello Rectangle');
    }

    set perimeter(length: number) {
        this._perimeter = length;
    }

    set oneside(side: number) {
        this.side1 = side;
        this.side2 = (this._perimeter - 2 * this.side1) / 2;
    }

    get area(): number {
        return this.side1 * this.side2;
    }

    printAllInfo(): any {
        console.log(`Perimeter: ${this._perimeter}, Side One: ${this.side1}, Side Two: ${this.side2}`);
    }
}

let myRect = new rectangle();
myRect.perimeter = 10;
myRect.oneside = 2.5;
console.log(myRect.area);
myRect.printAllInfo();



// Fat Arrow Functions - Examples 
class car {
    gasAmount: number;
    carObj: HTMLElement;

    constructor() {
        this.gasAmount = 0;
        this.carObj = document.querySelector('#playerCar')
    }

    run(): void {
        setInterval(() => {
            this.gasAmount++;
            this.carObj.innerText = this.gasAmount.toString();
        }, 500);

    }
}

let myCar = new car();
myCar.run();