<template>
    <div id="app">
          <h1>Todo List by Maxime le King</h1>
          <todo-form></todo-form>
          <ul class="list-group">
              <li class="list-group-item" v-for="(task, key) in filteredTasks">
                  <template v-if="task.editable == false" >
                    <input type="checkbox" :id="key" v-model="task.completed" @click="removeFromFilter(key)">
                    <label @dblclick="isEditable(key)" @keyup.prevent.enter="notEditable(key)" :contenteditable="task.editable">{{task.title}}</label>
                  </template>
                  <template v-if="task.editable == true">
                    <input type="checkbox" :id="key" v-model="task.completed" @click="removeFromFilter(key)">
                    <input type="text" @keyup.prevent.enter="notEditable(key)" @blur="notEditable(key)" :contenteditable="task.editable" v-model="task.title">
                  </template>
                  <button @click="removeTask(key)" class="delete">x</button>
              </li>
          </ul>
    </div>
</template>

<script>
import TodoForm from './TodoForm'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'TodoList',
  components:{
      TodoForm,
  },
  computed:{
        ...mapGetters([
            'filteredTasks'
        ]),
  },
  methods:{
        ...mapMutations([
            'removeTask',
            'isEditable',
            'notEditable',
            'removeFromFilter'
        ])
  },
}
</script>
