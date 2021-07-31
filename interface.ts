declare var markup: any

const changeBackpack = (change) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(change);
};

const backpack : Backpack = {
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

interface Backpack {
    name : string;
    volume : number;
    color : string;
    pocket : number;
    strapLength : {
        left : number,
        right : number,
    };
    lidOpen : boolean;
    toggleLid(lidOpen : boolean) : void;
    newStrapLength(lengthLeft : number, lengthRight : number): void;
}