import Square from "./Square";
import React from "react";

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i.toString()}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderBoardRow(index) {
    const columns = [];
    let squareIndex = index;
    for (let i = 0; i < 3; i++) {
      columns.push(this.renderSquare(squareIndex));
      squareIndex++;
    }
    return (
      <div key={index} className="board-row">
        {columns}
      </div>
    );
  }

  render() {
    const rows = [];
    let squareIndex = 0;
    for (let i = 0; i < 3; i++) {
      rows.push(this.renderBoardRow(squareIndex));
      squareIndex = squareIndex + 3;
    }
    return <div>{rows}</div>;
  }
}
