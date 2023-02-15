let lovesCode = true;

if (lovesCode) {
    console.log('I love to code!');
} else {
    console.log('Coding has its challenge.');
};

var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

if (amysAge > brittanisAge) {
    console.log('Amy is older.');
} else if (brittanisAge > amysAge) {
    console.log('Brittani is older.');
} else {
    console.log('They are the same age.');
};

if (amysBirthYear === brittanisBirthYear) {
    console.log('Amy & Brittani were born in the same year.');
} else {
    console.log('Amy & Brittani were not born in the same year.');
};

let temperature = 55;
let rain = true;

if (temperature >= 80 && rain) {
    console.log('One should wear a t-shirt and take an umbrella.');
} else if (temperature < 80 && temperature > 60 && rain) {
    console.log('One should wear a rain jacket.');
} else if (temperature <= 60 && rain) {
    console.log('One should wear a jacket and carry an umbrella.');
} else if (temperature >= 80 && !rain) {
    console.log('One should wear a t-shirt and shorts.');
} else if (temperature < 80 && temperature > 60 && !rain) {
    console.log('One should wear a light jacket.');
} else if (temperature <= 60 && !rain) {
    console.log('One should wear a heavy jacket.');
};

for (let i = 0; i < 10; i++) {
    console.log('hello');
};

for (let i = 1; i < 11; i++) {
    console.log(i);
};

for (let i = 10; i >=0 ; i --) {
    console.log(i);
};

let score = 0;
let passingScore = 7;

while (score < passingScore) {
    console.log('Your score is not high enough.');
    score++;
};

let changeMyMind = true;

if (changeMyMind) {
    changeMyMind = false;
} else {
    changeMyMind = true;
};

changeMyMind = !changeMyMind;
console.log(changeMyMind);

let z = 5;

while (z > 0) {
    for (let i = z; i > 0; i--) {
    console.log(i);
    };
    z--
};