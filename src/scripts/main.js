import $ from 'jquery';

import restaurants from '../DATA.json';

const main = () => {
  const fetchRestaurant = () => {
    const restaurantList = $('#restaurant-list');
    restaurants.restaurants.forEach((restaurant) => {
      const { id, name, description, pictureId, city, rating } = restaurant;
      const component = `
        <div class="list-restaurant-item">
          <div class="list-restaurant-item__image">
            <img src="${pictureId}" width="100%" alt="" />
            <div class="list-restaurant-item__rating">
              <i class="fas fa-star"></i>
              <p>${parseFloat(rating).toFixed(1)}</p>
            </div>
          </div>
          <div class="list-restaurant-item__content">
            <h3 class="list-restaurant-item__title">${name}</h3>
            <p class="list-restaurant-item__description">${description}</p>
            <div class="list-restaurant-item__location">
              <i class="fas fa-map-marker-alt"></i>
              <p>${city}</p>
            </div>
          </div>
        </div>
      `;
      restaurantList.append(component);
    });
  };

  $('#button-open-drawer').on('click', function () {
    $('#drawer').css('width', '100%');
  });

  $('#button-close-drawer').on('click', function () {
    $('#drawer').css('width', '0');
  });

  document.addEventListener('DOMContentLoaded', () => {
    fetchRestaurant();
  });
};

export default main;
