export default class HTMLBuilder {
    private HTMLElement: HTMLElement
    constructor(HTMLElement: keyof HTMLElementTagNameMap) {
        this.HTMLElement = document.createElement(HTMLElement);
    }

    addChildren(...children: HTMLElement[]): HTMLBuilder {
        children.forEach(element => { this.HTMLElement.appendChild(element) })
        return this;
    }

    addClass(...classname: string[]): HTMLBuilder {
        this.HTMLElement.classList.add(...classname);
        return this;
    }

    addID(idName: string): HTMLBuilder {
        this.HTMLElement.id = idName;
        return this;
    }

    addCss(styles: string): HTMLBuilder {
        this.HTMLElement.style.cssText = styles;
        return this;
    }

    addText(text: string): HTMLBuilder {
        this.HTMLElement.textContent = text;
        return this;
    }

    build(): HTMLElement {
        return this.HTMLElement;
    }
}