import { BASE_IMAGE_URL } from '../../utils/constant';

const createRestaurantItemTemplate = (restaurant) => {
  const { name, description, pictureId, city, rating } = restaurant;
  const image = BASE_IMAGE_URL(pictureId);
  const component = `
      <div class="list-restaurant-item" tabindex="0">
        <div class="list-restaurant-item__image">
          <img src="${image}" width="100%" alt="" />
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
          <div class="list-restaurant-item__action">
            <a href="#/detail/${restaurant.id}" class="btn btn--primary">Detail</a>
          </div>
        </div>
      </div>
    `;

  return component;
};
// eslint-disable-next-line import/prefer-default-export
export { createRestaurantItemTemplate };

// Path: src\scripts\view\pages\HomePage.js
