import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  render() {
    return html`
      <button type='button'><slot></slot></button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
