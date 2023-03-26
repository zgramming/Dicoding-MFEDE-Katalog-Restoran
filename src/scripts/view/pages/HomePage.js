/* eslint-disable no-unused-vars */
import axios from 'axios';
import '../components/HeroComponent';
import { BASE_URL } from '../../utils/constant';
import { createRestaurantItemTemplate } from '../template/TemplateCreator';

const HomePage = {
  async render() {
    return `
        <hero-component></hero-component>
        <div class="container list-restaurant" id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const { data: dataRequest } = await axios.get(`${BASE_URL}/list`);
    const { restaurants } = dataRequest;
    const restaurantList = document.querySelector('#restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
