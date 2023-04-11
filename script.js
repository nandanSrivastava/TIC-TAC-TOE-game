let squares = document.querySelectorAll('.square');
let winnerMessage = document.getElementById('winner-message');
let currentPlayer = 'X';
let gameEnded = false;
let board = ['', '', '', '', '', '', '', '', ''];

// Function to check for winner
function checkWinner() 
{
	if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) 
	{
		return true;
	} 
	else if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) 
	{
		return true;
	} 
	else if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) 
	{
		return true;
	} 
	else if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) 
	{
		return true;
	}
	 else if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) 
	{
		return true;
	} 
	else if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) 
	{
		return true;
	} 
	else if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) 
	{
		return true;
	} 
	else if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) 
	{
		return true;
	} 
	else 
	{
		return false;
	}
}

// Function to switch player turn
function switchPlayer() 
{
	if (currentPlayer === 'X') 
	{
		currentPlayer = 'O';
	} else 
	{
		currentPlayer = 'X';
	}
}

// Function to handle square click
function handleSquareClick(event) 
{
	let square = event.target;
	let squareIndex = Array.prototype.indexOf.call(squares, square);

	if (board[squareIndex] === '' && !gameEnded) 
	{
		board[squareIndex] = currentPlayer;
		square.innerHTML = currentPlayer;
	}

		if (checkWinner()) 
		{
			winnerMessage.innerHTML = `Player ${currentPlayer} wins!`;
			gameEnded = true;
		}
}