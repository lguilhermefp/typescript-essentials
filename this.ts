var container = document.getElementById('container');

function Counter(el) {
    this.count = 0;
    el.innerHTML = this.count;
    let _this = this;

    el. addEventListener('click', () => {
            this.count += 1;
            el.innerHTML = this.count;
        }
    );
};

new Counter(container);
