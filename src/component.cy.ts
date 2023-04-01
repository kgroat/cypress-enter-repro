import { html } from 'lit';

import './button';

function logIt () {
  console.log('button clicked');
}

describe('HTML Button', () => {
  it('should be clicked when typing "{enter}"', () => {
    cy.mount(html`<button @click=${cy.spy(logIt).as('clickListener') as Function}>Foo</button>`);

    cy.get('button').focus().type('{enter}');

    cy.get('@clickListener').should('have.been.called');
  });
});

describe('my-button', () => {
  it('should be clicked when typing "{enter}"', () => {
    cy.mount(html`<my-button @click=${cy.spy(logIt).as('clickListener') as Function}>Baz</my-button>`);

    cy.get('my-button').shadow().find('button').focus().type('{enter}');

    cy.get('@clickListener').should('have.been.called');
  });
});
