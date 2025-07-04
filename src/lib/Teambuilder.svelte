<script lang="ts">
  import PokemonBox from "./PokemonBox.svelte";
  import type { Pokemon } from "../types/Pokemon";
  import PokemonList from "./PokemonList.svelte";

  let allPokemon: Pokemon[] = $state([]);
  let pokemonList: Pokemon[] = $state([]);


  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        "https://pikalytics.com/api/p/2025-05/gen9ou-1825/"
      );
      const data = await response.json();
      allPokemon = [...data]; // Replace the entire array
      pokemonList = [...data]; // Create a new array reference
      console.log(allPokemon, "ouPokemon");
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };
  fetchPokemon();
</script>

<div>
  <PokemonBox bind:allPokemon={allPokemon} bind:pokemonList={pokemonList}/>
  <PokemonList pokemonList={pokemonList} />
</div>
