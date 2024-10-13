import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heding1" }, "Hello From Heading 1"),
    React.createElement("h1", { id: "heding2" }, "Hello From Heading 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
