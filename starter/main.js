// Values and Variables

const country = "USA";
const continent = "North America";
let population = 331449281;
// let population = 30;


// console.log(country);
// console.log(continent);
// console.log(population);

// Datatypes
const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof country);


// let const and var
language = "english";
console.log(language)
language ="French";
console.log(language)

// Basic Operators

let splitPop = population / 2
// console.log(splitPop)

// console.log(population)

population++
// console.log(population)


let finPop = 6000000;

if (finPop > population){
    console.log('true')
} else {
    console.log('false')
}

let avgPop = 33000000;

if(avgPop > population){
    console.log('USA is smaller')
} else {
    console.log('USA is bigger')
}


// Strings and Template Literals
let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description)

// Taking Decisions: if/else Statements

if( population > 33000000){
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is below average`)
};

// Type Conversions and Coersion
console.log('19' - '13' + 17);

// Equality Operators: == vs. ===

let numNeighbors= 1
let prompt = `How many neighbor countries does ${country} have?`

if( numNeighbors === 1){
    console.log('Only 1 border!')
} else if (numNeighbors > 1){
    console.log('More than 1 border')
} else {
    console.log('No borders')
}

// Logical Operators

if (language === "English" && population < 50000000 && !isIsland){
    console.log(`You should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria :(`)
}

// Switch Statements

switch (language){
    case 'chinese':
    case 'mandarin':
        console.log('Most number fo native speakers')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('number 4')
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too! :D')
}

// Conditional Ternary Operator

console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`);
