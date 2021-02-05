<template>
  <div>
    <div>{{ projects }}</div>
    <ul>
      <TodoItem
        v-for="(todo, i) of todos"
        v-bind:key="todo.id"
        v-bind:index="i"
        v-bind:todo="todo"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id);
    },
  },
};
</script>

<style scoped lang="sass">

</style>
