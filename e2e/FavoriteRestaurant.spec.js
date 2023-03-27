const assert = require('assert');

Feature('FavoriteRestaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan');

  I.amOnPage('/');

  I.seeElement('.list-restaurant');

  I.waitForElement('.list-restaurant-item__action', 5);

  const firstRestaurant = locate('.list-restaurant-item__title').first();

  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  const firstButton = locate('.list-restaurant-item__action').first();

  I.click(firstButton);

  I.seeElement('#button-favorite');

  I.click('#button-favorite');

  I.amOnPage('/#/favorite');

  I.seeElement('.list-restaurant-item');

  I.waitForElement('.list-restaurant-item__action', 5);

  const likedRestaurantName = await I.grabTextFrom('.list-restaurant-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Cancel liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan');
    
    I.amOnPage('/');
    
    I.seeElement('.list-restaurant');
    
    I.waitForElement('.list-restaurant-item__action', 5);
    
    const firstRestaurant = locate('.list-restaurant-item__title').first();
    
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    
    const firstButton = locate('.list-restaurant-item__action').first();
    
    I.click(firstButton);
    
    I.seeElement('#button-favorite');
    
    I.click('#button-favorite');
    
    I.amOnPage('/#/favorite');
    
    I.seeElement('.list-restaurant-item');
    
    I.waitForElement('.list-restaurant-item__action', 5);
    
    const likedRestaurantName = await I.grabTextFrom('.list-restaurant-item__title');
    
    assert.strictEqual(firstRestaurantName, likedRestaurantName);
    
    I.click(firstButton);
    
    I.seeElement('#button-favorite');
    
    I.click('#button-favorite');
    
    I.amOnPage('/#/favorite');
    
    I.see('Tidak ada restaurant untuk ditampilkan');
});

// Path: e2e\unfavoriteRestaurant.spec.js
