const parent = React.createElement(
    "div",{id: "parent" },
    React.createElement( 
        "div",
        { id:"child" },
[React.createElement("h1",{},"I am nested react query"),React.createElement("h2",{},"I am nested react query 2")]
)
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);