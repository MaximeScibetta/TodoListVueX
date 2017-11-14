<template>
    <div>
        <input  class="form-control"
                type="text" placeholder="What needs to be done ?" 
                @keydown.enter="sendTask($event.target.value)"
                v-model="newTask">
        <input v-if="filteredTasks.length" class="checkAll" type="checkbox" @click="checkAll()" v-bind:checked="itemLeft == 0" >

    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'TodoForm',
  data(){
      return{
        newTask: '',
      }
  },
  computed:{
      ...mapGetters([
          'itemLeft',
          'filteredTasks',
      ])
  },
  methods:{
      ...mapMutations([
            'checkAll'
      ]),
      sendTask(){
          this.$store.commit('sendTask', this.newTask)
          this.newTask = '';
      }
  }
}
</script>
