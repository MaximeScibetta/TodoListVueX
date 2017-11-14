<template>
    <div>
        <input  class="form-control"
                type="text" placeholder="What needs to be done ?" 
                @keydown.enter="sendTask($event.target.value)"
                v-model="newTask">
        <input class="checkAll" type="checkbox" @click="checkAll()">
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
