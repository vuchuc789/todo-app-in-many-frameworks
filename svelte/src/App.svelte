<script>
  import { onMount } from 'svelte';

  let items = [];
  let str = '';

  onMount(() => {
    items = JSON.parse(localStorage.getItem('todo-list') || '[]');
  })

  function addItem() {
    if (str) {
      items = [...items, str];
      localStorage.setItem('todo-list', JSON.stringify(items));
      str = ''
    }
  }
</script>

<main>
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  <input bind:value={str}/>
  <button on:click={addItem}>Add todo</button>
</main>

<style>
</style>
