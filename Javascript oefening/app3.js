/*var students = [

{ name: 'Aldo', score: [50, 60, 70, 80, 90, 100] }, { name: 'Giovanni', score: [50, 60, 50, 80, 90, 100] }, { name: 'Giacomo', score: [50, 60, 70, 80, 90, 100] }, { name: 'Yvette', score: [50, 60, 70, 80, 50, 100] }, { name: 'Rodrighetta', score: [50, 60, 70, 80, 50, 100] }, { name: 'Elena', score: [50, 60, 70, 80, 90, 100] }, { name: 'Posillipa', score: [50, 60, 70, 80, 90, 100] }, { name: 'Anselmina', score: [50, 60, 50, 80, 50, 50] }
]
const filteredStudents = students.filter((item) => {
    return item.score >= 50
})
console.log(filterdStudents);
var newArray = students.filter(function(el) {
    return el.score >= 60;

});
console.log(newArray)*/
let students = [

    { name: 'Aldo', score: 50 },
    { name: 'Giovanni', score: 60 },
    { name: 'Giacomo', score: 70 },
    { name: 'Yvette', score: 80 },
    { name: 'Rodrighetta', score: 50 },
    { name: 'Elena', score: 60 },
    { name: 'Posillipa', score: 70 },
    { name: 'Anselmina', score: 90 }


]

var newArray = students.filter(function(el) {
    return el.score >= 60;

});
console.log(newArray)


var passExam = students.map(function(el) {
    return el.score >= 60;
});
console.log(passExam);