<template>
   <div id="app" class="container">
      <h3>Todo List</h3>
      <ol>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button class="btn" @click="editTodo(index, todo)">Edit</button>
          <button class="btn" @click="removeTodo(index)">Hapus</button>
        </li>
      </ol>
      <div v-if="!isEditing">
        <input class="ipt" type="text" v-model="todo" />
        <input class="submit" type="submit" value="Tambahkan" @click="storeTodo" />
        <p v-if="this.todos.length >= 4">Hebat!</p>
      </div>
      <div v-else>
        <input class="ipt" type="text" v-model="todo" />
        <input class="submit" type="submit" value="Update" @click="updateTodo" />
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
h3 {
  text-align: center;
  margin-top: 50px;
  font-family: 'Times New Roman', Times, serif;
}
.ipt {
  width: 91%;
}
.btn {
  margin: 15px;
  width: 7%;
}

</style>