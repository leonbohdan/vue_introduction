<template>
  <div>
    <h1>Todo Application</h1>
    <hr>

    <ul>
      <TodoItem />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
};
</script>

<style scoped lang="sass">

</style>
