<script lang="ts">
  import { user } from "../systems/user.svelte";
  
  let userInput = $state("");

  const handleUsername = (e) => {
    if(e.target.value != "")
        userInput = e.target.value
  };
</script>

<main>

    <input
      type="text"
      placeholder="Choose a name.."
      onkeyup={(e) => {
        handleUsername(e);
      }}
    />
    <button
      onclick={() => {
        user.setUsername(userInput);
      }}>SUBMIT</button
    >
</main>

<style>
    main {
        display:flex;
        height:100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:8px;
    }
    input {
        width:200px;
        padding: 8px;
        border-radius:2px;
        border:none;
        box-sizing: border-box;
    }

    button {
        width:100%;
        padding:6px;
        width:200px;
    }
</style>