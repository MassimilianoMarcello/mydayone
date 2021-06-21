// const ages = [33, 45, 45, 67, 32, 67, 2, 22, 56, 43, 65, 23, 76, 7, 43];
// const companies = [
//     { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
//     { name: 'Company Two', category: 'Retail', start: 1984, end: 2008 },
//     { name: 'Company Three', category: 'Auto', start: 1977, end: 2011 },
//     { name: 'Company Four', category: 'Tecnology', start: 1976, end: 2012 },
//     { name: 'Company Five', category: 'Finance', start: 1961, end: 2016 },
//     { name: 'Company Six', category: 'Auto', start: 1934, end: 2016 },
//     { name: 'Company Seven', category: 'Commerce', start: 1945, end: 2019 },
//     { name: 'Company Eight', category: 'Retail', start: 1999, end: 2021 },
//     { name: 'Company Nine', category: 'Dissing', start: 2000, end: 2008 },


// ];

// console.log(companies[[2]]);

// console.log(...companies);

//console.log(companies);
//forEach

//filter

//map

//sort

//reduce
//copy arrays met spread operator
// var arr1 = [1, 2, 3, ];
// arr1.push(9);
// var arr2 = [...arr1];
// arr2.push(4);
// //concatenate arrays
// var arr1 = [1, 2, 4];
// var arr2 = [3, 4, 5];
// //arr1.concat(arr2);
// arr1 = [...arr1, 2, ...arr2];
// console.log(arr1)
// console.log(arr1);
// var arr1 = [1, 2, 4];
// var arr2 = [3, 4, 5, { a: 1, b: 2 }];
// console.log(arr2[3]);


// console.log(arr1);
// console.log(arr2);
// let age;
// const ageLicence = 18;
// age = 15


// if (age >= 18) {
//     console.log('you can have la patente');
// } else {
//     const yearsMore = ageLicence - age;
//     console.log(`wait ${yearsMore}`);
// }


var markBmi = 32;
var jhonBmu = 34;
if (markBmi > jhonBmu) {
    console.log(`Mark's BMI (${markBmi})is Higher than Jhon's(${jhonBmu})`);
}
if (markBmi < jhonBmu) {
    console.log(`Jhon's BMI (${jhonBmu})is Higher than Mark's(${markBmi})`);
} else { console.log("They have the same MBI"); }