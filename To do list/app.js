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
li.innerHTML = 'kiss'
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

//con questa funzione abbiamo creawto qualche cosa di piu rapido
let g = t => document.createElement(t)
let span = g('span')

// console.log(span) 
//seleziona il bottone delete all
let debttn = document.querySelectorAll('.card-body')[1]
result = debttn.children[6]
    //cambiare testo
debttn.children[6].innerHTML = 'change'
    //cambiare style
debttn.children[6].style.color = 'red'
debttn.children[6].style.backgroundColor = 'blue'

//parentElement `e il selezionatore sopraelemento
result = debttn.parentElement



//questa e la formula per rimuovere un singolo li
//prima di tutto selezioniamo l'elemento che contiene la  x ,perchE e l'elemento da cliccare e selezionere per cance;llare
const ullist = document.querySelectorAll('.fa-remove')
    //selezioniamo tutti gli elementi e diamogli un event listener e una funzione di remove
ullist.forEach((x) => {
    // console.log(x);
    x.addEventListener('click', RemoveItem)
})

//creiamo la funzione di remove

function RemoveItem(x) {
    //uso la console per trovare l'elemento che mi interessa
    console.log(x.target.parentElement.parentElement)
        //creo la linea di codice che rimuove lo specifico elemento
    x.target.parentElement.parentElement.remove()
}


//console.log(result)




//adesso facciamo un po ' di analisi dell'event
document.body.addEventListener('click', () => {
        console.log("hello")
    }) //qualsiasipunto del body tocchiamo sulla consoile stampa hello

//nel seguente esempio al tocco stampiamoil tipo di event: mouseevent
document.body.addEventListener('click', (event) => {
    console.log(event.target)
})

//facciamo funzionare l'input e il tasto
//prima di tutto  selezioniamogli elementi

//selezioniamo input testo
const inserText = document.querySelector('#todo-form')
result = inserText.children[0].children[0].children[0]
    //selezioniamo il bottone
const btn = document.querySelector('#todo-form')
result = btn.children[1]



function ascolta(x)

console.log(result)