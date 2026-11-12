// 1-masala
// Namuna("div*2") ᔍ "<div></div><div></div>"
// Namuna("p*1") ᔍ "<p></p>"
// Namuna("li*3") ᔍ "<li></li><li></li><li></li>"
function Namuna(str) {
    let tag = str.split("*")[0];
    let son = Number(str.split("*")[1]);
    let result = "";

    for (let i = 0; i < son; i++) {
        result += `<${tag}></${tag}>`;
    }

    return result;
}

console.log(Namuna("div*2"));
console.log(Namuna("p*8"));
console.log(Namuna("li*3"));






// 2-masala
// Namuna(4, { min: 0, max: 5 }) ᔍ true
// Namuna(4, { min: 4, max: 5 }) ᔍ true
// Namuna(4, { min: 6, max: 10 }) ᔍ false
function namuna(n) {
    let yigindi = 0;
    for (let i = 1; i <= n; i++) {
        yigindi += i;
    }
    return yigindi;
}

console.log(namuna(3));
console.log(namuna(10));
console.log(namuna(7));






// 3-masala
// Namuna(4, { min: 0, max: 5 }) ᔍ true
// Namuna(4, { min: 4, max: 5 }) ᔍ true
// Namuna(4, { min: 6, max: 10 }) ᔍ false


function ret(num, range) {
    for (let key in range) {
        if (key === "min)") {
            var min = range[key];
        }
        if (key === "max)") {
            var max = range[key];
        }
        return num >= min && num <= max;
    }
}
console.log(ret(4, { min: 0, max: 5 }));







// 4masala
// Namuna(1) ᔍ true
// Namuna(3) ᔍ false
// // 3^2 = 9
// Namuna(6) ᔍ true
// // 6^2 = 36 (ends with 6)
// Namuna(95) ᔍ false
// 95^2 = 9025 (does not end with 95



function check(num) {
        for(let i = 0; i < num; i++) {
            if(num*num%10==num || num * num % 100 == num) {
                return true;
            }else {
                return false;
            }
}
}
console.log(check(1));
console.log(check(3));
console.log(check(6));
console.log(check(95));






// 5-masala 
// Namuna(["fanta", "cola", "water"]) ᔍ ["water"]
// Namuna(["fanta", "cola"]) ᔍ []
// Namuna(["lemonade", "beer", "water"]) ᔍ ["lemonade",
// "beer", "water"]
function Namuna(drinks) {
    return drinks.filter(function(drink) {
        return drink !== "cola" && drink !== "fanta";
    });
}

console.log(Namuna(["fanta", "cola", "water"]));
console.log(Namuna(["fanta", "cola"]));
console.log(Namuna(["lemonade", "beer", "water"]));







// 6-masala
// Namuna(123) ᔍ 3
// Namuna(56) ᔍ 2
// Namuna(7154) ᔍ 4
// Namuna(61217311514) ᔍ 11
// Namuna(0) ᔍ 
function Namuna(num) {
    return String(num).length;
}

console.log(Namuna(123));       // 3
console.log(Namuna(56));        // 2
console.log(Namuna(7154));      // 4
console.log(Namuna(61217311514)); // 11
console.log(Namuna(77));         // 1





// 7-masala
// Namuna(123) ᔍ 321
// Namuna("001") ᔍ 100
// Namuna(999) ᔍ 999

function Namuna(num) {
    let str = String(num);
    let result = "";

    for (let i = 9; i >= 0; i--) {
        for (let j = 0; j < str.length; j++) {
            if (str[j] == i) {
                result += str[j];
            }
        }
    }

    return Number(result);
}

console.log(Namuna(193));   // 321
console.log(Namuna("001")); // 100
console.log(Namuna(999));   // 999






// 8-masala
// Namuna(5, 9) ᔍ 7
// Namuna(5, 9) ᔍ 9
// Namuna(5, 9) ᔍ 5


function Namuna(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(Namuna(5, 9));
console.log(Namuna(10, 19));
console.log(Namuna(7, 13));




// 9-masala
// Namuna(153) ᔍ true
// // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// Namuna(370) ᔍ true
// Namuna(1652) ᔍ false


function Namuna(num) {
    let str = String(num);
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += Math.pow(Number(str[i]), str.length);
    }

    return sum === num;
}

console.log(Namuna(153));  // true
console.log(Namuna(370));  // true
console.log(Namuna(1652)); // 




// 10-masala
// Namuna("fvLzpxmgXSDrobbgMVrc") ᔍ 6
// Namuna("JMZWCneOTFLWYwBWxyFw") ᔍ 14

function Namuna(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            count++;
        } 
    }

    return count;
}
console.log(Namuna("HeLoLoSahS"));  
console.log(Namuna("JMZWCneOTFLWYwBWxyFw"));  