// №1

function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number) || [];
}

console.log(extractNumbers("12abc4578m0mn0"))

// №2

function fibonachi (a = 0, b = 1) {
    if (a > 144) return

    console.log(a)

    setTimeout(() => {
        fibonachi (b, a + b)
    }, 1000)
}

fibonachi();

// №3

async function fetchProduct() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')

        if (!response.ok) {
            throw new Error(`ошибка ${response.status}`)
        }

        const data = await response.json()

        data.forEach(product => console.log(product.title))
    } catch (error) {

        console.error('Ошибка запроса', error.message)
    }
}

fetchProduct()

// №4

const buttonColors = document.querySelector('div')

buttonColors.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent
        document.body.style.backgroundColor = color
    }
})

// №5
const square = document.querySelector('#square')
const toggleButton = document.querySelector('#toggleButton')

toggleButton.addEventListener('click', () => {
    if (square.style.display === 'none') {
        square.style.display = 'block'
        toggleButton.textContent = 'Скрыть блок'
    } else {
        square.style.display = 'none'
        toggleButton.textContent = 'Показать блок'
    }
})

// №6

const counterElement = document.querySelector('.counter');
let count = 0;

const interval = setInterval(() => {
    count++
    counterElement.textContent = count
    if (count >= 100) {
        clearInterval(interval)
    }
}, 1)

// №7

async function fetchData() {
    try {
        const response = await fetch('/data.json')

        if (!response.ok) {
            throw new Error(`HTTP ошибка: ${response.status}`)
        }

        const data = await response.json()

        console.log(data)
    } catch (error) {
        console.error('Ошибка', error.message)
    }
}


const fetchButton = document.querySelector('#JsonButton')
fetchButton.addEventListener('click', fetchData)



