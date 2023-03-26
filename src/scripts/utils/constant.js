const BASE_URL = 'https://restaurant-api.dicoding.dev';
const BASE_IMAGE_URL = (pictureID, resolution = 'small') => `https://restaurant-api.dicoding.dev/images/${resolution}/${pictureID}`;

const DATABASE_NAME = 'restaurant-catalogue-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'restaurant';

export { BASE_URL, BASE_IMAGE_URL, DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME };
