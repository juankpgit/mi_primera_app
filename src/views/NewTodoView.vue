

<script setup>
    import {todosFactory} from '@/todosSetup.js'
    import router from '../router/index.js'

    const {add} = todosFactory()

    const addAndNavigate = (name) => {
        add(name)
        router.push('/')
    }

</script>

<template>
    <div class="container">
        <label for="new-task">New Todo: </label>
        <input type="text" id="new-task" v-model="name">
        <button type="add" @click="addAndNavigate(name)">Add</button>
    </div>

</template>