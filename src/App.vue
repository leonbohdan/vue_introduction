<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-bind:todos="todos">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      todos: [
        { id: 1, title: 'Buy brad', completed: false },
        { id: 2, title: 'Buy eggs', completed: false },
        { id: 3, title: 'Buy butter', completed: false },
        { id: 4, title: 'Buy apples', completed: false },
      ],
    };
  },
};
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
