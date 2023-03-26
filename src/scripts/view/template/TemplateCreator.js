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

const createRestaurantCustomerReviews = (customerReviews) => {
  const component = customerReviews.map((review) => {
    const { name, date, review: reviewText } = review;
    const formattedDate = new Date(date).toLocaleDateString('id-ID', {
      dateStyle: 'full',
    });
    const initial = name
      .split(' ')
      .map((item) => item[0])
      .join('');

    return `
      <div class="detail-restaurant__review-item__content">
        <div class="detail-restaurant__review-item__image">${initial.toUpperCase()}</div>
        <h4 class="detail-restaurant__review-item__name">${name}</h4>
        <p class="detail-restaurant__review-item__date">${formattedDate}</p>
      </div>

      <q class="detail-restaurant__review-item__description">
        ${reviewText}
      </q>
    `;
  });

  return component.join('');
};

const createRestaurantDetailTemplate = (restaurant) => {
  // eslint-disable-next-line max-len
  const { name, description, pictureId, city, rating, address, menus, customerReviews } = restaurant;
  const { foods, drinks } = menus;

  const image = BASE_IMAGE_URL(pictureId, 'large');
  const formattedRating = parseFloat(rating).toFixed(1);

  const componentFoods = foods.map((food) => `<span class="detail-restaurant__food-item">${food.name}</span>`).join('');
  const componentDrinks = drinks
    .map((drink) => `<span class="detail-restaurant__drink-item">${drink.name}</span>`)
    .join('');

  const componentReviews = createRestaurantCustomerReviews(customerReviews);

  const component = `
      <img
        class="detail-restaurant__image-hero"
        src="${image}"
        width="100%"
        alt=""
      />
      <div class="detail-restaurant__content">
        <h1 class="detail-restaurant__name">${name}</h1>
        <div class="detail-restaurant__rating-lokasi">
          <div class="detail-restaurant__rating">
            <i class="fas fa-star"></i>
            <p>${formattedRating}</p>
          </div>
          <div class="detail-restaurant__lokasi">
            <i class="fas fa-map-marker-alt"></i>
            <p>${city}</p>
          </div>
        </div>

        <div class="detail-restaurant__address">
          <p>${address}</p>
        </div>

        <p class="detail-restaurant__description">
          ${description}
        </p>

        <div class="detail-restaurant__food-drink">
          <div class="detail-restaurant__food">
            <h3>Makanan</h3>
            <div class="detail-restaurant__food-list">
              ${componentFoods}
            </div>
          </div>
          <div class="detail-restaurant__drink">
            <h3>Minuman</h3>
            <div class="detail-restaurant__drink-list">
              ${componentDrinks}
            </div>
          </div>
        </div>

        <div class="detail-restaurant__review">
          <h3>Ulasan</h3>
          <div class="detail-restaurant__review-list" id="detail-restaurant-review-list">
            ${componentReviews}
          </div>
        </div>

        <div class="detail-restaurant__add-review">
          <h3>Tambahkan Ulasan</h3>
          <form action="" class="detail-restaurant__add-review-form">
            <div class="detail-restaurant__add-review-form__input">
              <label for="name">Nama</label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="detail-restaurant__add-review-form__input">
              <label for="review">Ulasan</label>
              <textarea name="review" id="review" cols="30" rows="5"></textarea>
            </div>
            <button id="button-review" class="button-review">Kirim</button>
          </form>
        </div>
      </div>
  `;

  return component;
};

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };

// Path: src\scripts\view\pages\HomePage.js
