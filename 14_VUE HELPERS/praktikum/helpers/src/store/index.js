import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isEditing: false,
    selectedTodo: null,
    todos: []
},
mutations: {
  storeTodo(state, todo) {
    if (todo = "") {
      alert("Harap diisi tidak boleh kosong");
    } else {
      state.todos.push(todo);
    }
  },
  removeTodo(state, index) {
    state.todos.splice(index, 1);
  },
  updateTodo(state, todo) {
    state.todos.splice(this.selectedIndex, 1, todo);
    todo = "";
    state.isEditing = false;
  },
  editTodo(state, index) {
    state.isEditing = true;
    this.selectedIndex = index;
  },
}
})