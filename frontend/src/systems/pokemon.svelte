<script lang="ts" module>
  import type { Pokemon } from "../types/Pokemon";

  let allPokemon: Pokemon[] = $state([]);
  let pokemonList: Pokemon[] = $state([]);
  let currentTeam: Pokemon[] = $state([]);
  let randomizedList: Pokemon[] = $state([]);

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
  fetchPokemon()

  export const team = {
    get currentTeam() {
      return currentTeam;
    },
  }

  export const pkmn = {
    get allPokemon() {
      return allPokemon;
    },
    get pokemonList() {
      return pokemonList;
    },
    
    filterPokemonList: (filteredList: Pokemon[]) => pokemonList = filteredList 
    //fetchAllPokemon: () => fetchPokemon(),
  };
</script>
