<template>
    <div>
        <p>{{itemLeft}} item left</p>
        <ul>
            <li><button class="btn btn-primary" @click="filterTasks('all')">All</button></li>
            <li><button class="btn btn-success" @click="filterTasks('active')">Active</button></li>
            <li><button class="btn btn-warning" @click="filterTasks('completed')">Completed</button></li>
            <li><button class="btn btn-danger" @click="clearCompleted()">Clear completed</button></li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: 'todo-footer',
    computed:{
        ...mapGetters([
            'itemLeft',
        ]),
    },
    methods:{
        ...mapMutations([
            'filterTasks',
            'clearCompleted',
        ]),
    }
}
</script>
