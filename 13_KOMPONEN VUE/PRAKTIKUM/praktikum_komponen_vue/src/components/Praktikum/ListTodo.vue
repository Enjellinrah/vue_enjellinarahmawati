<template>
  <div id="todolist">
		<div class="container p-5">
			<h1 class="mb-4">ToDo List</h1>
			<div class="input-group mb-5 w-100">
				<input type="text" class="form-control" v-model="todosForm"> 
				<div class="input-group-append" v-if="isEdit"> 
				<button class="btn btn-success" id="edit-todos" v-on:click="updateTodos">Update</button> 
			</div>
			<div class="input-group-append" /><button class="btn btn-primary" id="add-todos" v-on:click="addTodos">Tambahkan</button>
			</div>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th style="width: 6%">No</th>
					<th style="width: 70%">To Dos</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(todo, index) in todos" :key="index">
					<td>{{ index+1 }}</td> 
					<td>{{ todo }}</td> 
					<td>
						<button class="btn btn-info" v-on:click="editTodos(index)">Edit</button> 
						<button class="btn btn-danger" v-on:click="deleteTodos(index)">Hapus</button> 
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
  name: "ListTodo",
  data() {
    return  {
		todosForm: '', 
		isEdit: false, 
		edited: '',
		todos: [],
    }
  },
  methods : {
    addTodos() {
			this.todos.push(this.todosForm); 
			this.todosForm = ''; 
		},
	editTodos(index) { 
		this.todosForm = this.todos[index]; 
		this.edited = index; 
		this.isEdit = true; 
		},
    updateTodos() { 
		this.todos[this.edited] = this.todosForm; 
		this.edited = ''; 
		this.todosForm = ''; 
		this.isEdit = false;
		},
		deleteTodos(index) {  
		this.todos.splice(index, 1); 
	},
  },
};
</script>
<style>
h1 {
	text-align: center;
	color: maroon;
}
</style>