import { LitElement, html } from "lit-element";

class CursoLit extends LitElement {

    constructor() {
        super();

        this.name = 'Frontend Anatomy';
    }

    static get properties() {
        return {
            name: {
                type: String,
                reflect: true,
                attribute: 'my-name'
            }
        }
    }

    // firstUpdated() {
    //     console.log('El elemento se ha renderizado por primera vez');
    // }

    // connectedCallback() {
    //     super.connectedCallback();
    //     console.log('Se ha añadido al DOM');
    // }

    // disconnectedCallback() {
    //     super.disconnectedCallback();
    //     console.log('Se ha eliminado del DOM');
    // }

    update(changedProperties) {
        console.log(changedProperties)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        console.log(`${name}: ${oldValue} --> ${newValue}`);

        // if(this._internalBind) {
        //     this._internalBind = false;
        // } else {
        //     if (name === 'name') {
        //         this.name = newValue;
        //     }
        // }
    }
    handleButtonClick(e) {
        this._cont++;
        console.log(this._cont);
    }

    render() {
        return html`
        <button @click=${this.handleButtonClick}>Incrementa</button>
        <p id="contador">${this._cont}</p>
        `;
    }
}

customElements.define('lit-element', CursoLit);