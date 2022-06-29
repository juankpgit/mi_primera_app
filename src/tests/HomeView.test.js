import {mount} from '@vue/test-utils'
import {test, vi, describe, expect } from 'vitest'
import HomeView from '@/views/HomeView.vue'
import  * as todoSetup from '@/todosSetup.js'
import { computed } from 'vue'

const setupMock = {
    todosIncompleted : computed( ()=>[]),
    todosCompleted : computed( ()=>[]),
    toggle: vi.fn(),
    deleteTodo: vi.fn(),
    add: vi.fn(),
    update: vi.fn(),

}

describe( 'Mi primer test',() => {
    test('test de componente',()=>{
        const wrapper = mount(HomeView)
        expect(wrapper.text()).toContain("Todo List");
    })

    test('La lista está vacia',() => {
        const spy = vi.spyOn(todoSetup, 'todosFactory').mockReturnValue({
            ...setupMock
        })
        const wrapper = mount(HomeView)
        expect (wrapper.text()).toContain('Todo List')
        expect (wrapper.text()).toContain('Nothing todo')
    })
})