import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  const button = document.querySelector('#button-favorite');
  await LikeButtonInitiator.init({
    likeButtonContainer: button,
    favoriteRestaurant: restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
