<script lang="ts">
  import { pkmn, team } from "../systems/pokemon.svelte";
  import type { Pokemon } from "../types/Pokemon.ts";
  import { namify } from "../utils/namify.js";
import closeBtnImg from "../assets/close.png";

  const searchForPokemon = (e) => {
    
    const filteredPokemon = pokemon.allPokemon.filter((pkmn: Pokemon) => {
      return pkmn.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    pokemon.filterPokemonList(filteredPokemon)
  };
</script>

<div class="pokemonContainer">
  {#if team.currentTeam.length > 0}
    {#each team.currentTeam as teamMember}
      <div class="pokemonBox">
        <input type="text" placeholder="Pokemon" on:input={searchForPokemon} />
        <img
          src={`https://play.pokemonshowdown.com/sprites/home-centered/${namify(teamMember.name)}.png`}
          alt=""
        />
      </div>
    {/each}
  {:else}
    <div class="pokemonBox">
      <input type="text" placeholder="Pokemon" on:input={searchForPokemon} />
      <img src="https://wiki.p-insurgence.com/images/0/09/722.png" alt="" />
    </div>
  {/if}
  <div class="pokemonBox">
    <button>
        <img class="closeBtn" src={closeBtnImg} alt="">
    </button>
    
    <input type="text" placeholder="Pokemon" on:input={searchForPokemon} />
    <img src="https://wiki.p-insurgence.com/images/0/09/722.png" alt="" />
  </div>
</div>

<style>
  .pokemonContainer {
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    gap:10px;
    align-items: center;
    height: 50vh;
  }
  .pokemonBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 280px;
    border:5px solid darkred;
    border-radius:5px;

    button {
        width:20px;
        height:20px;
        background:none;
        border:none;

        .closeBtn {
            width:100%;
            height:100%;
            filter: invert(1);
        }
    }
  }
</style>
