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
        start(value)
    }
})

function start(amount) {
    console.log('ok')
}