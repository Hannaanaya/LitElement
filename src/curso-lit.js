import { LitElement, html } from "lit-element";

class CursoLit extends LitElement {
    constructor() {
        super();

        this.name = 'Frontend Anatomy';
        this.cont = 0;
        this.borrame = 'Borrame';
    }

    static get properties() {
        return{
            name: {
                type: String,
                reflect: true,
                attribute: 'my-name'
            },
            cont: {
                type: Number 
            },
            datamanager: {
                type: String
            }
        }
    }

    async handleButtonClick(e) {
        this.cont++;
        await this.updateComplete;

        console.log(this.cont, this.shadowRoot.querySelector('#contador'))
    }

    update(changedProps) {
        console.log('updated');

        if (changedProps.has('name') || changedProps.has('surname')) {
            this.nombreCompleto == this.name + '' + this.surname;
        }
    }

    saluda(msg) {
        setTimeout(() => {
            this.dispatchEvent(new CustomEvent('greeting', {
                detail: {
                    msg: msg 
                },
                bubbles: true,
                composed: true 
            }));
        }, 1000)
    }

    render() {
        return html`
        <p id="contador">${this.cont}</p>
        <p>${this.name} - ${this.surname}</p>
        <p>${this.borrame}</p>
        `;
    }

}

customElements.define('curso-lit', CursoLit);