<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
      <ul class="nav">
        <RouterLink to="/"><li>Todo List</li></RouterLink>
        <RouterLink to="/new"><li>New Todo</li></RouterLink>
      </ul>
    <RouterView />
  </div>
</template>

<style>

</style>
