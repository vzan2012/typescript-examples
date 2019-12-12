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
personObj.SSN = 999;
