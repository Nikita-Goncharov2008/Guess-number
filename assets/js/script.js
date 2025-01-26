let buttonsBlock = document.querySelector('.buttonsBlock')

let secretNumber = Math.floor(Math.random() * (10 - 1 )) + 1

console.log(secretNumber)

let span = document.querySelector('span')

let coment = document.querySelector('.coment')

let newGame = document.querySelector('.newGame')

let tries = 3 

span.innerHTML = tries

buttonsBlock.onclick = () => {
    if (event.target.classList.contains('number')) {
        let number = event.target.innerHTML
        if (tries > 0) {
            if (number > secretNumber) {
                coment.innerHTML = 'Мимо! Попробуй поменьше'
            } else if (number < secretNumber) {
                coment.innerHTML = 'Маловато будет...'
            } else {
                coment.innerHTML = 'О! Угадал! ещё?'
                for(let i = 0; i<buttonsBlock.children.length; i++){
                    buttonsBlock.children[i].disabled = true
                    console.log(buttonsBlock.children[i])
                }
            }
            tries = tries - 1
            span.innerHTML = tries
            if (tries === 0) {
                coment.innerHTML = 'Всё, финиш! Начинай заново'

            }
        } else {
            coment.innerHTML = 'Всё, финиш! Начинай заново'

        }
    }
}

newGame.onclick = ()=>{
    tries = 3 
    span.innerHTML = tries
    coment.innerHTML = 'Чего ждёшь? Ткни кнопку!'
    secretNumber = Math.floor(Math.random() * (10 - 1 )) + 1
    console.log(secretNumber)
}