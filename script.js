const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.cssText = `border: 1px solid rgba(0, 0, 0, .025);
                                    background-color: white;
                                    height: 33px;
                                    width: 33px;
                                    box-sizing: border-box`
        grid.appendChild(gridSquare);
    }
}
