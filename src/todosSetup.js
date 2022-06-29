import { computed, ref  } from "vue";
//import initialTodos from '@/mockup/todos.js'

//const todos = ref([...initialTodos])
const todos = ref([])
const todosIncompleted = computed(
    function(){
        let resuInc = todos.value.filter( t => !t.completed)
        return resuInc
    }
)

const todosCompleted = computed(
    function(){
        let resuCom = todos.value.filter( t => t.completed)
        return resuCom
    }
)

const length = computed(() => todos.value.length);

const toggle = function (id) {
    const todo = todos.value.find( t=> t.id === id )
    if (todo?.completed !== undefined) {
        todo.completed = !todo.completed
    }
}

const deleteTodo = (id) => {
    todos.value = todos.value.filter(t=>t.id !==id)
}

const add = (name) => {
   todos.value.push( {id: length.value + 1, name, completed: false} )
}

const update = (payload_todos) => {
    todos.value = payload_todos
}

const todosFactory = () => ({ todosIncompleted, toggle, todosCompleted, deleteTodo, add, update })
export {todosFactory}