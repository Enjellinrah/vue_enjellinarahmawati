<template>
	<div class="container">
		<h1>ToDo List</h1>
		<div v-if="!$store.state.isEditing">
      <input type="text" v-model="todo" required />
      <input text="submit" value="Tambahkan" class="inputButton" @click="storeTodo" />
    </div>
    <div v-else>
      <input type="text" v-model="todo" />
      <input text="submit" value="Update" @click="updateTodo" class="updateButton" />
    </div>
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        <router-link :to="{ name: 'Detail', params: { id: index } }">
          {{ todo }}
        </router-link>
        <button @click="editTodo(index, todo)" class="editButton">
          Edit
        </button>
        <button @click="removeTodo(index)" class="deleteButton">Delete</button>
      </li>
      <p v-if="this.todos.length >= 4">Hebat!</p>
    </ol>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      todo: "",
      todos: this.$store.state.todos,
    };
  },
  methods: {
    storeTodo() {
      this.$store.commit("storeTodo", this.todo);
    },

    removeTodo(index) {
      this.$store.commit('removeTodo', index);
    },

    updateTodo() {
      this.$store.commit("updateTodo", this.todo);
    },

    editTodo(index, todo) {
      this.$store.commit('editTodo', index);
    },
  },
};
</script>
<style>
input{
  width: 70%;
  margin-right: 2%;
}
.inputButton{
  width: 20%;
}
editButton{
  margin-right: 5%;
}
</style>