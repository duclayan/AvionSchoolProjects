//functions
function addActivity(){
    var newActivity = document.getElementById('activity-added').value
    var node = document.createElement("ul")
    var textNode = document.createTextNode(' ❌ ' + newActivity)
    node.appendChild(textNode)
    console.log(node)
    document.getElementById('activity-list').appendChild(node)
    newActivity = ' '
}


let container = document.querySelector('.container')
let header = container.querySelector('.header')
let list = container.querySelector('.to-do-list')
let currentDate = header.querySelector('.currentDate')

console.log(currentDate)
let day = new Date()
currentDate.innerHTML = day.constructor();

//input the input
let listContainer = document.querySelector('.to-do-list')
let inputContainer = listContainer.querySelector('.input-field')
let inputTask = inputContainer.querySelector('.new-item').value
let add = inputContainer.querySelector('input-button')
let keys = document.querySelector('.activity-list')

keys.addEventListener('click',e => {
    if(e.target.matches('ul')){
        console.log('ul clicked')
    }
})