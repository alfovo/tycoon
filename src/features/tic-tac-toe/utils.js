function getRow(index) {
  if (0 <= index && index <= 2) {
    return 1;
  }
  if (3 <= index && index <= 5) {
    return 2;
  }

  return 3;
}

function getColumn(index) {
  let column = 1;
  let indexAdjusted = index;
  while (column <= 3) {
    if (indexAdjusted === 0 || indexAdjusted % 3 === 0) {
      return column;
    } else {
      column++;
      indexAdjusted--;
    }
  }
}

function isInvalidIndex(index) {
  return index < 0 || index > 9 || typeof index !== "number";
}

export const calculateLocation = (index) => {
  if (isInvalidIndex(index)) {
    throw new Error(
      `Can't have move of index ${index}. Move in 3 x 3 board must have an index between 0 and 8.`
    );
  }
  return { row: getRow(index), column: getColumn(index) };
};

export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { squares: squares[a], winningSquares: lines[i] };
    }
  }
  return null;
};
