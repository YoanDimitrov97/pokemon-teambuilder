<script lang="ts">
  import type { Pokemon } from "../types/Pokemon";

  import {pkmn} from "../systems/pokemon.svelte";
  import {team} from "../systems/pokemon.svelte";
  import { capitalize } from "../utils/capitalize";
  import { namify } from "../utils/namify";

  const addPokemonToTeam = (pokemon: Pokemon) => {
    if (team.currentTeam.length < 6) {
      team.currentTeam.push(pokemon)
      console.log(team.currentTeam, 'currentTeam');
    }
  }
</script>

<div class="pokemonListContainer">
  <div class="head">
    <p>Sprite</p>
    <p>Name</p>
    <p>Type</p>
    <p>Abilities</p>
    <p>HP</p>
    <p>ATK</p>
    <p>DEF</p>
    <p>SPATK</p>
    <p>SPDEF</p>
    <p>SPD</p>
    <p>Usage Rate</p>
  </div>
  <div class="pokemonList">
    {#each pokemon.pokemonList as pokemon, id}
      <div class="row" onkeyup={()=>{}} tabindex={id} role="link" aria-labelledby="foo" onclick={()=> addPokemonToTeam(pokemon)}>
        <img
          src={`https://play.pokemonshowdown.com/sprites/home-centered/${namify(pokemon.name)}.png`}
          alt=""
        />
        <p>{pokemon.name}</p>
        <span>
          <img
            class="pkmnType"
            src={`https://play.pokemonshowdown.com/sprites/types/${capitalize(pokemon?.types?.[0])}.png`}
            alt=""
          />
          {#if pokemon?.types?.[1]}
            <img
              class="pkmnType"
              src={`https://play.pokemonshowdown.com/sprites/types/${capitalize(pokemon?.types?.[1])}.png`}
              alt=""
            />
          {/if}
        </span>
        <p>{pokemon.abilities[0]?.ability}</p>
        <p>{pokemon.stats?.hp}</p>
        <p>{pokemon.stats?.atk}</p>
        <p>{pokemon.stats?.def}</p>
        <p>{pokemon.stats?.spa}</p>
        <p>{pokemon.stats?.spd}</p>
        <p>{pokemon.stats?.spe}</p>
        <p>{pokemon.percent}%</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .pokemonList {
    overflow-y: scroll;
    height: calc(50vh - 48px);
  }
  .head {
    display: grid;
    grid-template-columns: 80px 1fr 1fr 1fr 80px 80px 80px 80px 80px 80px 1fr;
    justify-items: center;
    background: #555;
    height: 48px;
    align-items: center;
  }

  .row {
    display: grid;
    grid-template-columns: 80px 1fr 1fr 1fr 80px 80px 80px 80px 80px 80px 1fr;
    align-items: center;
    justify-items: center;
    height: 48px;
    cursor: pointer;

    &:nth-child(odd) {
      background: #333;
    }

    &:hover {
      background: #777;
    }
  }

  img {
    width: 40px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .pkmnType {
    width: 40px;
    height: 20px;
  }
</style>
