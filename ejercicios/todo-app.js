import { LitElement } from "lit-element";

class TodoApp extends LitElement {
    connectedCallback() {
      super.connectedCallback();
      console.log('lit element connected');
    }
  }
  
  customElements.define('todo-app', TodoApp);