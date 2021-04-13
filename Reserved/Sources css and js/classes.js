class Div {
    constructor(styles, object) {
        this.object = object;
        this.styles = styles;
    }
    getDiv() {
        return `<div class=${this.styles}>${this.object}</div>`;
    }
}

export class Menu extends Div{
    constructor(styles, object) {
        super (styles);
        this.object = object.map(item => `
        <a class='MenuRef' href='$'>${item}</a>`).join('');

    }
    getDiv() {
        return super.getDiv();
    }
}

export class Footer extends Div {
    constructor(styles, object){
        super (styles);
        this.object = object.map(item => item.value);
    }
    getDiv () {
        return super.getDiv();
    }
}