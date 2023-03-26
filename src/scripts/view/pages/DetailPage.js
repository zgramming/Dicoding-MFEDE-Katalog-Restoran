import axios from 'axios';
import { BASE_URL } from '../../utils/constant';
import UrlParser from '../../routes/url-parser';

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
    // const detailRestaurant = document.querySelector('#detail-restaurant');
    console.log(restaurant);
    // detailRestaurant.innerHTML += '<h1>DetailRestaurant</h1>';
  },
};

export default DetailPage;
