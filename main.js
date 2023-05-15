const btn = document.querySelector('.box-btn')
const container = document.querySelectorAll('.container')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const value = document.querySelector('.box-value').value
    if (!value) {
        alert('Введите количество')
    } else if (!parseInt(value)) {
        alert('Введите число')
    }
    else {
        container[0].classList.add('up')
        start(parseInt(value))
    }
})

function start(amount) {
    if (amount < 50 || amount > 1500) {
        amount = 200
    }
    const board = document.querySelector('.board')
    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', () => {
            setColor(square)
        })
        square.addEventListener('mouseleave', () => {
            removeColor(square)
        })
        board.append(square)
    }

}

function setColor(element) {
    const color  = getRadomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #111'
}

function getRadomColor() {
    const colors = ['red', 'blue', 'green', 'violet',
        '#494930', '#948204', '#d9f922', '#f9a3a3']
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}