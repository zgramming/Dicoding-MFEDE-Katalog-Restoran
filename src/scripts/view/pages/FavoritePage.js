const FavoritePage = {
  async render() {
    return `
        <hero-component></hero-component>
        <div class="list-restaurant" id="restaurant-list"></div>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurantList = document.querySelector('#restaurant-list');
    restaurantList.innerHTML = '<h1>Favorite Restaurant</h1>';
  },
};

export default FavoritePage;
