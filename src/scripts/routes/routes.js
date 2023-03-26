import DetailPage from '../view/pages/DetailPage';
import FavoritePage from '../view/pages/FavoritePage';
import HomePage from '../view/pages/HomePage';

const routes = {
  '/': HomePage, // default page
  '/favorite': FavoritePage,
  '/detail/:id': DetailPage,
};

export default routes;
