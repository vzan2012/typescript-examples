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
