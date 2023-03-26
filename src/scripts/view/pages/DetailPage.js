import axios from 'axios';
import { BASE_URL } from '../../utils/constant';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../template/TemplateCreator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const DetailPage = {
  async render() {
    return `
    <div class="container detail-restaurant" id="detail-restaurant"></div>
    <button class="detail-restaurant__favorite" id="button-favorite">🤍</button>
    `;
  },

  async _renderFavoriteButton(restaurant) {
    const button = document.querySelector('#button-favorite');
    const { id } = restaurant;
    const result = await FavoriteRestaurantIdb.getRestaurant(id);
    const isRestaurantExist = !!result;

    if (isRestaurantExist) {
      button.innerHTML = '❤️';
    } else {
      button.innerHTML = '🤍';
    }

    button.addEventListener('click', async () => {
      if (isRestaurantExist) {
        await FavoriteRestaurantIdb.deleteRestaurant(id);
        button.innerHTML = '🤍';
      } else {
        await FavoriteRestaurantIdb.putRestaurant(restaurant);
        button.innerHTML = '❤️';
      }

      this._renderFavoriteButton(restaurant);
    });
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();

    const { data: dataRequest } = await axios.get(`${BASE_URL}/detail/${id}`);
    const { restaurant } = dataRequest;
    const detailRestaurant = document.querySelector('#detail-restaurant');
    detailRestaurant.innerHTML = createRestaurantDetailTemplate(restaurant);
    this._renderFavoriteButton(restaurant);
  },
};

export default DetailPage;
