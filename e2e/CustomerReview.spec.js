const assert = require('assert');

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add customer review', async ({ I }) => {
  I.seeElement('.list-restaurant');

  I.waitForElement('.list-restaurant-item__action', 5);

  const firstButton = locate('.list-restaurant-item__action').first();

  I.click(firstButton);

  I.waitForElement('#button-review', 5);

  I.fillField('#name', 'Zeffry Reynando Tampan');

  I.fillField('#review', 'This is a review');

  I.click('#button-review');

  I.waitForText('Zeffry Reynando Tampan', 5);

  I.waitForText('This is a review', 5);
});
