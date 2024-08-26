import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "heading" }, "Namster React");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
const jsheading = <h1 id="heading">Hello</h1>;
// root.render(heading);
console.log(heading1); // object
console.log(jsheading);

const Title = () => {
  return <h1>Title</h1>;
};

const rupee = 100

const HeadingComponent = () => (
  <>
  {Title()}
  <Title></Title>
    <Title />
    {Date.now()}
    <h1>Hello form conpkent</h1>
  </>
);

// Nested elemnst structure
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child", key: 0 }, [
    React.createElement("h1", { key: 1 }, "Paremnt child"),
    React.createElement("h1", { key: 2 }, "Paremnt child2"),
  ])
);

root1.render(<HeadingComponent />);
