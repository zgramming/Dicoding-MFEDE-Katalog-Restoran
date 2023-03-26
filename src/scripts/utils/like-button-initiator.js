import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRestaurant }) {
    this._likeBtnContainer = likeButtonContainer;
    this._favoriteRestaurant = favoriteRestaurant;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._favoriteRestaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeBtnContainer.innerText = '🤍';
    this._likeBtnContainer.setAttribute('aria-label', 'like this restaurant');
    const likeButton = document.querySelector('#button-favorite');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._favoriteRestaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeBtnContainer.innerText = '❤️';
    this._likeBtnContainer.setAttribute('aria-label', 'unlike this restaurant');
    const likeButton = document.querySelector('#button-favorite');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._favoriteRestaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;

// Path: src\scripts\utis\like-button-initiator.js
