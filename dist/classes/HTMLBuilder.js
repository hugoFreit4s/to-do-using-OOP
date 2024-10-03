export default class HTMLBuilder {
    HTMLElement;
    constructor(HTMLElement) {
        this.HTMLElement = document.createElement(HTMLElement);
    }
    addChildren(...children) {
        children.forEach(element => { this.HTMLElement.appendChild(element); });
        return this;
    }
    addClass(...classname) {
        this.HTMLElement.classList.add(...classname);
        return this;
    }
    addID(idName) {
        this.HTMLElement.id = idName;
        return this;
    }
    addCss(styles) {
        this.HTMLElement.style.cssText = styles;
        return this;
    }
    addText(text) {
        this.HTMLElement.textContent = text;
        return this;
    }
    build() {
        return this.HTMLElement;
    }
}
