<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
      <ul class="nav">
        <RouterLink to="/">Todo List</RouterLink>
      </ul>
    <RouterView />
  </div>
</template>

<style>

</style>
