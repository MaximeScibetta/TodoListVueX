<template>
    <div>
        <input  class="form-control"
                type="text" placeholder="What needs to be done ?" 
                @keydown.enter="sendTask($event.target.value)">
        <input class="checkAll" type="checkbox" @click="checkAll()">
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'TodoForm',
  computed:{
      ...mapGetters([
      ])
  },
  methods:{
      ...mapMutations([
            'updateNewTask',
            'sendTask',
            'checkAll'
      ]),
  }
}
</script>
