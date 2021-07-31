var changeBackpack = function (change) {
    var main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(change);
};
var backpack = {
    name: "backpack 3",
    volume: 30,
    color: "blue",
    pocket: 10,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
        changeBackpack("Lid status changed");
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
        changeBackpack("Strap lengths changed");
    },
};
