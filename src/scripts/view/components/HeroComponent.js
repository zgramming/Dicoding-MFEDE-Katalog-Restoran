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
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg" />
      </picture>
      <img loading="lazy" src="./images/heros/hero-image_4-large.jpg" width="100%" height="100%" alt="Hero Image" />
    </div>`;
  }
}

customElements.define('hero-component', HeroComponent);

export default HeroComponent;
// Path: src\scripts\view\components\HeroComponent.js
