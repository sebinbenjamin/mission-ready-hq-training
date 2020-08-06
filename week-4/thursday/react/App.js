import React from "react";
import "./App.css";

function getFullName() {
  return "This function handles two events. So either you click on the blue box or you moved your mouse over the yellow box";
}

const App = function () {
  return (
    <div className="MainDiv">
      <MainComp />
    </div>
  );
};

function showTheNameFn() {
  alert(getFullName());
}

const MainComp = function () {
  const div1Style = {
    border: "5px solid blue",
  };
  const div2Style = {
    marginTop: "10px",
    border: "5px solid yellow",
  };
  return (
    <div>
      <div style={div1Style} onClick={showTheNameFn}>
        <h1>Click in this div (blue box)</h1>
      </div>
      <div style={div2Style} onMouseOver={showTheNameFn}>
        <h1>Move the mouse over the div (yellow box)</h1>
      </div>
    </div>
  );
};

export default App;
