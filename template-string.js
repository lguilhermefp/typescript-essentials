var container = document.getElementById('container');
var todo2 = {
    id: 123,
    name: "Pick up drycleaning",
    completed: true,
};
var displayName = "Todo #" + todo2.id;
container.innerHTML = "\n    <i class=\"" + (todo2.completed ? "" : "hidden") + "\" />\n    <div>Hi, " + todo2.id + "!</div>\n";
