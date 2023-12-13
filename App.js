const heading = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"chield"},
[
    React.createElement("h1",{},"this is h1 tag"),
    React.createElement("h1",{},"this is h2 tag")
]
),
React.createElement("div",{id:"chield2"},
[
    React.createElement("h1",{},"this is h1 tag"),
    React.createElement("h1",{},"this is h2 tag")
]
)
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    heading
)