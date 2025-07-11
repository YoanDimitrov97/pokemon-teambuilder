<script lang="ts">
  import { pkmn } from "../systems/pokemon.svelte";
  import { namify } from "../utils/namify";

</script>

<div id='draft_container'>
    {#each pkmn.allPokemon.slice(0, 64) as pokemon}
        <div class="box">
            <h4>{pokemon.name}</h4>
            <img src={`https://play.pokemonshowdown.com/sprites/home-centered/${namify(pokemon.name)}.png`} alt="">
            
        </div>
    {/each}
</div>

<style>
    #draft_container {
        display:grid;
        grid-template-columns: repeat(8, 1fr);
        gap:8px;
        width:85%;
        margin:32px auto 0 auto;
    }
    .box {
        max-width:320px;
        border:3px solid lightgray;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius:8px;
        cursor:pointer;

        &:hover, &:hover p {
            background:white;
            color:#333;
        }
    }

    img {
        width:70%;
    }

    h4 {
        font-size:clamp(10px, 1.1vw, 12px);
        width:100%;
        text-overflow: ellipsis;
        text-align: center;
        padding:8px;
        box-sizing: border-box;
    }
</style>