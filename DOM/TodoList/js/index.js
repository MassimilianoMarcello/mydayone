// element generator
let g = t => document.createElement(t)



let div = document.createElement("div");
let result;
div.innerHTML="hello new div container"
div.classList.add('jumbotron')
div.setAttribute("id","container")
result = div.getAttribute("class")
result=div

let link = document.createElement('a')
link.href="https://google.com"
link.innerHTML="Click me"
link.setAttribute('alt','google ref link')
link.setAttribute('target','_blank')
result = link
console.log(result)

/*

<li class="list-group-item d-flex justify-content-between">
                        My todo title
                        <a href="#" class="delete-item">
                            <i class="fa fa-remove"></i>
                        </a>
                    </li>

*/

let li = document.createElement('li')
li.className="list-group-item d-flex justify-content-between"
let a = document.createElement('a');
a.className="delete-item"
let i = document.createElement('i');
i.className="fa fa-remove"
let title = document.createTextNode('This is new todo title')
a.appendChild(i)
li.appendChild(title)
li.appendChild(a)
console.log(li)


let ul = g('ul')
let newli = g('li')

console.log(newli)


let listOfTodos = document.querySelectorAll('.list-group-item')
//console.log(listOfTodos )
listOfTodos.forEach(e=> {
    //console.log(e)
    e.classList.add('display-4')
   // e.remove(); //  remove targeted element
    console.log(e.textContent) // get context of element

})







function RemoveItem(e){
    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.remove()
}

let removeIcons = document.querySelectorAll('.fa-remove')
console.log(removeIcons)

removeIcons.forEach(x=>{
    console.log(x)

    x.addEventListener('click',RemoveItem)


})



// document.body.addEventListener('click',function(event){
//     console.log(event.target)

// })