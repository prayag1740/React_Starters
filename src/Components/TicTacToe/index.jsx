import React, { useEffect, useState } from 'react'
import "./styles.css"

function TicTacToe() {

  const [grid, setGrid ] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [XTurn, setXTurn ] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [winner, setWinner] = useState(false);

  const setGridPosition = (positionx, positiony) => {
    const copiedGrid = structuredClone(grid)
    XTurn === true ? (copiedGrid[positionx][positiony] = 'X') : (copiedGrid[positionx][positiony] = 'O')
    setGrid(copiedGrid);
  }

  const checkForWinner = () => {
    const wining_pos = [ [[0,0], [0,1], [0,2]], 
    [[1,0], [1,1], [1,2]], 
    [[2,0], [2,1], [2,2]], 
    [[0,0], [1,0], [2,0]], 
    [[0,1], [1,1], [2,1]], 
    [[0,2], [1,2], [2,2]], 
    [[0,0], [1,1], [2,2]], 
    [[0,2], [1,1], [2,0]]]

    let iswinner = false ;

    for (let i=0; i < wining_pos.length; i++){
      let cur_check = wining_pos[i];
      let [x1, y1] = cur_check[0]
      let [x2, y2] = cur_check[1]
      let [x3, y3] = cur_check[2]
      
      if (grid[x1][y1] !== "" && grid[x1][y1] === grid[x2][y2] && grid[x1][y1] === grid[x3][y3]) {
        iswinner = true ;
        break ;
      }
    }
    
    if (iswinner == true) {
      setWinner(true);
    }

    if (iswinner === false) {
      setXTurn(!XTurn);
      setMoveCount(moveCount+1);
    }
    
  }

  useEffect(() => {
    checkForWinner();
  }, [grid])

  const renderGameText = () => {
    if (winner) {
      const winnerPosition = XTurn === true ? 'X' : 'O' ;
      return `Winner of the game is ${winnerPosition} . Please reset to start again` ;
    }
    if (moveCount === 10) {
      return 'Game Tie : Please reset to start again' ;
    }

    return `Next Player Turn : ${XTurn ? 'X' : 'O'}` ;
  }

  const resetGame = () => {
    setGrid([['', '', ''], ['', '', ''], ['', '', '']]);
    setXTurn(false);
    setMoveCount(0);
    setWinner(false);
  }

  return (
    <div className='tcc-container'>
      <div className='tcc-main'>
          <div className='tcc-row'>
            <div className='tcc-sec' onClick={() => setGridPosition(0,0)}>{grid[0][0]}</div>
            <div className='tcc-sec' onClick={() => setGridPosition(0,1)}>{grid[0][1]}</div>
            <div className='tcc-sec' onClick={() => setGridPosition(0,2)}>{grid[0][2]}</div>
          </div>

          <div className='tcc-row'>
          <div className='tcc-sec' onClick={() => setGridPosition(1,0)}>{grid[1][0]}</div>
          <div className='tcc-sec' onClick={() => setGridPosition(1,1)}>{grid[1][1]}</div>
          <div className='tcc-sec' onClick={() => setGridPosition(1,2)}>{grid[1][2]}</div>
          </div>
          
          <div className='tcc-row'>
          <div className='tcc-sec' onClick={() => setGridPosition(2,0)}>{grid[2][0]}</div>
          <div className='tcc-sec' onClick={() => setGridPosition(2,1)}>{grid[2][1]}</div>
          <div className='tcc-sec' onClick={() => setGridPosition(2,2)}>{grid[2][2]}</div>
          </div>
      </div>
      <div className='game-text'>{renderGameText()}</div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  )
}

export default TicTacToe