// ! DO NOT ADD ANY NEW VARIABLE
// ! YOU CAN ADD FUNCTIONS IF YOU NEED TO
// ! EDIT ALL TODOs AND INTEGRATE FUNCTIONALITIES

const X = "X";
const O = "O";
const N = 5;
const WINNER_O = "OW",
  WINNER_X = "XW",
  TIE = "XO";
const getInitialBoard = () =>
  Array(N)
    .fill("")
    .map((v) => [...Array(N).fill("")]);

const initialTurn = X;

const blocks = Array.from(document.getElementsByClassName("block"));
const turnDisplay = document.getElementById("turn");
const winnerDisplay = document.getElementById("winner");

let board = getInitialBoard();
let turn = initialTurn;

const canFillBlock = (row, col) => {
  // todo: return a boolean if the (row, col) is free to fill.
  if (board[row][col] == "") return true;
  return false;
};

const fillBlock = (block, row, col) => {
  // todo: fill block (DOM).
  block.innerHTML = turn;
  // todo: fill board.
  board[row][col] = turn;
  // hint: fill with which turn?
};

const toggleTurn = () => {
  // todo: change turn.
  if (turn == X) {
    turn = O;
    turnDisplay.innerHTML = O;
  } else {
    turn = X;
    turnDisplay.innerHTML = X;
  }
  // todo: change turnDisplay.
};

const announceResult = (type) => {
  switch (type) {
    case WINNER_X:
      // todo: set result message (DOM)
      winnerDisplay.innerHTML = 'Player "X" won the game!';
      winnerDisplay.style.visibility = "visible";
      break;
    case WINNER_O:
      // todo: set result message (DOM)
      winnerDisplay.innerHTML = 'Player "O" won the game!';
      winnerDisplay.style.visibility = "visible";
      break;
    case TIE:
      // todo: set result message (DOM)
      winnerDisplay.innerHTML = "It's a Tie!";
      winnerDisplay.style.visibility = "visible";
      break;
  }
  // todo: show the winner.
  // hint: check of winnerDisplay.
};

const isTied = () => {
  const n_playedRounds = board.flat().filter((element) => element != "").length;

  // todo: calculate number of played rounds by board.
  if (n_playedRounds === N * N) return true;
  return false;
};

const getWinner = () => {
  // todo: check if we have a winner.
  // todo: find the winner.
  // todo: return an object with ("hasWinner":boolean) and ("winner": X | O | null) keys.
  // sample output
  // -> return {
  //     hasWinner: false,
  //     winner: X,
  //   };

  return checkAll();
};

function check(a, b, c, d) {
  console.log(a, b, c, d);
  if (a == b && b == c && c == d) {
    if (a == X) {
      return {
        hasWinner: true,
        winner: X,
      };
    }
    if (a == O) {
      return {
        hasWinner: true,
        winner: O,
      };
    }
  }
  return {
    hasWinner: false,
    winner: null,
  };
}

