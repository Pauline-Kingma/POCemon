import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Pokemon } from './pokemon.models';
import { store } from './store';

@customElement('pokemon-count')
export class PokemonCount extends LitElement {
  @state() pokemon: Pokemon[] = store.getState().pokemon;

  override render(): TemplateResult {
    return html`
      <div class='count'>Total count: ${this.pokemon ? html`${this.pokemon?.length}` : html`0`}</div>
    `;
  }

  override async connectedCallback(): Promise<void> {
    super.connectedCallback();
    
    store.subscribe(() => {
      this.pokemon = store.getState().pokemon;
    });
  }
  
  static styles = css`
    :host {     
      text-align: center;
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `
}
