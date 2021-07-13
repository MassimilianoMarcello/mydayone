// dom events
//dom content load

//document.addEventListener('DOMContentLoaded', )   fa partire l'azione al caricanento della pagina 


// let user = [{
//         id: 1,
//         user: 'root',
//         pass: 'root123'
//     },
//     {
//         id: 2,
//         user: 'root',
//         pass: 'root4556'
//     }
// ]

// function loadUsers() {
//     console.log(user)
// }
// document.addEventListener('DOMContentLoaded', loadUsers)





//focus     in questo caso devi cliccaare all'interno del tag  (con un unput funziona)
const oenis = document.querySelector('#todo-form')[0]

// console.log(oenis)
// oenis.addEventListener('focus', function(e) {
//     console.log('hello')
//     e.target.classList.add('bg-dark')
//     e.target.classList.add('text-warning')
// })
// console.log(oenis)

// //fucking BLUR e il contrario di  FOCUS
// oenis.addEventListener('blur', function(e) {
//     console.log('hello')
//     e.target.classList.remove('bg-dark')
//     e.target.classList.remove('text-warning')
//     e.target.classList.add('bg-light')
//     e.target.classList.add('text-warning')
// })

//select
const lillo = document.querySelectorAll('.card-body')[1]

result = lillo.childNodes[9].childNodes[1]
alertMessage = document.querySelector('.alert-success')

oenis.addEventListener('select', function(e) {
        lillo.childNodes[9].childNodes[1].childNodes[0].textContent = e.target.value
        console.log('data is fuckyup')
        alertMessage.style.display = 'block'
    }

)


console.log(alertMessage)




//paste
//copy
//select
//Input faccimo  l'iinput per finire