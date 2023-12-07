const input = document.querySelector('input')
const all = document.querySelector('.all')
const activebtn = document.querySelector('.act')
const completed = document.querySelector('.completed')
const ol = document.querySelector('ol')
const form = document.querySelector('form')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const box = document.querySelector('.box')
let testArr = document.querySelectorAll('.test')
const back = document.querySelector('.back')
const error = document.querySelector('.error')
const left = document.querySelector('.left')
const clear = document.querySelector('.clear')
const bottom = document.querySelector('.bottommm')
const txts = document.querySelector('.txts')
let darkmode = false;

let liItem = null;

testArr[0].classList.add('active')
testArr.forEach(el => {
    el.addEventListener('click', () => {
        testArr.forEach(el => {
            el.classList.remove('active')
        });
        el.classList.add('active')
    })
})

let arr = []

let id = 1;


moon.addEventListener('click', () => {

    document.body.classList.add('dark')

    moon.style.display = 'none'

    sun.style.display = 'block'

    input.classList.add('boxshdw')
    txts.classList.add('boxshdw')
    bottom.classList.add('boxshdw')
    box.classList.add('boxshdw')

    darkmode = true;

    console.log(darkmode)

    input.style.backgroundColor = "#25273D"

    txts.style.backgroundColor = "#25273D"

    bottom.style.backgroundColor = "#25273D"

    box.style.backgroundColor = "#25273D"

    const gela = document.querySelectorAll('.satesto')
    
    gela.forEach(el => {
        el.classList.add('rame')
        el.classList.remove('satesto')
    })

    back.src = "assets/back.jpg"

})

sun.addEventListener('click', () => {
    sun.style.display = 'none'

    moon.style.display = 'block'

    const nika = document.querySelectorAll('.rame')

    nika.forEach(el => {
        el.classList.remove('rame')
        el.classList.add('satesto')
    })

    document.body.classList.remove('dark')

    input.classList.remove('boxshdw')
    txts.classList.remove('boxshdw')
    bottom.classList.remove('boxshdw')
    box.classList.remove('boxshdw')

    darkmode = false;



    input.style.backgroundColor = "#FFF"

    txts.style.backgroundColor = "#FFF"

    bottom.style.backgroundColor = "#FFF"

    box.style.backgroundColor = "#FFF"
    
    back.src = "assets/Bitmap.jpg"

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let res = input.value.trim()
    if(res == ""){
        error.textContent = "Input Can't Be Empty"
    }else if(arr.length >= 6){
        error.textContent = "You Cant Add More Than 6 Todo"
    }
    else{
        pushtxt()
    }
})


function pushtxt(){
    arr.push({
        id: id,
        name: input.value,
        isCompleted: false
    })
    id++
    showTodos(arr) 
}

function showTodos(arr){
    ol.innerHTML = ''
    arr.forEach(el => {
        
        left.innerHTML = `${arr.length} items left`
        


        liItem = document.createElement('div')

        liItem.style.display = "flex"
        liItem.style.gap = "20px"
        liItem.style.marginBottom = "10px"
        liItem.style.justifyContent = "center"
        liItem.style.alignItems = "center"
        liItem.style.paddingBottom = "16px"

        if(darkmode == true){
            liItem.classList.add('rame')
            liItem.classList.remove('satesto')

            console.log('first')
        }else{
            liItem.classList.add('satesto')
            liItem.classList.remove('rame')

            console.log("gg")
        }

        let ximg = document.createElement('img')
        ximg.src = "assets/x.svg"
        ximg.style.width = '12px'
        ximg.style.height = '12px'

        let circleimg = document.createElement('img')
        circleimg.src = "assets/circle.svg"
        circleimg.style.width = '20px'
        circleimg.style.height = '20px'

        ximg.addEventListener('click', () => {
            deletetodos(el.id)
        })

        circleimg.addEventListener('click', () => {
            completedtodos(el.id)
        })

        clear.addEventListener('click', clearcomp)

        circleimg.src = el.isCompleted ? "assets/comp.svg" : "assets/circle.svg"



        let li = document.createElement('li')
        li.textContent = el.name
        li.style.color = el.isCompleted ? '#D1D2DA' : '#494C6B'
        li.style.fontFamily = 'Josefin Sans'
        li.style.fontSize = '12px'
        li.style.fontWeight = '400'
        li.style.letterSpacing = '-0.167px'
        li.style.width = "180px"
        li.style.listStyleType = "none"

        li.style.textDecoration = el.isCompleted ? "line-through" : "none"



        liItem.appendChild(circleimg)
        liItem.appendChild(li)
        liItem.appendChild(ximg)

        ol.appendChild(liItem)
        input.value = ""
        error.textContent = ""
        
    });
}

function deletetodos(id){
    arr = arr.filter(el => el.id !== id)

    showTodos(arr)
}

function completedtodos(id){
    arr = arr.map(el => {
        if(el.id === id){
            el.isCompleted = !el.isCompleted
        }
        return el
    })
    showTodos(arr)
}

activebtn.addEventListener('click', () => {
    let actarr = arr.filter(el => !el.isCompleted)

    showTodos(actarr)
})

completed.addEventListener('click', () => {
    let actarr = arr.filter(el => el.isCompleted)

    showTodos(actarr)
})

all.addEventListener('click', () => {
    showTodos(arr)
})

function clearcomp(){
    arr = arr.filter(el => !el.isCompleted)

    showTodos(arr)
}