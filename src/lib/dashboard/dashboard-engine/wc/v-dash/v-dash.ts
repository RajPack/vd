import { html, css, PropertyValueMap, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateVDashElement } from "../../../../core/v-dash-gen.directive";
import { VDashElement } from "../../../../core/vDashElement.mixin";

@customElement("v-dash")
export class VDash extends VDashElement({
  name: "dashboard",
  render: (state: any) => html`<v-dash .$state=${state}></v-dash>`,
}) {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    console.log(this.$state);
    return html`<div class="v-dash">
      VDash
      <div>
        ${generateVDashElement({
          name: "layout",
          host: this,
          config: { test: "sdf" },
        })}
      </div>
    </div>`;
  }
}
