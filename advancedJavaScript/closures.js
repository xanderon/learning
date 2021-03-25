// Memory efficient

function heavyDuty(index) {
    //big operation of accessing a massive array
    //what if we access this function many times
    const bigArray = new Array(7000).fill('🥳'); //create memory, we don't reference it, and it gets destroyed
    console.log('A - Created');
    // create array and only create it once and have it in momory all the time
    // using closures
    return bigArray[index];
}

function heavyDut2() {
    const bigArray = new Array(7000).fill('🥳'); //create memory, we don't reference it, and it gets destroyed
    console.log('B - Created');
    return function (index) {
        return bigArray[index];
    }
}

console.log(heavyDuty(655))
console.log(heavyDuty(655))
console.log(heavyDuty(655))

const getHeavyDuty = heavyDut2();

console.log(getHeavyDuty(655))
console.log(getHeavyDuty(653))
console.log(getHeavyDuty(155))

// /usr/bin/node ./closures.js
// A - Created
// closures.js:7
// 🥳
// closures.js:25
// A - Created
// closures.js:7
// 🥳
// closures.js:26
// A - Created
// closures.js:7
// 🥳
// closures.js:27
// B - Created -> we maintained closure scope
// closures.js:17
// 3
// 🥳
// closures.js:31

// ENCAPSULATION

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '🌟';
    }
    //keeps running the function i'm giving it
    setInterval(passTime, 1000);
    return {
        //launch: launch, -> encapsulation
        totalPeaceTime: totalPeaceTime
    }
}

const ohNo = makeNuclearButton();

console.log(ohNo.totalPeaceTime());


let view
function initialize() {
    view = '⛰';
    console.log('view has been set!');
}
initialize();
initialize();
initialize();
console.log(view);

const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log(`Index: [${i}]`);
    }, 3000)
}

for (var i = 0; i < array.length; i++) {
    (function (iClosure) {
        setTimeout(function () {
            console.log(`Index B: [${iClosure}]`);
        }, 3000)
    })(i)
}