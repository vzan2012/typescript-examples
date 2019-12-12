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