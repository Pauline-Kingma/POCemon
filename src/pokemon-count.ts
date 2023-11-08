import { LitElement, css, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Pokemon } from './pokemon.models';
import { pokemonService } from './pokemon.service.js';
import { store } from './store';
import { setLoading } from './pokemon.actions.js';

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
    
    this.pokemon = store.getState().pokemon;
  }
  
  static styles = css`
    :host {     
      text-align: center;
    }
  `
}
