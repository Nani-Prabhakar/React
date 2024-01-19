// const heading=React.createElement("h1",{
//     id:"vurke",abc:"emledhu"
// },"namaste all");
const nested=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"am an h1 tag"),React.createElement("h2",{},"am an h2 tag")]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"am an h1 tag"),React.createElement("h2",{},"am an h2 tag")])
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(nested);