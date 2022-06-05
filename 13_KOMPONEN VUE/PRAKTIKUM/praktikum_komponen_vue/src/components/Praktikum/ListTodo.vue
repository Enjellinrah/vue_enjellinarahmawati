<template>
   <div id="app" class="container">
      <h1>Todo List</h1>
      <ol>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button @click="editTodo(index, todo)">Edit</button>
          <button @click="removeTodo(index)">Delete</button>
        </li>
      </ol>
      <div v-if="!isEditing">
        <input type="text" v-model="todo" />
        <input type="submit" value="Tambahkan" @click="storeTodo" />
        <p v-if="this.todos.length >= 4">Hebat!</p>
      </div>
      <div v-else>
        <input type="text" v-model="todo" />
        <input type="submit" value="Update" @click="updateTodo" />
      </div>
      
    </div>
</template>

<script>
export default {
  name: "ListTodo",
  data() {
    return  {
          isEditing: false,
          todo: "",
          todos: [],
          selectedTodo: null,
        }
  },
  methods: {
    storeTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo);
      this.todo = "";
      this.isEditing = false;
    },
    editTodo(index, todo) {
      this.isEditing = true;
      this.todo = todo;
      this.selectedIndex = index;
    },
  },
};
</script>

<style>
h1 {
  color: maroon;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 30px;
}
li {
  margin: 20px;

}
</style>