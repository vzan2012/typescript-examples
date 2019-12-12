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