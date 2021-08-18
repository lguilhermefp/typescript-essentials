$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var todo3 = { name: "Pick up drycleaning" };
var container2 = $('#container');
container2.data('todo', todo);
var savedTodo = container2.data('todo');
container2.todo(todo3);
