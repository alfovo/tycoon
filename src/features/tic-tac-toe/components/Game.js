import React from "react";
import ReactDOM from "react-dom";
import "./game.css";
import { calculateLocation, calculateWinner } from "./utils.js";
import Board from "./Board";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          location: {},
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    // slice is more performant than spread in chrome?!
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const location = calculateLocation(i);

    this.setState({
      squares: squares,
      history: history.concat([{ squares, location }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  // should rerender when this happens
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  getStatus(winner) {
    if (this.state.stepNumber >= 9 && !winner) {
      return "No winner :(";
    }
    return winner
      ? "Winner: " + winner
      : "Next player: " + (this.state.xIsNext ? "X" : "O");
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move} in row ${step.location.row}, column ${step.location.column}`
        : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {move === this.state.stepNumber ? (
              <div style={{ fontWeight: "bold" }}>{desc}</div>
            ) : (
              <div>{desc}</div>
            )}
          </button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{this.getStatus(winner)}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
