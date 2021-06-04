//objects test with nested arrays

let student = {
    firstName: "Konken",
    lastName: "Naruto",
    age: 23,
    hobbies: {
        instruments: ["clarinet", "trumpet"],
        books: ["Baldovino il principe", "La bella addormentata nel bosco"],
    },
    scores: [23, 34, 45, 56, 67],
};
//modern template literal
let output = `My name is ${student.firstName} ${student.lastName} , I am ${student.age} years old, and i love this book: ${student.hobbies.books} `;
console.log(output);

//function
function sum(x, y) {
    let output = (x + y)
    console.log(output)
}
sum(3, 4);



//function print an -object;



let person = {
    firstName: 'Angelo',
    lastName: 'Konken'
}

function sayMyName(name) {
    console.log(`my name is ${name}`)
}
sayMyName('Angelo Konken');
sayMyName(`${person.firstName, person.lastName}`);



//printer insidetheobject
let persone = {
    firstName: 'Angelo',
    lastName: 'Konken',
    age: 28,
    country: 'unknown',
    printPersonInfoso: function() {
        console.log('Hello');
        console.log(`${persone.firstName}\n${persone.lastName}\n${persone.age}\n${persone.country}`)
    }

}
persone.printPersonInfoso();


//another objecte
let i = 0
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let index = nums.length
let total = 0
while (i < index) {
    // console.log(nums[i])
    total += nums[i]
        // console.log(total) console interna fa i calcoli per ogni aggiunta 
    i++
}
console.log(total)