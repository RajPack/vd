import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("v-panel")
export class VPanel extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
  render() {
    return html`<div class="v-panel"></div>`;
  }
}
