import axios from 'axios';
import { BASE_URL } from '../../utils/constant';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../template/TemplateCreator';

const DetailPage = {
  async render() {
    return `
    <div class="container detail-restaurant" id="detail-restaurant">
    </div>
    `;
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();

    // Fungsi ini akan dipanggil setelah render()
    const { data: dataRequest } = await axios.get(`${BASE_URL}/detail/${id}`);
    const { restaurant } = dataRequest;
    const detailRestaurant = document.querySelector('#detail-restaurant');
    console.log(restaurant);
    detailRestaurant.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default DetailPage;
