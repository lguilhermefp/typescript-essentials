interface Todo {
  name: string;
  completed?: boolean;
}

interface jQuery {
  (selector: (string | any)): jQueryElement;
  fn: any;
  version: number;
}

interface jQueryElement {
  data(name: string): any;
  data(name: string, data: any): jQueryElement;
}

interface jQueryElement {
  todo(): Todo;
  todo(todo: Todo): jQueryElement;
}

$.fn.todo = function(todo?: Todo) : Todo {
  if(todo) {
    $(this).data('todo', todo);
  } else {
    return $(this).data('todo');
  }
}

var todo3 : Todo = { name: "Pick up drycleaning" };
var container2 = $('#container');
container2.data('todo', todo);
var savedTodo = container2.data('todo');

container2.todo(todo3);