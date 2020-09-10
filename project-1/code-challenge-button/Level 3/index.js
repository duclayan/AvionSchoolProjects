function submit () {
    let x = document.getElementById("name").value
    document.getElementById("outputName").innerHTML = x;
}

function greeting (command,name) {
    //let x = document.getElementById("name").value
    let greet = String(command)
    if (greet === "Hello") {
        return "Hello," + name;
    } else if (greet === "Goodbye"){
        return "GoodBye," + name;
    }
    //document.getElementById("outputGreeting").innerHTML = "Hello," + x;
}

const greetingPage = document.querySelector('.greetingPage')
const keys = greetingPage.querySelector('.greetingKeys')
const display = document.querySelector('.greetingDisplay')

console.log(greetingPage);
keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedText= display.textContent
        const previousKeyType = greetingPage.dataset.previousKeyType
        const previousText = greetingPage.dataset.previousText 
        
        if(!action){
            console.log("Name!")
            var output = ''
            greetingPage.dataset.previousKeyType = keyContent
            greetingPage.dataset.previousKeyType = 'name'
            if (previousKeyType === 'greetHello'){
                output = greeting('Hello',keyContent)
                display.textContent = output
            } else if (previousKeyType === 'greetGoodBye'){
                output = greeting('Goodbye',keyContent)
                display.textContent = output
            } else {
                display.textContent = "Enter Hello or Goodbye"
            }
        }
        if(action ==='Hello'){
            if (previousKeyType === 'name'){
                const output = greeting('Hello',previousText)
                display.textContent = output
            } else {
                display.textContent = "Please click a name"
            }
            greetingPage.dataset.previousKeyType = 'greetHello'       
        }
        if(action === 'Goodbye'){
            if (previousKeyType === 'name'){
                const output = greeting('Goodbye',previousText)
                display.textContent = output
            } else {
                display.textContent = "Please click a name"
            }
            greetingPage.dataset.previousKeyType = 'greetGoodBye'

        }
        if(action === 'Clear'){
            display.textContent = ''
            if(previousKeyType === 'greetGoodbye' || previousKeyType === 'greetHello'|| previousKeyType === 'name'){
                greetingPage.querySelector("#del").innerHTML = "AC"
            } else if (previousKeyType === 'clear') {
                console.log('another clear')
                greetingPage.dataset.previousKeyType = ' '
                greetingPage.dataset.previousText = ' '
                greetingPage.querySelector("#del").innerHTML = "Clear"
            }
            greetingPage.dataset.previousKeyType = 'clear'
            console.log('Clear')
        }
        if (previousKeyType === 'clear' && action!= 'clear'){
            greetingPage.querySelector("#del").innerHTML = "Clear"
        }
          
    }
}

)

