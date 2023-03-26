import axios from 'axios';
import { BASE_URL } from '../../utils/constant';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../template/TemplateCreator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const _fetchRestaurantDetail = async () => {
  const { id } = UrlParser.parseActiveUrlWithoutCombiner();

  const { data: dataRequest } = await axios.get(`${BASE_URL}/detail/${id}`);
  const { restaurant } = dataRequest;
  return restaurant;
};

const DetailPage = {
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

  async _addReview() {
    const form = document.querySelector('#form-review');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const { id } = UrlParser.parseActiveUrlWithoutCombiner();
      const name = document.querySelector('#name').value;
      const review = document.querySelector('#review').value;
      const data = {
        id,
        name,
        review,
      };
      await axios.post(`${BASE_URL}/review`, data);

      const restaurant = await _fetchRestaurantDetail();
      const detailRestaurant = document.querySelector('#detail-restaurant');
      detailRestaurant.innerHTML = createRestaurantDetailTemplate(restaurant);

      form.reset();
    });
  },

  async render() {
    return `
    <div class="container detail-restaurant" id="detail-restaurant"></div>
    <button class="detail-restaurant__favorite" id="button-favorite">🤍</button>
    `;
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();

    const { data: dataRequest } = await axios.get(`${BASE_URL}/detail/${id}`);
    const { restaurant } = dataRequest;
    const detailRestaurant = document.querySelector('#detail-restaurant');
    detailRestaurant.innerHTML = createRestaurantDetailTemplate(restaurant);

    this._renderFavoriteButton(restaurant);
    this._addReview();
  },
};

export default DetailPage;
