<script setup>
    import {todosFactory} from '@/todosSetup.js'

  const { todosIncompleted, toggle, todosCompleted, deleteTodo } = todosFactory()


</script>

<template>
 <p>
   https://youtu.be/d6huvfcBBH4?t=3118

 </p>

  <h3>Todo List</h3>
  <ul id="incomplete-tasks">
    <li v-for="todo in todosIncompleted" :key="todo.id" @click="toggle(todo.id)">
      <input type="checkbox">
      <label>{{ todo.name }}</label>
      <input type="text">
      <button class="delete" @click="deleteTodo(todo.id)" >Delete</button>
     </li>
  </ul>
  <h3>Completed</h3>
  <ul id="completed-tasks">
    <li v-for="todo in todosCompleted" :key="todo.id" @click="toggle(todo.id)">
      <input type="checkbox" checked>
      <label>{{ todo.name }}</label>
      <input type="text">
      <button class="delete" @click="deleteTodo(todo.id)" >Delete</button>
     </li>
  </ul>

</template>

<style>

</style>