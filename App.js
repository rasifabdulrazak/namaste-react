import React from "react";
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h1", { id: "head" }, "Namster React");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(heading1); // object

// Nested elemnst structure
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child",key:0 }, [
    React.createElement("h1", {key:1}, "Paremnt child"),
    React.createElement("h1", {key:2}, "Paremnt child2")
  ])
);

root1.render(parent);
