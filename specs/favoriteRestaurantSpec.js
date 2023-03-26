import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking A Restaurant', () => {
  const addLikeButton = () => {
    document.body.innerHTML = '<button class="detail-restaurant__favorite" id="button-favorite" aria-label="like this restaurant">🤍</button>';
  };

  beforeEach(() => {
    addLikeButton();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    const button = document.querySelector('#button-favorite');

    await LikeButtonInitiator.init({
      likeButtonContainer: button,
      favoriteRestaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    const button = document.querySelector('#button-favorite');

    await LikeButtonInitiator.init({
      likeButtonContainer: button,
      favoriteRestaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    const button = document.querySelector('#button-favorite');

    await LikeButtonInitiator.init({
      likeButtonContainer: button,
      favoriteRestaurant: {
        id: 1,
      },
    });

    document.querySelector('#button-favorite').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    const button = document.querySelector('#button-favorite');

    await LikeButtonInitiator.init({
      likeButtonContainer: button,
      favoriteRestaurant: {
        id: 1,
      },
    });

    // Tambahkan restaurant dengan ID 1 ke daftar restaurant yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#button-favorite').dispatchEvent(new Event('click'));
    // tidak ada restaurant yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // menggunakan metode xit, bukan it
  it('should not add a restaurant when it has no id', async () => {
    const button = document.querySelector('#button-favorite');

    await LikeButtonInitiator.init({
      likeButtonContainer: button,
      favoriteRestaurant: {},
    });

    document.querySelector('#button-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
