const grid = document.querySelector('.grid');

function createGrid(dimension) {
    grid.innerHTML = '';
    for (let i = 0; i < dimension; i++)
        for (let j = 0; j < dimension; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.cssText = `border: 1px solid rgba(0, 0, 0, .025);
                                        background-color: white;
                                        opacity: 1;
                                        height: ${540 / dimension}px;
                                        width: ${540 / dimension}px;
                                        box-sizing: border-box`;
            grid.appendChild(gridSquare);
    }

    attachEventListeners();
}

function darken(ele) {
    ele.style.opacity -= 0.1;
}

function attachEventListeners() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            darken(square);
        });
    });
}

function resetGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
        square.style.opacity = '1';
    });
}

const resetButton = document.querySelector('.reset-grid');
resetButton.addEventListener('click', () => {
    resetGrid();
});

const cycle = [16, 32, 64, 100, 1, 2, 4, 8];
let clickIndex = 0;
const changeButton = document.querySelector('.change-grid');
changeButton.addEventListener('click', () => {
    clickIndex = (clickIndex + 1) % cycle.length;
    createGrid(cycle[clickIndex]);
});

createGrid(16);