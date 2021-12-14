import { LitElement, html, css } from "lit-element";

class MyElement extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            myArray: { type: Array },
            myBool: { type: Boolean },
            myString: { type: String },
        };
    }
    static get styles() {
        return css`
        p {
            font-family: Roboto;
            font-size: 20px;
            font-weight: 500;
            color: greenYellow;
            background-color: black;
        }
        .fuchsia {
            color: fuchsia;
        }
        .cyan {
            color: cyan;
        }
        .amarillo {
            color: yellow;
        }
      `;
    }

    constructor() {
        super();
        this.myBool = false;
        this.myString = 'amarillo';
    }

    render() {
        return html`
        <p>Soy texto uno</p>
        <p class="${this.myBool ? 'fuchsia' : 'cyan'}">Soy texto dos</p>
        <p class="${this.myString}">Soy texto tres</p>
        
        <button 
        @click="${this.clickHandler}">Click!</button>`;
    }

    clickHandler(e) {
        this.myBool = !this.myBool;
    }
}

customElements.define('text-colors', MyElement);