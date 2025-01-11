document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('chessboard');
    let selectedCell = null;

    board.addEventListener('click', (e) => {
        if (e.target.classList.contains('cell')) {
            if (selectedCell) {
                movePiece(selectedCell, e.target);
                selectedCell.classList.remove('selected');
                selectedCell = null;
            } else {
                selectedCell = e.target;
                selectedCell.classList.add('selected');
            }
        }
    });

    function movePiece(fromCell, toCell) {
        // Aquí puedes añadir la lógica para mover las piezas
        const piece = fromCell.textContent;
        fromCell.textContent = '';
        toCell.textContent = piece;
    }

    // Inicializar las piezas (simplificado)
    const initialSetup = [
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            cell.textContent = initialSetup[i][j];
        }
    }
});
        targetSquare.textContent = selectedPiece.textContent;
        selectedPiece.dataset.piece = '';
        selectedPiece.textContent = '';
    }
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
}

createBoard();