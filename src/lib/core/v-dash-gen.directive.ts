import { TemplateResult } from "lit";
import { Directive, ElementPart, directive } from "lit/async-directive.js";
import { vDashComponentRegistry } from "./registry";

class VDashGen extends Directive {
  attributeNames = "";
  public host: any;
  private state: any;
  private _render!: (state: any) => TemplateResult;
  update(_part: ElementPart, props: any) {
    if (!this.host) {
      this.init(props[0]);
    }
    return this.render();
  }
  render(...props: unknown[]): unknown {
    console.log(props);
    return this._render(this.state);
  }

  private init({ host, name, config }: any) {
    this.host = host;
    const elementToRender = vDashComponentRegistry[name];
    this._render = elementToRender.render;
    this.generateState(host, config);
  }
  private generateState(host: any, config: any) {
    const _parentRef = host;
    const parentState = host.$state;
    this.state = Object.create(parentState);
    Object.assign(this.state, { _parentRef, parentState, config });
  }
}

export const generateVDashElement = directive(VDashGen);
