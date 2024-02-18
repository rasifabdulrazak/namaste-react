const heading = React.createElement("h1", { id: "head" }, "Namster React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(heading); // object

// Nested elemnst structure
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {key:1}, "Paremnt child"),
    React.createElement("h1", {key:2}, "Paremnt child2")
  ])
);

root.render(parent);
