<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input class="filled-in" type="checkbox"
             v-on:change="todo.completed = !todo.completed"
      >
      <strong>{{index + 1}}</strong>
      {{ todo.title | uppercase }}
    </span>

    <button class="btn-floating btn-small waves-effect waves-light red"
            v-on:click="$emit('remove-todo', todo.id)"
    >
      <i class="material-icons">close</i>
    </button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped lang="sass">
li
  border: 1px solid #ccc
  display: flex
  justify-content: space-between
  padding: .5rem 2rem
  margin-bottom: 1rem

input
  margin-right: 1rem

.done
  text-decoration: line-through
</style>
