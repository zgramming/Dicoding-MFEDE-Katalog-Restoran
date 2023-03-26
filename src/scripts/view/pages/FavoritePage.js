import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../template/TemplateCreator';

const FavoritePage = {
  async render() {
    return `
        <hero-component></hero-component>
        <div class="container list-restaurant" id="restaurant-list"></div>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantList = document.querySelector('#restaurant-list');

    if (restaurants.length === 0) {
      restaurantList.innerHTML = '<h2 class="content__heading">Tidak ada restaurant untuk ditampilkan</h2>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default FavoritePage;
