import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            myBool: { type: Boolean },
            myArray: { type: Array },
            anotherArray: { type: Array }
        };
    }

    constructor() {
        super();

        this.message = 'Component my-element';
        this.myBool = true;
        this.myArray = ['Soy', 'un', 'array', 'de', 'prueba'];
        this.anotherArray = ['Soy', 'otro', 'array', 'de', 'prueba'];
    }

    render() {
        return html`
        <p>${this.message}</p>
        <ul>${this.anotherArray.map(item =>
            html`<li>${item}</li>`)}</ul>
            
            ${this.myBool ?
            html`<p>Renderizado de HTML si myBool es true</p>` :
        html`<p>Renderizado de otro HTML si myBool es false</p>`
        }
        
        <button @click=${this.clickHandler}>Click</button>
        `;
    }

    clickHandler(e) {
        this.myBool = !this.myBool;
        this.anotherArray.pop();
    }
}

//Componente my-element Soy otro array de prueba Renderizado de HTML is myBool es true.

customElements.define('array-render', MyElement);