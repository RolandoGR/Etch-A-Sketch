let squareQuant = 16;
const div = document.createElement('div');
const grid = document.querySelector('.grid');
const changeGrid = document.querySelector('.changeGrid')
const resetGrid = document.querySelector('.resetGrid')

const title = document.querySelector('.title')
/* title.addEventListener('mouseover', () => {
    title.style.background = 'black'
}); 
*/

function askSquareQuan() {
    squareQuant = prompt('Introduce the number of squares per line: ')    
    while (squareQuant > 100 || squareQuant < 1) {
        alert('Please type a number between 1 and 100')
        console.log('no pass')
        squareQuant = prompt('Introduce the number of squares per line: ')    
        } 
        console.log('yes pass')
        return squareQuant

} 


function removeGrid(hoveredItems) {
    hoveredItems = document.querySelectorAll('.hovered')
    hoveredItems.forEach(hoveredItem => {
        hoveredItem.remove();
    })
    
}

function changeBackground(div) {
    return div.style.background = 'rgb(2, 29, 36)'

}



function makeGrid (squareQuant) {
    let widthAndHeight = 480/squareQuant
    div.style.width =  `${widthAndHeight}px`
    div.style.height = `${widthAndHeight}px`
    div.classList.add('hovered')
    for (let i = 0; i < (squareQuant**2); ++i) {
        grid.appendChild(div.cloneNode())
    }

    let hoveredItems = document.querySelectorAll('.hovered')
    hoveredItems.forEach( hoveredItem => {
    hoveredItem.addEventListener('mouseover', () => {
        changeBackground(hoveredItem);
    })
    });    
    return hoveredItems
    };
    


makeGrid(16);

changeGrid.addEventListener('click', () =>{
    askSquareQuan(); 
    removeGrid();
    makeGrid(squareQuant);
} )

resetGrid.addEventListener('click', () =>{
    removeGrid();
    makeGrid(16);
} )