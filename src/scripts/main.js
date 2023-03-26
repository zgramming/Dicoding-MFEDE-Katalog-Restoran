import datas from '../DATA.json';

import './components/DrawerComponent';

const main = () => {
  // const BASE_URL = 'https://restaurant-api.dicoding.dev/v1';
  const fetchRestaurant = () => {
    const restaurantList = document.querySelector('#restaurant-list');
    datas.restaurants.forEach((restaurant) => {
      const { name, description, pictureId, city, rating } = restaurant;

      const component = `
        <div class="list-restaurant-item" tabindex="0">
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
      restaurantList.innerHTML += component;
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    fetchRestaurant();
  });
};

export default main;
