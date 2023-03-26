import { LitElement, html, css } from 'lit';

class HeroComponent extends LitElement {
  static styles = css`
    .hero {
      min-width: 1000px;
      height: 80vh;
    }

    @media screen and (max-width: 1200px) {
      .hero {
        min-width: 100%;
        height: 100%;
      }
    }
  `;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html` <div class="hero">
      <img src="./images/heros/hero-image_4.jpg" width="100%" height="100%" alt="" />
    </div>`;
  }
}

customElements.define('hero-component', HeroComponent);

export default HeroComponent;
// Path: src\scripts\view\components\HeroComponent.js
