const grid = document.querySelector('.grid');

function createGrid(dimension) {
    for (let i = 0; i < dimension; i++)
        for (let j = 0; j < dimension; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.cssText = `border: 1px solid rgba(0, 0, 0, .025);
                                        background-color: white;
                                        opacity: 1;
                                        height: ${Math.floor(540 / dimension)}px;
                                        width: ${Math.floor(540 / dimension)}px;
                                        box-sizing: border-box`;
            grid.appendChild(gridSquare);

            if (i == 0 && j == 0) {
                gridSquare.style.borderTopLeftRadius = '10px';
            } else if (i == 0 && j == dimension-1) {
                gridSquare.style.borderTopRightRadius = '10px'
            } else if (i == dimension-1 && j == 0) {
                gridSquare.style.borderBottomLeftRadius = '10px'
            } else if (i == dimension-1 && j == dimension-1) {
                gridSquare.style.borderBottomRightRadius = '10px'
            }
    }
}

createGrid(16);

function darken(ele) {
    ele.style.opacity -= 0.1;
}

const gridSquares = document.querySelectorAll('.grid-square')
gridSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        darken(square);
    });
});