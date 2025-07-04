<script lang='ts'>
    import type { Pokemon } from "../types/Pokemon.ts";

    let {allPokemon = $bindable(), pokemonList = $bindable()} = $props();

    const searchForPokemon = (e) => {
        console.log(e.target.value);
        pokemonList = allPokemon.filter((pkmn: Pokemon) => {
            return pkmn.name.toLowerCase().includes(e.target.value.toLowerCase())
        })

        console.log(pokemonList);
        
    }
</script>

<div class="pokemonContainer">
    <input type="text" placeholder="Pokemon" on:input={searchForPokemon}>
    <img src="https://wiki.p-insurgence.com/images/0/09/722.png" alt="">
</div>

<style>
    .pokemonContainer {
        display:flex;
        flex-direction:column;
        gap:20px;
        max-width:280px;
        height:50vh;
    }

</style>