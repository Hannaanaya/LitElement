import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
    static get properties() {
        return {
            counter: {
                type: Number
            }
        };
    }

    constructor() {
        super();
        this.counter = 4;
    }

    handleClick(e) {
        this.counter *= 2;
        console.log("Counter ", this.counter);
    }

    render() {
        return html`<button 
        @click=${this.handleClick}>Modificar contador</button>`;
    }
}

customElements.define('three-clicks', MyElement);