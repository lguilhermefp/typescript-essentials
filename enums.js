var todo4 = {
    name: 'pick up drycleaning',
    state: 1
};
var todoState;
(function (todoState) {
    todoState[todoState["new"] = 1] = "new";
    todoState[todoState["active"] = 2] = "active";
    todoState[todoState["complete"] = 3] = "complete";
    todoState[todoState["deleted"] = 4] = "deleted";
})(todoState || (todoState = {}));
