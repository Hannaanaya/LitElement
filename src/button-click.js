import { LitElement, html } from "lit-element";

class Buttons extends LitElement {
    render() { 
        return html`
        <p>Incrementar ${this.state}</p>
    ${this.hidden ?
        html`<button
    @click="${this.handleClick}">Cambiar de 
    botón</button>`
    : 
    html`<button
    @click="${this.handleClock}">Cambiar de 
    botón</button>` 
     }
    `;
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean
            },
            state: {
                type: Number
            }
        };
    }

    constructor() {
        super();
        this.hidden = false;
        this.state = 0;
    }

    handleClick(e) {
        this.hidden = !this.hidden;
        this.state += ( 1 + this.hidden ); 
    }

    handleClock(e) {
        this.hidden = !this.hidden;
        this.state += ( 2 + this.hidden ); 
    }

    
}

customElements.define('button-click', Buttons);