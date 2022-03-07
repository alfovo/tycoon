import React from "react";
import "./game.css";
import { calculateLocation, calculateWinner } from "../utils.js";
import Board from "./Board";
import Container from "@mui/material/Container";

// accepts history, stepNumber and jumpTo
function Moves(props) {
  return props.history.map((step, historyIndex) => {
    const desc = historyIndex
      ? `Go to move #${historyIndex} in row ${step.location.row}, column ${step.location.column}`
      : "Go to game start";
    return (
      <li key={historyIndex}>
        <button onClick={() => props.jumpTo(historyIndex)}>
          {historyIndex === props.stepNumber ? (
            <div style={{ fontWeight: "bold" }}>{desc}</div>
          ) : (
            <div>{desc}</div>
          )}
        </button>
      </li>
    );
  });
}

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
  jumpTo(historyIndex) {
    this.setState((state) => ({
      stepNumber: historyIndex,
      xIsNext: historyIndex % 2 === 0,
      history: state.history.slice(0, historyIndex + 1),
    }));
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

    return (
      <Container sx={{ paddingTop: "20px" }}>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{this.getStatus(winner)}</div>
            <ol>
              <Moves
                history={history}
                stepNumber={this.state.stepNumber}
                jumpTo={(i) => this.jumpTo(i)}
              />
            </ol>
          </div>
        </div>
      </Container>
    );
  }
}
