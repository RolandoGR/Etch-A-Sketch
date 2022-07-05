const div = document.createElement('div')
const grid = document.querySelector('.grid')

const title = document.querySelector('.title')
/* title.addEventListener('mouseover', () => {
    title.style.background = 'black'
}); 
*/
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

    /* 
    */
    };
    

makeGrid(16)
const hoveredItems = document.querySelectorAll('.hovered')
hoveredItems.forEach( hoveredItem => {
    hoveredItem.addEventListener('mouseover', () => {
        changeBackground(hoveredItem);
    })

});    
