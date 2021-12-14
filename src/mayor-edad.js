import { LitElement, html, css } from "lit-element";

class MyElement extends LitElement {
    static get properties() {
        return {
            age: { type: Number },
            name: { type: String }
        };
    }
    render() {
        return html`
        <p>${this.name} es ${ ! (this.age >= 18) ? 'mayor de edad' : 'menor de edad'}</p>
        `;
    }
}

window.customElements.define('mayor-edad', MyElement);