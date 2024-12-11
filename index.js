// mode switch setup
const modeSwitch = document.querySelector('.mode')
const lightModeIcon = document.getElementById('day')
const darkModeIcon = document.getElementById('night')
const body = document.getElementById('page')

let darkMode = false

modeSwitch.addEventListener('click', ()=>{

    darkMode =!darkMode
    changeMode()
})

const changeMode = ()=>{
    if (darkMode) {
        lightModeIcon.classList.add('hide')
        darkModeIcon.classList.remove('hide')
        console.log("Dark Mode")
        body.classList.add('darkMode')
    }
    else{
        darkModeIcon.classList.add('hide')
        lightModeIcon.classList.remove('hide')
        console.log("Light Mode")
        body.classList.remove('darkMode')
    }
}

// hem menu setup
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.nav-overlay');
const nav = document.getElementById('nav')

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.add('active');
    if (hamMenu.classList.contains('active')) {
        nav.classList.add('nav-open')
    }
})

offScreenMenu.addEventListener('click',()=>{
    nav.classList.remove('nav-open')
    hamMenu.classList.remove('active');
})

// overlay close button
const closeBtn = document. getElementById("closeMenu")

closeBtn.addEventListener('click',()=>{
    nav.classList.remove('nav-open')
    hamMenu.classList.remove('active');
})
