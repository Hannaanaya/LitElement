import { LitElement, html } from "lit-element";

export class MyElement extends LitElement {
    render() {
        return html`
        <style>
        h2 {
            color: blue
        }
        </style>
        <h2>Ejemplo</h2>
        <p>Soy un elemento</p>
        `; 
    }
}

customElements.define('my-element', MyElement);
