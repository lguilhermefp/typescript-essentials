interface jQuery {
  (selector: string): HTMLElement;
  version: number;
}

var $ = <jQuery>function(selector) {
  //DOM element
}

$.version = 1.12;

var element = $('#container')
