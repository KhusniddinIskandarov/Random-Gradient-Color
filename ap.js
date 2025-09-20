const body = document.querySelector('body')
const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')

const values = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
]

const getGradient = () => {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.trunc(Math.random() * values.length)
        color += values[randomNumber]
    }
    return color
}

const setGrafient = () => {
    const color1 = getGradient()
    const color2 = getGradient()
    const randomDeg = Math.trunc(Math.random() * 360)
    const bgColor = ` linear-gradient(
        ${randomDeg}deg,s
        ${color1},
        ${color2}
    )` 
    body.style.background = bgColor
    colorText.textContent = bgColor
}
setGrafient()
container.addEventListener('click', () => {
    setGrafient()
})