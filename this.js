var container = document.getElementById('container');
function Counter(el) {
    var _this_1 = this;
    this.count = 0;
    el.innerHTML = this.count;
    var _this = this;
    el.addEventListener('click', function () {
        _this_1.count += 1;
        el.innerHTML = _this_1.count;
    });
}
;
new Counter(container);
