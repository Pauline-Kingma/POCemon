import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { deletePokemon } from './pokemon.actions.js';
import { Pokemon } from './pokemon.models';
import { pokemonService } from './pokemon.service.js';
import { store } from './store';

@customElement('my-element')
export class MyElement extends LitElement {
  @state() pokemon: Pokemon[] = store.getState().pokemon;

  @state() loading = false;

  render() {
    return html`
    <div class="title">POCémon</div>
    <div class=cards>${this.pokemon.map(pok =>
      html`
      <div class="card">
        <div class="title">
          <div class="name">${pok.name}</div>
          <button @click=${() => this.#onDeletePokemon(pok)}>X</button>
        </div>
        <div class="type">Type: ${pok.type}</div>
        <div class="size">Lengte: ${pok.size.height}</div>
        <div class="weight">Gewicht: ${pok.size.weight}</div>
        <div class="abilities">Abilities: ${pok.abilities.join(', ')}</div>
        <div class="label">Stats</div>
        <div class="stats">
          <div class="part-stats">
            <div class="stat">HP: ${pok.base_stats.HP}</div>
            <div class="stat">Attack: ${pok.base_stats.Attack}</div>
            <div class="stat">Defense: ${pok.base_stats.Defense}</div>
          </div>
          <div class="part-stats">
            <div class="stat">Special Attack: ${pok.base_stats.SpecialAttack}</div>
            <div class="stat">Special Defense: ${pok.base_stats.SpecialDefense}</div>
            <div class="stat">Speed: ${pok.base_stats.Speed}</div>
          </div>
        </div>
      </div>
    `)}</div>
    `
  }

  override async connectedCallback(): Promise<void> {
    super.connectedCallback();
    
    // Call service = dispatch action in NgRx
    await pokemonService.loadPokemon();

    // Get new state = selector in NgRx
    this.pokemon = store.getState().pokemon;
  }

  #onDeletePokemon(pokemon: Pokemon): void {
    store.dispatch(deletePokemon(pokemon));
    this.pokemon = store.getState().pokemon;
  }

  static styles = css`
    :host {     
      text-align: center;
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
    }

    .card {
      border: 4px solid darkseagreen;
      border-radius: 5px;
      width: 280px;
      padding: 4px;
      margin: 0.5rem;
    }

    .title {
      display: flex;
      justify-content: space-between;
    }

    .name {
      font-weight: bold;
      font-size: 1.5rem;
      color: darkseagreen;
      margin-bottom: 8px;
    }

    button {
      width: 35px;
      background: white;
      border: 1px solid darkseagreen;
      color: darkseagreen;
      font-size: large;
      cursor: pointer;
      border-radius: 2px;
    }

    .label {
      font-weight: bold;
      margin-top: 0.5rem;
    }

    .stats {
      display: flex;
      border: 2px solid darkseagreen;
      border-radius: 2px;
      padding: 4px;
      place-content: space-between;
    }

    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
    }

    .spinner {
      border: 4px solid rgba(0, 0, 0, 0.3);
      border-top: 4px solid darkseagreen;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

  `
}
