<template>
  <div id="todolist">
		<div class="container">
			<h1>ToDo List</h1>
			<div class="input-group">
				<input style="width: 96%" type="text" class="form-control" v-model="todosForm"> 
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
		<p v-if="this.todos.length >= 4">Hebat!</p>
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
#todolist {
  margin: 50px;
}
h1 {
	text-align: center;
	color: maroon;
}
table, th, td {
  margin-top: 50px;
  margin-left: 35%;
  border: 1px solid;
  text-align: center;
  position: center;
}
</style>