import { LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { vDashComponentRegistry } from "./registry";

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class VDashElementInterface {
  $state: any;
}

export const VDashElement = <T extends Constructor<LitElement>>(
  props: { name: string; render: (state: any) => TemplateResult },
  superClass: T = LitElement as unknown as T
) => {
  vDashComponentRegistry[props.name] = props;
  class VDashElement_ extends superClass {
    @property({ attribute: false })
    $state: any = {};

    connectedCallback() {
      super.connectedCallback();
    }
  }

  // Cast return type to your mixin's interface intersected with the superClass type

  return VDashElement_ as Constructor<VDashElementInterface> & T;
};
