<template>
  <div id="app">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo }}
      </li>
    </ol>
        <input type="text" v-model="newTodo"/>
        <button @click="addTodo">Tambahkan</button>
        <p v-if="this.todos.length >= 4">Hebat!</p>
        <p v-if="this.todos.empty = false"></p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      newTodo: "",
      todos:[],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 50px;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
