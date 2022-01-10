import React from "react";

function Square(props) {
    return (
      <button className='case' id={props.idName} onClick={props.onClick} >
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    play(case_id) {
        var colonne = case_id%7;
        console.log("oke1");
        for(let ligne = 5; ligne >=0; ligne--) {
            console.log(ligne);
            
            if(this.caseVide(ligne*7 +colonne )===true) {
                let indice=ligne*7 +colonne;
                console.log(indice);
                console.log(this.state.xIsNext);
                if(this.state.xIsNext===true) this.changeId1(document.getElementById('square'+indice));
                else if(this.state.xIsNext===false) this.changeId2(document.getElementById('square'+indice));
                console.log("oke2");
                console.log("");
                ligne-=1;
                break;
            }else if(this.caseVide(ligne*7 +colonne )===false){
                console.log("y'a deja un truc la");
                break;
            }
            
        }
    }
    
    caseVide(case_id) {
        console.log(document.getElementById('square'+case_id).id);
        if((document.getElementById('square'+case_id).id!=="player1")&&(document.getElementById('square'+case_id).id!=="player2")) {
            return true;
        }
        return false;
    }


    changeId1(document) {
        document.id="player1";
    }

    changeId2(document) {
        document.id="player2";
    }
    
    handleClick(i) {
        console.log("oke handleclick");
      const squares = this.state.squares.slice();
      //if (calculateWinner(squares) || squares[i]) {
       // return;
      //}
      squares[i] = this.state.xIsNext ;
      this.play(i);

      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          caseOccupe={false}
          idName={'square'+i}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'Rouge' : 'Jaune');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
            </div>
            <div className="board-row">
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
            </div>
            <div className="board-row">
                {this.renderSquare(14)}
                {this.renderSquare(15)}
                {this.renderSquare(16)}
                {this.renderSquare(17)}
                {this.renderSquare(18)}
                {this.renderSquare(19)}
                {this.renderSquare(20)}
            </div>
            <div className="board-row">
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
                {this.renderSquare(25)}
                {this.renderSquare(26)}
                {this.renderSquare(27)}
            </div>
            <div className="board-row">
                {this.renderSquare(28)}
                {this.renderSquare(29)}
                {this.renderSquare(30)}
                {this.renderSquare(31)}
                {this.renderSquare(32)}
                {this.renderSquare(33)}
                {this.renderSquare(34)}
            </div>
            <div className="board-row">
                {this.renderSquare(35)}
                {this.renderSquare(36)}
                {this.renderSquare(37)}
                {this.renderSquare(38)}
                {this.renderSquare(39)}
                {this.renderSquare(40)}
                {this.renderSquare(41)}
            </div> 
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            
          </div>
        </div>
      );
    }
  }

  export default Game;
  
  function calculateWinner(squares) {
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
        return squares[a];
      }
    }
    return null;
  }
  