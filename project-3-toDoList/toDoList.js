
let container = document.querySelector('.container')
let header = container.querySelector('.header')
let list = container.querySelector('.to-do-list')
let currentDate = header.querySelector('.currentDate')

console.log(currentDate)
let day = new Date()
currentDate.innerHTML = day.constructor();