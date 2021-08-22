interface Todo4 {
  name: string;
  state: TodoState;
}

enum TodoState {
  new = 1,
  active,
  complete,
  deleted
}

var todo4: Todo4 = {
  name: 'pick up drycleaning',
  state: TodoState.new,
}

function delete2(todo: Todo) {
  if(todo4.state != TodoState.complete)
    throw 'incomplete can\'t be deleted';
}
