<template>
  <div id="app">
    <ListTodo />
  </div>
</template>

<script>
import ListTodo from '@/components/Praktikum/ListTodo.vue'

export default {
  name: 'App',
  components: {
    ListTodo
  }
}
</script>

<style>
input {
  width:100%
}
</style>
