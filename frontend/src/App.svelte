<script lang="ts">
  import Draft from "./lib/Draft.svelte";
  import PickName from "./lib/PickName.svelte";
  import Rooms from "./lib/Rooms.svelte";

  import Teambuilder from "./lib/Teambuilder.svelte";
  import { user } from "./systems/user.svelte";
</script>

<main>
  {#if user.username == ""}
    <PickName />
  {:else}
    <Rooms />
    <!-- <Draft/> -->
  {/if}
</main>

<style>
</style>
