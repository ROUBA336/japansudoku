import React from "react";
// Css files
import "./grid.css";

// Components
import Node from "../Node/node";  

const Grid = ({ grid, handleCellClick }) => {
  return (
    <table className="grid">
      <tbody>
        {grid &&
          grid.map((row, rowIndex) => {
            return (
              <tr className="row" key={rowIndex}>
                {row.map((cell, columnIndex) => {
                  return (
                    <Node
                      key={rowIndex + "-" + columnIndex}
                      cell={cell}
                      handleClickCallback={handleCellClick}
                    />
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Grid;
