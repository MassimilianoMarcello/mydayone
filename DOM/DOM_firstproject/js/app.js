// window object
let result;

// let tools = { // clone of window
//     x:function(str){
//         alert(str)
//     }
// }

// tools.x('intecbrussel')

window.intecbrussel=function(str){
    alert(str)
}


result = window

result = window.outerWidth
result = window.outerHeight

// window.addEventListener('resize',function(){
//     console.log(window.outerWidth)
//     console.log(window.outerHeight)
// })


// document
result = window.document
result = document;
//result = document.write('hello')
result = document.all;
result = document.all.length
result = document.head
result = document.body
result = document.location
result = document.scripts
result = document.links
result = document.links[0]
result = document.links[0].className
result = document.links[0].getAttribute('href')
result = document.links[0].classList


// forms
result = document.forms
result = document.forms.length
result = document.forms[1]
// const [searchForm, myContactForm] = document.forms
// result = searchForm
// result = myContactForm
result = document.forms[1].id
result = document.forms[1].method


// select elements using dom methods

/*

getelementbyid > 
getelementbyclassname
getelementbytagname
queryselector
queryselectorall

*/

// getElementById
result = document.getElementById("add")
result = document.getElementById('password')

// getElementsByClassName
result = document.getElementsByClassName("form-group");
result = document.getElementsByClassName('btn')

// getElementsByTagName

result = document.getElementsByTagName('input')
result = document.getElementsByTagName('p')

// querySelector

// .display-3
// #redBtn
result = document.querySelector(".display-3")
result = document.querySelector('#redBtn')
result = document.querySelector('.btn-outline-danger')
result = document.querySelector('button')

// querySelectorAll
result = document.querySelectorAll('button') // find elements by tagnames
let formGroup = document.querySelectorAll('.form-group') // NODELIST / ARRAY/ OBJECT

//formGroup.forEach(el=>console.log(el))
// formGroup.forEach(el=>{
//   //  console.log(el.innerHTML)
//   el.innerHTML="HELLO HELLO DOM MANIPULATION"
// })

let buttons = document.querySelectorAll('button')
// console.log(buttons)

for(btn of buttons){
    btn.innerHTML="test button"
}

let allText = document.querySelectorAll('.card-title')

allText.forEach(text=>text.innerHTML="HELLO WORLD!")

allText.forEach(text=>{
    text.addEventListener('click',(e)=>{
        alert('hello friend!')
    })
})




console.log(result)

