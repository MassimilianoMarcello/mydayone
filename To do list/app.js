//navingando nella   d o m
// let result;


// const cardBody = document.querySelectorAll('.card-body')[1]

// result = cardBody.children[4].children[0]
// cardBody.children[4].children[0].innerHTML = 'is my list'
// const btn = document.querySelector("#todo-form > button")

// result = btn.parentNode.parentNode
// console.log(result);\
// const CardBody = document.querySelectorAll('.card-body')



//cambio colore di un li
const allTodos = document.querySelectorAll('.list-group-item:nth-child(even)')
    // result = allTodos

// allTodos.forEach(function(li) {
//     li.classList.add('bg-secondary')
// })
allTodos.forEach(li => {
    li.classList.add('bg-secondary')
})



//creiamo diversi elementi uno dentro l'altro


let div = document.createElement('div')
div.innerHTML = 'Hello'
div.classList.add('Jumbotron')
div.setAttribute('id', "container")
    //result = div.getAttribute('class') // se lo stampo mi da jumbotron quindi un modo per selezionare un qualcosa  get vs set
let ul = document.createElement('ul')
div.appendChild(ul)
let li = document.createElement('li')
ul.appendChild(li)
li.className = 'list-group-item'
ul.className = 'list-group'
let a = document.createElement('a')
li.appendChild(a)
a.setAttribute('href', "#")
a.className = 'delete-item'
let i = document.createElement('i')
a.appendChild(i)
i.className = "fa fa-remove"




console.log(div)