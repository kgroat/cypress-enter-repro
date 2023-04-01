# Cypress enter reproduction

## The issue
When you `.type('{enter}')` or `.type(' ')` on a button, Cypress fires a `click` event on the element.  However, inside a shadow root, it the event won't bubble through the shadow root because `composed` is not set to `true` (see [the MDN docs on `composed`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed)).

## The fix
The `click` event fired by `.type('{enter}')` or `.type(' ')` should have `composed` set to `true`.
