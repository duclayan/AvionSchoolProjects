//functions
function removeActivity(){
    console.log("removeActivityFunction")
    let parentElement = document.getElementById('activity-list')
    let node = document.getElementsByClassName('toDelete')
    let element = document.getElementsByTagName("ul")
    let nodeIndex = ''
    if (element.length === 1){
        parentElement.removeChild(parentElement.childNodes[0])
    } else {
        for(var i = 0; i< element.length; i++ ){
            if (element[i].className === "toDelete"){
                nodeIndex = i
                console.log('node found')
                parentElement.removeChild(parentElement.childNodes[nodeIndex])
            }
        }
    }

}
function addActivity(){
    var newActivity = document.getElementById('activity-added').value
    var node = document.createElement("ul")
    let count = document.getElementsByTagName("ul")
    if (count.length > 5){
        alert("Overload of Task. Time to chill")
    } else {
        var textNode = document.createTextNode(' ❌ ' + newActivity)
        node.appendChild(textNode)
        console.log(node)
        document.getElementById('activity-list').appendChild(node)
        document.getElementById('activity-added').value = ''
    }
    
}
alert("Welcome to our to-do-list. Click + to add. Once you're done with the task you can click on the task.")

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
let lists = document.querySelectorAll('ul')
console.log(keys.length)

keys.addEventListener('click',e => {
    if(e.target.matches('ul')){
        let target = e.target
        target.className += "toDelete"
        // console.log(target.className)
        // console.log(target.removeChild)
        // console.log(lists)
        removeActivity()
        //console.log(document.currentScript.nodeName)
    }
})
