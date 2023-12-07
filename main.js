const input = document.querySelector('input')
let all = document.querySelectorAll('.all')
let activebtn = document.querySelectorAll('.act')
let completed = document.querySelectorAll('.completed')
const ol = document.querySelector('ol')
const form = document.querySelector('form')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const box = document.querySelector('.box')
let testArr = document.querySelectorAll('.test')
const back = document.querySelector('.back')
const error = document.querySelector('.error')
let left = document.querySelectorAll('.left')
let clear = document.querySelectorAll('.clear')
const bottom = document.querySelector('.bottommm')
const txts = document.querySelector('.txts')
const gender = document.querySelector('.gender')
const alika = document.querySelector('.alika')
let darkmode = false;
let liItem = null;

if(window.screen.width >= 1440){
    back.src = "assets/deskback.png"
}

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
    moon.style.transition = '0.8s'

    sun.style.display = 'block'
    sun.style.transition = '0.8s'

    input.classList.add('boxshdw')
    txts.classList.add('boxshdw')
    bottom.classList.add('boxshdw')
    box.classList.add('boxshdw')
    gender.classList.add('boxshdw')

    darkmode = true;

    input.style.backgroundColor = "#25273D"
    input.style.transition = "0.8s"

    txts.style.backgroundColor = "#25273D"
    txts.style.transition = "0.8s"

    gender.style.backgroundColor = "#25273D"
    gender.style.transition = "0.8s"

    bottom.style.backgroundColor = "#25273D"
    bottom.style.transition = "0.8s"

    box.style.backgroundColor = "#25273D"
    box.style.transition = "0.8s"

    const gela = document.querySelectorAll('.satesto')
    
    gela.forEach(el => {
        el.classList.add('rame')
        el.classList.remove('satesto')
    })


    if(window.screen.width < 1440){
        back.src = "assets/back.jpg"
        back.style.transition = '0.8s'
    }else{
        back.src = "assets/deskback2.jpg"
        back.style.transition = '0.8s'
    }

})

sun.addEventListener('click', () => {

    sun.style.display = 'none'
    sun.style.transition = '0.3s'

    moon.style.display = 'block'
    moon.style.transition = '0.8s'

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
    gender.classList.remove('boxshdw')

    darkmode = false;



    input.style.backgroundColor = "#FFF"
    input.style.transition = '0.8s'

    txts.style.backgroundColor = "#FFF"
    txts.style.transition = '0.8s'

    bottom.style.backgroundColor = "#FFF"
    bottom.style.transition = '0.8s'

    gender.style.backgroundColor = "#FFF"
    gender.style.transition = '0.8s'

    box.style.backgroundColor = "#FFF"
    box.style.transition = '0.8s'
    

    if(window.screen.width < 1440){
        back.src = "assets/back.jpg"
        back.style.transition = '0.8s'
    }else{
        back.src = "assets/deskback.png"
        back.style.transition = '0.8s'
    }

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let res = input.value.trim()
    if(res == ""){
        error.textContent = "Input Can't Be Empty"
    }else if(arr.length >= 6 && window.screen.width < 1440){
        error.textContent = "You Cant Add More Than 6 Todo"
    }else if(arr.length >= 7 && window.screen.width >=1440){
        error.textContent = "You Cant Add More Than 7 Todo"
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
    alika.innerHTML = `${arr.length} Items Left`

    arr.forEach(el => {
        
        liItem = document.createElement('div')

        liItem.style.display = "flex"
        liItem.style.gap = "240px"
        liItem.style.marginBottom = "10px"
        liItem.style.justifyContent = "center"
        liItem.style.alignItems = "center"
        liItem.style.paddingBottom = "16px"

        if(darkmode == true){
            liItem.classList.add('rame')
            liItem.classList.remove('satesto')
        }else{
            liItem.classList.add('satesto')
            liItem.classList.remove('rame')
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
            console.log("cliecked")
            console.log(arr, "arr")
        })

        circleimg.addEventListener('click', () => {
            completedtodos(el.id)
        })

        clear.forEach(clear => {

        clear.addEventListener('click', clearcomp)

        });

        circleimg.src = el.isCompleted ? "assets/comp.svg" : "assets/circle.svg"

        let li = document.createElement('li')
        li.textContent = el.name

        if(darkmode){
            li.style.color = el.isCompleted ? '#4D5067' : '#C8CBE7'
        }else{
            li.style.color = el.isCompleted ? '#D1D2DA' : '#494C6B'
        }

        if(window.screen.width < 1440){
        li.style.fontFamily = 'Josefin Sans'
        li.style.fontSize = '12px'
        li.style.fontWeight = '400'
        li.style.letterSpacing = '-0.167px'
        li.style.width = "180px"
        li.style.listStyleType = "none"
        li.style.marginLeft = "-230px"        
        }else{

        li.style.fontFamily = 'Josefin Sans'
        li.style.fontSize = '18px'
        li.style.fontWeight = '400'
        li.style.letterSpacing = '-0.167px'
        li.style.width = "180px"
        li.style.listStyleType = "none"
        li.style.marginLeft = "-230px"    

        }


        li.style.textDecoration = el.isCompleted ? "line-through" : "none"

        if((darkmode && el.isCompleted) || (!darkmode && el.isCompleted)){
            circleimg.src = "assets/comp.svg"
        }else if(darkmode && !el.isCompleted){
            circleimg.src = "assets/rgoli.svg"
        }else if(!darkmode && !el.isCompleted){
            circleimg.src = "assets/circle.svg"
        }

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
    console.log(arr, "in delet")

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

activebtn.forEach(activebtn => {
    activebtn.addEventListener('click', () => {
        let actarr = arr.filter(el => !el.isCompleted);
        showTodos(actarr);
    });
});

completed.forEach(completed => {
    completed.addEventListener('click', () => {
        let actarr = arr.filter(el => el.isCompleted)

        showTodos(actarr)
    });
});

all.forEach(all => {
    all.addEventListener('click', () => {
        showTodos(arr)
    });
});

function clearcomp(){
    arr = arr.filter(el => !el.isCompleted)

    showTodos(arr)
}