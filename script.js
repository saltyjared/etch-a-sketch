const grid = document.querySelector('.grid');

function createGrid(dimension) {
    for (let i = 0; i < dimension; i++)
        for (let j = 0; j < dimension; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.cssText = `border: 1px solid rgba(0, 0, 0, .025);
                                        background-color: white;
                                        opacity: 1;
                                        height: calc(540px // dimension);
                                        width: calc(540px // dimension);
                                        box-sizing: border-box`
            grid.appendChild(gridSquare);
    }
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.cssText = `border: 1px solid rgba(0, 0, 0, .025);
                                    background-color: white;
                                    opacity: 1;
                                    height: 33px;
                                    width: 33px;
                                    box-sizing: border-box`
        grid.appendChild(gridSquare);
    }
}

function darken(ele) {
    ele.style['opacity'] -= 0.1;
}

const gridSquares = document.querySelectorAll('.grid-square')
gridSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        darken(square);
    })
})