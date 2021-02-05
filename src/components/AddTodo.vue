<template>
  <form @submit.prevent="onSubmit">
    <input class="input"
           type="text"
           v-model="title"
    >
    <button class="btn waves-effect" type="submit">Create Todo</button>
  </form>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        this.$emit('add-todo', newTodo);
        this.title = '';
      }
    },
  },
};
</script>

<style scoped lang="sass">
form
  display: flex
  justify-content: center
  width: 100%
  margin: 1.5rem 0

input
  width: 100%
  max-width: 400px
  min-height: 30px
  margin-right: 10px

</style>
