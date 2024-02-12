import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { VDashElement } from "../../../../core/vDashElement.mixin";

@customElement("v-dash-layout")
export class VDashLayout extends VDashElement({
  name: "layout",
  render: (state: any) =>
    html`<v-dash-layout .$state=${state}></v-dash-layout>`,
}) {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
  render() {
    console.log(this.$state);

    return html`layout -- ${this.$state.config.test}`;
  }
}