//کد کثیف صرفا به جهت رعایت محدودیت مساله در عدم تعریف مغیر جدید نوشته شده است
//که حتی از دستور فور هم استفاده نشود
function checkAll() {
  //بررسی برنده به صورت افقی
  if (check(board[0][0], board[0][1], board[0][2], board[0][3]).hasWinner) {
    return check(board[0][0], board[0][1], board[0][2], board[0][3]);
  }
  if (check(board[0][1], board[0][2], board[0][3], board[0][4]).hasWinner) {
    return check(board[0][1], board[0][2], board[0][3], board[0][4]);
  }
  if (check(board[1][0], board[1][1], board[1][2], board[1][3]).hasWinner) {
    return check(board[1][0], board[1][1], board[1][2], board[1][3]);
  }
  if (check(board[1][1], board[1][2], board[1][3], board[1][4]).hasWinner) {
    return check(board[1][1], board[1][2], board[1][3], board[1][4]);
  }
  if (check(board[2][0], board[2][1], board[2][2], board[2][3]).hasWinner) {
    return check(board[2][0], board[2][1], board[2][2], board[2][3]);
  }
  if (check(board[2][1], board[2][2], board[2][3], board[2][4]).hasWinner) {
    return check(board[2][1], board[2][2], board[2][3], board[2][4]);
  }
  if (check(board[3][0], board[3][1], board[3][2], board[3][3]).hasWinner) {
    return check(board[3][0], board[3][1], board[3][2], board[3][3]);
  }
  if (check(board[3][1], board[3][2], board[3][3], board[3][4]).hasWinner) {
    return check(board[3][1], board[3][2], board[3][3], board[3][4]);
  }
  if (check(board[4][0], board[4][1], board[4][2], board[4][3]).hasWinner) {
    return check(board[4][0], board[4][1], board[4][2], board[4][3]);
  }
  if (check(board[4][1], board[4][2], board[4][3], board[4][4]).hasWinner) {
    return check(board[4][1], board[4][2], board[4][3], board[4][4]);
  }

  //بررسی برنده به صورت عمودی
  if (check(board[0][0], board[1][0], board[2][0], board[3][0]).hasWinner) {
    return check(board[0][0], board[1][0], board[2][0], board[3][0]);
  }
  if (check(board[1][0], board[2][0], board[3][0], board[4][0]).hasWinner) {
    return check(board[1][0], board[2][0], board[3][0], board[4][0]);
  }
  if (check(board[0][1], board[1][1], board[2][1], board[3][1]).hasWinner) {
    return check(board[0][1], board[1][1], board[2][1], board[3][1]);
  }
  if (check(board[1][1], board[2][1], board[3][1], board[4][1]).hasWinner) {
    return check(board[1][1], board[2][1], board[3][1], board[4][1]);
  }
  if (check(board[0][2], board[1][2], board[2][2], board[3][2]).hasWinner) {
    return check(board[0][2], board[1][2], board[2][2], board[3][2]);
  }
  if (check(board[1][2], board[2][2], board[3][2], board[4][2]).hasWinner) {
    return check(board[1][2], board[2][2], board[3][2], board[4][2]);
  }
  if (check(board[0][3], board[1][3], board[2][3], board[3][3]).hasWinner) {
    return check(board[0][3], board[1][3], board[2][3], board[3][3]);
  }
  if (check(board[1][3], board[2][3], board[3][3], board[4][3]).hasWinner) {
    return check(board[1][3], board[2][3], board[3][3], board[4][3]);
  }
  if (check(board[0][4], board[1][4], board[2][4], board[3][4]).hasWinner) {
    return check(board[0][4], board[1][4], board[2][4], board[3][4]);
  }
  if (check(board[1][4], board[2][4], board[3][4], board[4][4]).hasWinner) {
    return check(board[1][4], board[2][4], board[3][4], board[4][4]);
  }

  //بررسی برنده به صورت مورب
  if (check(board[0][0], board[1][1], board[2][2], board[3][3]).hasWinner) {
    return check(board[0][0], board[1][1], board[2][2], board[3][3]);
  }
  if (check(board[1][1], board[2][2], board[3][3], board[4][4]).hasWinner) {
    return check(board[1][1], board[2][2], board[3][3], board[4][4]);
  }
  if (check(board[1][0], board[2][1], board[3][2], board[4][3]).hasWinner) {
    return check(board[1][0], board[2][1], board[3][2], board[4][3]);
  }
  if (check(board[0][1], board[1][2], board[2][3], board[3][4]).hasWinner) {
    return check(board[0][1], board[1][2], board[2][3], board[3][4]);
  }
  if (check(board[3][0], board[2][1], board[1][2], board[0][3]).hasWinner) {
    return check(board[3][0], board[2][1], board[1][2], board[0][3]);
  }
  if (check(board[3][1], board[2][2], board[1][3], board[0][4]).hasWinner) {
    return check(board[3][1], board[2][2], board[1][3], board[0][4]);
  }
  if (check(board[4][0], board[3][1], board[2][2], board[1][3]).hasWinner) {
    return check(board[4][0], board[3][1], board[2][2], board[1][3]);
  }
  if (check(board[4][1], board[3][2], board[2][3], board[1][4]).hasWinner) {
    return check(board[4][1], board[3][2], board[2][3], board[1][4]);
  }

  return {
    hasWinner: false,
    winner: null,
  };
}

const handleBlockClick = (block, row, col) => {
  if (canFillBlock(row, col)) {
    fillBlock(block, row, col);
    const { hasWinner, winner } = getWinner();
    console.log(getWinner());
    if (hasWinner) {
      announceResult(winner === X ? WINNER_X : WINNER_O);
      setTimeout(resetBoard, 2000);
      return;
    }
    if (isTied()) {
      announceResult(TIE);
      setTimeout(resetBoard, 2000);
      return;
    }
    toggleTurn();
  }
};

const resetBoard = () => {
  board = getInitialBoard();
  turn = initialTurn;
  // todo: reset blocks (DOM)
  blocks.map((b) => (b.innerHTML = ""));

  // todo: reset turnDisplay (DOM)
  turnDisplay.innerHTML = turn;

  // todo: reset winnerDisplay (DOM)
  winnerDisplay.style.visibility = "hidden";
};

// DO NOT DELETE THIS CODE BLOCK
blocks.forEach((block, index) => {
  // todo: calculate row of block by index
  const row = Math.floor(index / 5);
  // todo: calculate column of block by index
  const col = index % 5;
  block.addEventListener("click", () => handleBlockClick(block, row, col));
});

console.log(isTied());
console.log(board);
