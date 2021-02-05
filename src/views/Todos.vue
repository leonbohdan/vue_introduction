<template>
  <div class="todos">
    <router-link to="/">Home</router-link>

    <AddTodo
        @add-todo="addTodo"
    />

    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr>

    <Loader v-if="loading" />
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import Loader from '@/components/Loader.vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default {
  name: 'app',
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  data() {
    return {
      projects: '',
      todos: [],
      loading: true,
      filter: 'all',
    };
  },
  mounted() {
    const db = firebase.database();

    const name = db.ref('name');

    name.on('value', (elem) => {
      this.projects = elem.val();
    });
    console.log(db);
    // console.log(projects);

    // fetch(db.refFromURL())
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.projects = json;
    //     this.loading = false;
    //   });

    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setTimeout(() => {
    //       this.todos = json;
    //       this.loading = false;
    //     }, 1000);
    //   });
  },
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   },
  // },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }

      if (this.filter === 'completed') {
        return this.todos.filter((todo) => todo.completed);
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter((todo) => !todo.completed);
      }

      return this.todos;
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
};
</script>
