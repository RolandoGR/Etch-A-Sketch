const div = document.createElement('div')
const grid = document.querySelector('.grid')


function makeGrid (squareQuant) {
    let widthAndHeight = 480/squareQuant
    div.style.width =  `${widthAndHeight}px`
    div.style.height = `${widthAndHeight}px`

    for (let i = 0; i < (squareQuant**2); ++i) {
        grid.appendChild(div.cloneNode())
    }
    


}

makeGrid(16)