/// <reference types='cypress' />
/// <reference types='vite/client' />

import { mount } from 'cypress-ct-lit-element';
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      mount: typeof mount;
    }
  }
}
