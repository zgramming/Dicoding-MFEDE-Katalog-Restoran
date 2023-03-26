import { LitElement, html, css } from 'lit';

class DrawerComponent extends LitElement {
  _onDrawerOpen(event) {
    event.preventDefault();
    this.renderRoot.getElementById('drawer').style.width = '100%';
  }

  _onDrawerClose(event) {
    event.preventDefault();
    this.renderRoot.getElementById('drawer').style.width = '0';
  }

  static styles = css`
    header {
      background-color: #fcb07c;
    }

    .navigation {
      display: flex;
      flex-wrap: wrap;
      gap: 20pt;
    }

    .navigation div a {
      color: black;
      font-size: 14pt;
      text-decoration: none;
      padding: 10px;
    }

    .header {
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      align-items: center;
    }

    .text-logo a {
      color: black;
      text-decoration: none;
      padding: 10px;
    }

    .button-open-drawer {
      display: none;
    }

    .button-close-drawer {
      background-color: transparent;
      border: none;
      cursor: pointer;
      width: 44px;
      height: 44px;
    }

    .drawer {
      position: fixed;
      width: 0;
      top: 0;
      right: 0;
      height: 100%;
      background-color: #fcb07c;
      z-index: 1;
      transition: 0.5s;
    }

    @media screen and (max-width: 1200px) {
      .navigation {
        display: none;
      }

      .drawer .header {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        align-items: start;
      }

      .drawer .logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .drawer .navigation {
        display: flex;
        flex-direction: column;
        gap: 20pt;
        padding: 1rem;
      }

      .button-open-drawer {
        display: block;
        background-color: transparent;
        color: blue;
        border: none;
        cursor: pointer;
        width: 44px;
        height: 44px;
      }
    }
  `;

  render() {
    return html`
      <div class="drawer" id="drawer">
        <div class="header">
          <div class="logo">
            <h1 class="text-logo"><a href="#">Resto Apps</a></h1>
            <button class="button-close-drawer" id="button-close-drawer" @click="${this._onDrawerClose}">❌</button>
          </div>
          <nav class="navigation">
            <div><a href="/">Home</a></div>
            <div><a href="#/favorite">Favorite</a></div>
            <div><a href="https://github.com/zgramming" target="_blank">About Us</a></div>
          </nav>
        </div>
      </div>
      <header>
        <div class="header">
          <h1 class="text-logo"><a href="#">Resto Apps</a></h1>
          <button class="button-open-drawer" id="button-open-drawer" @click="${this._onDrawerOpen}">🪟</button>
          <nav class="navigation">
            <div><a href="/">Home</a></div>
            <div><a href="#/favorite">Favorite</a></div>
            <div><a href="https://github.com/zgramming" target="_blank">About Us</a></div>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('drawer-component', DrawerComponent);

export default DrawerComponent;

// Path: src\scripts\components\DrawerComponent.js
