<template>
  <ul>
    <li :key="i" v-for="(item, i) in items">{{ item }}</li>
  </ul>
  <input v-model="str" />
  <button @click="addItem">Add todo</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [],
      str: '',
    };
  },
  methods: {
    addItem() {
      if (this.str) {
        this.items.push(this.str);
        localStorage.setItem('todo-list', JSON.stringify(this.items));
        this.str = '';
      }
    },
  },
  mounted() {
    this.items = JSON.parse(localStorage.getItem('todo-list') || '[]');
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
  line-height: 1.5;
}

body {
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>
